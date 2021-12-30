#### 题目：输出什么？
```js
let a = 1;

(function a(){
   console.log(a);
   a = 2;
   console.log(a);
   console.log(window.a)
})()

console.log(a);

// 'use strict'模式下
// 1. 函数
// 2. 报错 TypeError: Assignment to constant variable.

// 非严格模式下
// 1. 函数
// 2. 函数
// 3. undefined
// 4. 1
```

------
### let / const / var / function / class

var 声明的变量具有变量提升作用，并且在 ES6 规定，var 命令和 function 命令声明的全局变量，依旧是顶层对象的属性，但 let、const 和 class命令声明的全局变量，不属于顶层对象的属性。另外 function 的生命优先于 var 命令。

### 函数表达式 vs 函数声明

#### 函数表达式

不以 `function` 开头的函数语句就是函数表达式。

```js
// e.g.
let function_expression = function [name]() {
   ...
};
```

- name 可省略，name 只是函数体中的一个只读的本地变量
- 函数表达式没有提升

当函数只使用一次时，通常使用立即执行函数表达式 `IIFE (Immediately Invokable Function Expressions)`，在函数声明后立即调用的函数表达式。

```js
(function() {
    ...
})();
```

#### 函数声明

- 函数声明会被提升

#### 块级函数

- 从 es6 开始，在严格模式下，块里的函数作用域为这个块。
- 在非严格模式下，块中的函数声明表现奇怪。

```js
if (shouldDefineZero) {
   function zero() { // DANGER: 兼容性风险
      console.log("This is zero.");
   }
}
```
es6 中，如果`shouldDefineZero`是`false`，则永远不会定义`zero`,因为这个块从不执行。然而，这是标准的新的一部分。这是历史遗留问题，无论这个块是否执行，一些浏览器会定义`zero`。

在严格模式下，所有支持 es6 的浏览器以相同的方式处理：只有在`shouldDefineZero`为`true`的情况下定义`zero`，并且作用域只是这个块内。