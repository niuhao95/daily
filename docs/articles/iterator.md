### 什么是迭代器

#### 可迭代协议

必须实现 `@@iterator` 方法，对象（或者它原型链上的某个对象）必须有一个键为 `@@iterator` 的属性，并可通过常量 `Symbol.iterator` 访问该属性：

| 属性| 值|
| -| -|
| `[Symbol.iterator]`| 一个无参数的函数，其返回值为一个符合迭代器协议的对象|

调用它的 `@@iterator` 方法，然后使用此方法返回的`迭代器`获得要迭代的值。

#### 迭代器协议

必须实现一个`next`方法，返回一个应当拥有以下两个属性的对象：

1. `done（boolean）`
    - `true` 已将序列迭代完毕
    - `false` 可以产生序列中的下一个值

2. `value` 迭代器返回的任何值，done 为 true 时可省略。

#### 满足迭代器协议和可迭代协议的对象
```js
var myIterator = {
  // 迭代器协议
  next: function() {
      // ...
  },
  // 可迭代协议
  [Symbol.iterator]: function() { return this }
}
```

#### 内置可迭代对象

目前所有的内置可迭代对象如下：`String`、`Array`、`TypedArray`、`Map` 和 `Set`，它们的原型对象都实现了 `@@iterator` 方法。

#### 自定义可迭代对象

```js
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable]; // [1, 2, 3]
```

```js
var someString = new String("hi");
someString[Symbol.iterator] = function() {
  return { // 只返回一次元素，字符串 "bye"，的迭代器对象
    next: function() {
      if (this._first) {
        this._first = false;
        return { value: "bye", done: false };
      } else {
        return { done: true };
      }
    },
    _first: true
  };
};

[...someString];                              // ["bye"]
someString + "";                              // "hi"
```

#### 什么时候需要可迭代对象

一些语句和表达式需要可迭代对象，比如 [for...of循环](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)、[展开语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)、[yield*](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/yield*)，和[解构赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)。

#### 生成器函数 `function*`

定义一个 `generator function`，它返回一个 `Generator` 对象。

```js
// yield*
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i){
  yield i;
  yield* anotherGenerator(i);// 移交执行权
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
```

```js
// 传递参数
function *createIterator() {
    let first = yield 1;
    let second = yield first + 2; // 4 + 2
                                  // first =4 是next(4)将参数赋给上一条的
    yield second + 3;             // 5 + 3
}

let iterator = createIterator();

console.log(iterator.next());    // "{ value: 1, done: false }"
console.log(iterator.next(4));   // "{ value: 6, done: false }"
console.log(iterator.next(5));   // "{ value: 8, done: false }"
console.log(iterator.next());    // "{ value: undefined, done: true }"
```

#### 生成器对象 `Generator`

由一个 `generator function` 返回的，符合`可迭代协议`和`迭代器协议`。

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

let g = gen(); // "Generator { }"

g.next();        // { value: 1, done: false }
g.return("foo"); // { value: "foo", done: true }
g.next();        // { value: undefined, done: true }
```