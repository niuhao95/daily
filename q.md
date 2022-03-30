1. nginx
  - 如何配置负载均衡 upstream

2. json-schema
  - joi
  - ajv
  - fastify
  - json schema editor
  - react-jsonschema-form

3. three.js


4. echarts


5. githooks husky pre-commit lint-staged
  - (.git/hooks/pre-commit.sample/core.hooksPath)[husky/lint-staged]
  - eslint vs prettier


6. watermark-dom
  - 防止水印被删除


7. gulp 主题切换 @media @support


8. vue-i18n


9. 虚拟列表


10. vue-print-nb


11. 大文件上传/断电续传 (https://juejin.cn/post/6844904046436843527)
  - Blob.prototype.slice 切片记录顺序
  - 断电续传：localStorage 记录已上传的切片 hash(spark-md5)(web-worker[importScripts/postMessage])/ 服务端保存已上传的切片 hash，前端每次上传前向服务端获取已上传的切片
  - 文件秒传 Hash校验
  - 暂停上传 XMLHttpRequest abort
  - 进度 upload.onprogress
  分片下载
  - 服务端切片 前端合并
  - 206 Partial Content
  - Range 头信息来指示客户端希望得到的内容范围，并且可能包含 If-Range 来作为请求条件。
  - koa-send


12. vue-cli vue2/3
  - 插槽的 template / render func 实践
  - Vue.use
  - vue-router
    - history / hash
      1. History API + popstate back()/forward()/go()/pushState()/replaceState()
      2. hashchange
    - 动态路由 Trie / path-to-regexp
  - vuex
    - redux
    - pinia
  - proxy reflect
    - immer.js


13. vue-property-decorator vue-class-component vuex-module-decorators
  - webapck build时不会将默认Class名作为组件名


14. ts


15. 自定义cli （commander(解析参数 注册命令) inquirer(用户交互) chalk(样式) download-git-repo child_process）
    1. 添加脚手架命令和命令入口文件
    - package.json
    ```
    bin: {
      "test": "bin/test.js"
    }
    ```
    ```js
    // test.js
    #!/usr/bin/env node // 指定使用node解析脚本
    console.log('test')
    ```
    - npm link 将本地bin里面的命令安装的全局npm配置 生成可执行文件cmd ps1等
    - 安装commander 使用 program.version(`version is ${require('../package.json').version}`).parse(process.argv)解析命令
    可添加配置（.description .usage .option .action .command）
    - process.argv yargs


16. fetch
  - 如何取消请求 axios[abort] fetch[AbortControl]


17. 大屏适配


18. 导入导出 excel读取 xlsx file-saver 操作文件


19. npm发布包 package.json字段


20. 组件库


21. krpano


22. 前端测试 karma vue@test-utils


23. 组件实现
  - 打印组件
  - 日历组件 vue-print-nb
  - vue-virtual-scroller 实现原理
  - Toast 组件
  - vue-grid-layout vuedraggable sortablejs


24. webpack rollup vite esbuild
  - tree shaking / cjs=>esm
  - AST[语法分析token/词法分析]
  - UglifyJS(es6+支持差) / terser / babel
  - runtime
  - base64
  - hrm原理
  - webpack如何打包css 1.插入到dom 2.使用html-webpack-plugin 插入到html
  - 手写mini webpack
  - webpack提升构建速度 优化体积
25. es6+
  - 抽象类
26. 预编译器实现原理 scss less stylus
  - flex grid
27. pnpm lerna
    - npm link
28. 前端安全 http
  - http1 / http2 / http3 / https / tcp / udp / smtp / ftp
  - xss
  - csrf
- express
- react
  - 高阶组件 / 受控组件
- node
  - http req.on 可读流 可写流
  - node-xlsx Blob/Buffer
  - 发邮件(html) nodeemailer css转内联
- json-web-token
- pm2 forever
  - pm2 start
- 连接数据库的工具
- Redis
- koa
  - 洋葱模型
  - koa中间件 koa-send
  - koa-body koa-bodyparser
  - koa-router原理
    - find-my-way
31. tailwindcss
32. 算法数据结构
  - 排序
  - 搜索
  - topK / 最小堆
  - 简化路径
33. 前端手写
  - debounce / throttle
  - new / call / apply / bind / promise
  - curry
  ```js
  const curry = fn =>
      judge = (...args) =>
          args.length === fn.length
              ? fn(...args)
              : (arg) => judge(...args, arg)
  ```
  - flat / flatMap
  - 手写扁平数据 <-> tree
34. 继承
35. 事件冒泡 捕获 委托
36. OSI网络分层模型

# 未包含
微前端
  -http://www.micro-zoe.com/
  - iframe 基座
  - 缺点
    1. 资源共享能力差
    2. 改造成本
  - 加载 切换应用
  - js(Proxy 快照策略) css隔离(shadow DOM)
  - 通信
BFF
loading delay实现 promise
懒加载
异步任务调度器
手写函数实现
graphql
  - 如何处理http缓存（缓存本只能服务于get请求，而Graphql发出的为post请求）
前端并发[p-limit/p-map/p-retry/async-poll/promise-queen]
cjs esm
错误监控收集
缓存
  - post请求如何缓存
  - Cache-Control[no-store/no-cache] / Pragma / Expires
本地存储
  - localStorage / sessionStorage / Cookie[SameSite] / Service Worker / indexdb / webSQL
[localForage] [workbox/workbox-webpack-plugin]
事件循环 eventLoop
  - process.nextTick
  - vue.$nextTick
nuxt next react native


# 常见题目
1. 当你在浏览器中输入 google.com 并且按下回车之后发生了什么？
2. `0.1 + 0.2 !== 0.3`
3. 移动端兼容问题 1.100vh in safari 2.ios 首字母自动大写 3.密码自动填充
4. 【字节】异步任务调度器
5. calc(100%/3)


37. js写计算器
38. js写五子棋
39. css外边距重叠

# 侧重方向

1. 应用层开发
更加偏业务侧逻辑，关注业务逻辑/业务特性/业务领域建模，因此会有开发体验，用户体验，复用性和安全性等等作为衡量指标。

2. 框架类库的开发
关注通用性和跨业务封装，因此衡量指标是：工程/工效，性能，稳定性，基础设施抽象，安全兜底。

# 额外关注
zx
cypress 超越 puppeteer 成为最受欢迎的 E2E 测试框架

Electron: 我们的老熟人，Chromium + Nodejs，深受大家喜爱
Tauri: 异军突起的新星，Webview + Rust。对比 Electron 因为不用打包 Chromium 和 Nodejs 运行时，产物体积小，运行性能好



Polyfill ?.





# 重点准备

1. Vue2 3 原理 新特性
2. 算法
  - 排序
  - 搜索
  - TopK
  - 两个节点的公共祖先
  - 获取url参数
  - 反转链表
  - cloneDeep :哪些类型需要额外判断
  - 手写一个计算器
  - 手写一个五子棋
3. 缓存策略
4. js概念
  - es5 es6的继承
  - 垃圾回收
  - Map Object WeakMap
  - 抽象类
  - Promise
5. 设计模式
  - 装饰器
6. 编译工具
  - vite原理