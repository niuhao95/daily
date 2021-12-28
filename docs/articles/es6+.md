### ES6

todo

### ES7

| 特性| 说明|
| -| -|
| `Array.prototype.includes`||
| Exponentiation operator| 指数函数的中缀表示法|

#### `Array.prototype.includes`

::: details e.g.
```js
const arr = [1, 2, 3, NaN];

if (!arr.includes(2, 3)) {
  //第二个参数3表示数组下标为3的项，也即第4项开始查找
  console.warn("不存在!"); // 不存在！
}

//下面两句说明incluedes和indexOf的区别
console.log(arr.includes(NaN)); //true
console.log(arr.indexOf(NaN) != -1); //false
```
:::

#### 指数函数的中缀表示法

与 `Math.pow` 相关，语法类似 `i++` , `x += x` ，用 `**` 表示

::: details e.g.
```js
let cubed = 2 ** 3; //等同于: 2 * 2 * 2

let b = 3;
b **= 3; //等同于: b = b * b * b;
```
:::

### ES8

| 特性| 说明|
| -| -|
| `Object.values`/`Object.entries`||
| String padding| 字符串追加|
| `Object.getOwnPropertyDescriptors`||
| Trailing commas in function parameter lists and calls| 结尾允许逗号|
| Async functions| 异步函数|

#### `Object.values`/`Object.entries`

*注意: 当把数字当做对象的键的时候，返回的数组以键的值升序排序*

::: details e.g.
```js
const obj = { x: 'xxx', y: 1 };
Object.values(obj); // ['xxx', 1]

const obj = { 10: 'xxx', 1: 'yyy', 3: 'zzz' };
Object.values(obj); // ['yyy', 'zzz', 'xxx']

const obj = ['e', 's', '8']; // === { 0: 'e', 1: 's', 2: '8' };
Object.values(obj); // ['e', 's', '8']
Object.values('es8'); // ['e', 's', '8']
```
```js
const obj = { x: 'xxx', y: 1 };
Object.entries(obj); // [['x', 'xxx'], ['y', 1]]

const obj = { 10: 'xxx', 1: 'yyy', 3: 'zzz' };
Object.entries(obj); // [['1', 'yyy'], ['3', 'zzz'], ['10', 'xxx']]

const obj = ['e', 's', '8'];
Object.entries(obj); // [['0', 'e'], ['1', 's'], ['2', '8']]
Object.entries('es8'); // [['0', 'e'], ['1', 's'], ['2', '8']]
```
:::

#### `String.padStart(targetLength,[padString])`/`String.padEnd(targetLength,padString])`

*targetLength*：当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身。  
*padString*：(可选)填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断，此参数的缺省值为空格。

::: details e.g.
```js
'es8'.padStart(2);          // 'es8'
'es8'.padStart(5);          // '  es8'
'es8'.padStart(6, '1891');  // '189es8'
'es8'.padStart(14, 'coffe');  // 'coffecoffeces8'
'es8'.padStart(7, '0');     // '0000es8'

'es8'.padEnd(2);            // 'es8'
'es8'.padEnd(5);            // 'es8  '
'es8'.padEnd(6, '1891');    // 'es8189'
'es8'.padEnd(14, 'coffe');    // 'es8coffecoffec'
'es8'.padEnd(7, '9');       // 'es89999'
```
:::

#### `Object.getOwnPropertyDescriptors(obj)`

返回`obj`自身定义的属性内容，而不是从`object`的原型继承而来的。这个方法返回的值可能是 `configurable`、`enumerable`、`writable`、`get`、`set` 和 `value`。

::: details e.g.
```js
const obj = { 
  get es7() { return 7; },
  get es8() { return 8; }
};
Object.getOwnPropertyDescriptors(obj);
// {
//   es7: {
//     configurable: true,
//     enumerable: true,
//     get: function es7(){}, //the getter function
//     set: undefined
//   },
//   es8: {
//     configurable: true,
//     enumerable: true,
//     get: function es8(){}, //the getter function
//     set: undefined
//   }
// }
```
:::

### ES9

| 特性| 说明|
| -| -|
| `for await...of`| 异步迭代器|
| `Promise.prototype.finally`||
| Lifting template literal restriction| 重新修订了字面量的转义|
| Rest/Spread Properties| Rest/Spread 属性|
| [dotAll/命名捕获组/反向断言/Unicode转义](/another/Regex)| 正则表达式|

#### `for await...of`

