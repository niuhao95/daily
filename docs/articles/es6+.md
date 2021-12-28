### es6

### es7

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

### es8

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

### es9

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

```js
let s = `\u{54}` //会转义成unicode "T"
console.log(s);//>> T

let str = String.raw`\u{54}`; //不会被转义
console.log(str);//>> \u{54}
```

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

### es10

### es11
