### 浏览器加载

浏览器脚本语言默认是 `javascript`  `<sctipt>` 上 `type="application/javascript"` 可以省略, 默认同步加载js脚本, 渲染引擎遇到 `<sctipt>` 就会停下来先执行脚本再继续向下渲染, 外部脚本需要加上下载脚本的时间. 脚本下载或执行时间过长就会造成浏览器阻塞, 所有浏览器允许脚本异步加载。

```html
<script src="<path>" defer></script>
<script src="<path>" async></script>
```

加上 `defer` 或 `async` 属性, 脚本就会异步加载, 渲染引擎遇到这一行就会开始下载脚本, 但不会等待而是直接执行后续命令。
* `defer` 要等整个页面dom结构完全生成, 其他脚本执行完成才会执行. 多个`defer`脚本顺序加载。
* `async` 下载完成就中断渲染执行脚本完成之后再继续渲染. 多个`async`脚本不能保证加载顺序。

#### type="module"

加上 `type="module"` 浏览器就认为这是一个es6模块, 等同于加了 `defer` 属性, 可以加上 `async` 属性行为就会和 `async` 脚本一致。
* 代码运行在模块作用域，内部的顶层变量外部不可见。
* 自动采用严格模式。
* 顶层的this关键字返回undefined，而不是指向window。
* 同一个模块如果加载多次，将只执行一次。
* 可以使用import命令加载其他模块（.js后缀不可省略，需要提供绝对 URL 或相对 URL）。
  + webpack的resolve.extensions可以配置尝试解析哪些后缀名。（vue-cli脚手架不用写后缀的原因）
  + vite

### ESM vs CJS

* `CommonJS` 模块输出的是一个值的拷贝，`ES6 Module` 输出的是值的引用。
  + `ES6 Module` import命令在js引擎静态分析到的时候会生成一个“只读引用”，到脚本执行时去模块中取值。
* `CommonJS` 模块是运行时加载， `ES6 Module` 是编译时输出接口。
* `CommonJS` require()是同步加载模块， `ES6 Module` import命令是异步加载，有一个独立的模块依赖的解析阶段。

#### CommonJs 模块加载原理

`require` 引用一个 `cjs` 的模块时会执行整个脚本生成一个对象。

```
{
  id: '...', // 模块名
  exports: { ... }, // 模块输出的各个接口
  loaded: true, // 脚本是否执行完毕
  ...
}
```

取值就是从上述对象的 `exports` 取值，多次 `require` 脚本只会执行一次也只会返回第一次运行的结果。

#### CommonJS 模块的循环加载

加载时执行，脚本代码在 `require` 的时候，就会全部执行。一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。

#### ES6 模块的循环加载

动态引用， `import` 从一个模块加载变量（如 `import foo from 'foo'` ），这些变量不会被缓存，而是成为一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。发生"循环加载"时会认为对应模块已经引入完成不会再执行对应脚本。造成的变量未定义的问题可以使用 `function` 或者 `var` 的变成提升特性解决。  

更多[循环加载](https://wangdoc.com/es6/module-loader.html#%E5%BE%AA%E7%8E%AF%E5%8A%A0%E8%BD%BD)