::: details e.g.
```js
async function* streamAsyncIterator(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        return;
      }
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}
// 从url获取数据并使用异步 generator 来计算响应值的大小
async function getResponseSize(url) {
  const response = await fetch(url);
  // Will hold the size of the response, in bytes.
  let responseSize = 0;
  // 使用for-await-of循环. 异步 generator 会遍历响应值的每一部分
  for await (const chunk of streamAsyncIterator(response.body)) {
    // Incrementing the total response length.
    responseSize += chunk.length;
  }

  console.log(`Response Size: ${responseSize} bytes`);
  // expected output: "Response Size: 1071472"
  return responseSize;
}
getResponseSize('https://jsonplaceholder.typicode.com/photos');
```
:::

#### 重新修订了字面量的转义 `String.raw()`

`ES9` 之前，`\u`表示 unicode 转义，`\x`表示十六进制转义，`\`后跟一个数字表示八进制转义，这使得创建特定的字符串变得不可能，例如Windows文件路径`C:\uuu\xxx\111`。

::: details e.g.
```js
let s = `\u{54}` //会转义成unicode "T"
console.log(s);//>> T

let str = String.raw`\u{54}`; //不会被转义
console.log(str);//>> \u{54}
```
:::

#### Rest/Spread

`...`在ES6中已经引入，但是ES6中的作用对象仅限于数组。在ES9中，为对象提供了像数组一样的rest参数和扩展运算符：

::: details e.g.
```js
const obj = {
  a: 1,
  b: 2,
  c: 3
};
const { a, ...param } = obj; //这里...是rest
console.log(a); //>> 1
console.log(param); //>> {b: 2, c: 3}

function foo({ a, ...param }) {//这里...还是rest
  console.log(a); //>> 1
  console.log(param); //>> {b: 2, c: 3}
}

const param = { b: 2, c: 3 };
foo({ a: 1, ...param });  //此处...为spread
```
:::

### ES10

| 特性| 说明|
| -| -|
| Optional `catch` binding| 可选的 catch 变量绑定|
| `Symbol.prototype.description`| Symbol 对象的 description 属性|
| `Function.prototype.toString` revision| 修订`Function.prototype.toString`|
| `Object.fromEntries`||
| `trimStart`/`trimEnd`| `String.prototype.{trimStart,trimEnd}`|
| `flat`/`flatMap`| `Array.prototype.{flat,flatMap}`|

#### 可选的 catch 变量绑定

在 ES10 之前，我们必须通过语法为 catch 子句绑定异常变量，无论是否有必要。很多时候 catch 块是多余的，而 ES10 使我们能够简单的把变量省略掉。

#### Symbol 对象的 description 属性

ES10 中为 Symbol 对象添加了只读属性 `description` ，返回包含 Symbol 描述的字符串。

::: details e.g.
```js
let sym = Symbol('foo');//添加的描述内容为“foo”
console.log(sym.description);//>> foo

sym = Symbol();
console.log(sym.description);//>> undefined

//和 Symbol() 不同的是，用 Symbol.for() 方法创建的的 symbol 会被放入一个全局 
//symbol 注册表中。Symbol.for() 并不是每次都会创建一个新的 symbol，它会首先检
//查给定的 key 是否已经在注册表中了。假如是，则会直接返回上次存储的那个。否则，它
//会再新建一个。
sym = Symbol.for('bar');
console.log(sym.description);//>> bar
```
:::

#### 修订Function.prototype.toString

函数原型上的方法toString()现在返回精确字符，包括空格和注释。

::: details e.g.
```js
function /* comment */ foo /* another comment */() {}

//ES10之前不会打印注释部分
console.log(foo.toString()); //>> function foo(){}

//ES10里，会把注释一同打印
console.log(foo.toString()); //>> function /* comment */ foo /* another comment */ (){}

//注意：
//箭头函数是个例外
const bar /* comment */ = /* another comment */ () => {};
console.log(bar.toString()); //>> () => {}
```
:::

#### Object.fromEntries

`Object.fromEntries()` 执行与 `Object.entries()` 互逆的操作。

::: details e.g.
```js
// Map 转化为 Object
const map = new Map([ ['foo', 'bar'], ['baz', 42] ]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }
```
```js
// Array 转化为 Object
const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }
```
```js
// 对象转换
const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1)
  .map(([ key, val ]) => [ key, val * 2 ])
);

console.log(object2);
// { a: 2, b: 4, c: 6 }
```
:::

#### String.prototype.{trimStart,trimEnd}

分别去除字符串首、尾的空白字符

#### Array.prototype.{flat,flatMap}

- `Array.prototype.flat` 数组的所有项会以指定的维度降维（扁平化）
  ::: details e.g.
  ```js
  let r = ["1", ["8", ["9", ["1"]]]].flat();//4维数组，默认降维1，变成3维数组
  console.log(r); //>> [ '1', '8', [ '9', ['1'] ] ]

  r = ["1", ["8", ["9", ["1"]]]].flat(2); //4维数组，降维2，变成2维数组
  console.log(r); //>> [ '1', '8', '9', ['1'] ]

  r = ["1", ["8", ["9", ["1"]]]].flat(Infinity);//4维数组，最多变成1维数组
  console.log(r); //>> [ '1', '8', '9', '1' ]
  ```
  :::
- `Array.prototype.flatMap` 先会执行一次`map()`方法，然后再通过类似`flat()`方法扁平化数组
  ::: details e.g.
  ```js
  let r = ["I love", "coffe 1891"].map(item => item.split(" "));
  console.log(r); //>> [ [ 'I', 'love' ], [ 'coffe', '1891' ] ]

  r = ["I love", "coffe 1891"].flatMap(item => item.split(" "));
  console.log(r); //>>[ 'I', 'love', 'coffe', '1891' ]
  ```
  :::

### ES11

| 特性| 说明|
| -| -|
| Optional Chaining `?.`| 可选链操作符|
| Nullish coalescing Operator `??`| 空值合并操作符|
| `String.prototype.matchAll`||
| `import()`||
| `Promise.allSettled`||
| Bigint||
| globalThis||

#### import()

`import()`和`import`的区别
- import() 可以用在script脚本区，不止是模块内。
- 如果在模块内使用import()，它可以在任何地方任何级别执行，而不是被提升到顶级（优先执行）。
- import() 是运行时执行，也即什么时候运行到这句，就会加载参数指定的模块；参数也可以是动态可变的，不止是静态参数。
- import() 不建立可静态分析的依赖关系（静态分析的情况下可以做很多优化），但是，在一些比较简单的情况下，比如import（“/foo.js”）中，实现仍然可以执行静态分析优化。

::: details e.g.
```js
import('./module.js')
.then(module => {
  console.log(module.default);//直接通过default属性获得模块暴露的接口
});
```
:::

#### Promise.allSettled

::: details e.g.
```js
Promise.allSettled([Promise.resolve("coffe"), Promise.reject("1891")]).then(
  arr => {
    console.log(arr); //>> [ { status: "fulfilled", value: "coffe"},
                      //>>   { status: "rejected", reason: "1891" } ]
  }
);
```
:::

#### Bigint
 
Number 类型超出这个范围的整数计算或者表示会丢失精度
- `Number.MIN_SAFE_INTEGER`: `-(2^53-1)`
- `Number.MAX_SAFE_INTEGER`: `(2^53-1)`

*它是JavaScript的第7个原始类型，不能将 BigInt与Number混合使用。比较Number和 BigInt是可以的，但是不能把它们相加。*

::: details e.g.
```js
var num = Number.MAX_SAFE_INTEGER;  // >> 9007199254740991
num = num + 1; // >> 9007199254740992
// 再次加 +1 后无法正常运算
num = num + 1; // >> 9007199254740992
// 两个不同的值，却返回了true
9007199254740992 === 9007199254740993  // >> true

// bigInt
const aNumber = 1891;
const aBigInt = BigInt(aNumber);
aBigInt === 1891n // true
typeof aBigInt === 'bigint' // true
typeof 1891 // "number"
typeof 1891n // "bigint"

1234567890123456789n * 123n; // -> 151851850485185185047n

1n < 2 // true
1n + 2 // Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
```
:::

#### globalThis

兼容 `浏览器`/`Node.js`/`Web Workers`

::: details e.g.
```js
// ES10之前的解决方案
const getGlobal = function(){
  if(typeof self !== 'undefined') return self
  if(typeof window !== 'undefined') return window
  if(typeof global !== 'undefined') return global
  throw new Error('unable to locate global object')
}

// ES10内置
globalThis.Array(0,1,2) // [0,1,2]

// 定义一个全局对象v = { value:true } ,ES10用如下方式定义
globalThis.v = { value:true }

// worker
globalThis === self
// node
globalThis === global
// browser
globalThis === window
```
:::

### ES12
