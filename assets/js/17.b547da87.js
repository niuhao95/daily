(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{420:function(t,e,s){"use strict";s.r(e);var a=s(56),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"事件循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[t._v("#")]),t._v(" 事件循环")]),t._v(" "),s("p",[t._v("首先，js是单线程运行的，每次只处理一件事。")]),t._v(" "),s("h4",{attrs:{id:"调用堆栈-lifo队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调用堆栈-lifo队列"}},[t._v("#")]),t._v(" 调用堆栈 LIFO队列")]),t._v(" "),s("p",[t._v("事件循环不断地检查调用堆栈查看是否有需要运行任何函数。")]),t._v(" "),s("h4",{attrs:{id:"消息队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消息队列"}},[t._v("#")]),t._v(" 消息队列")]),t._v(" "),s("p",[t._v("setTimeout、fetch、用户触发事件(单击 or 键盘 or 获取response or onload)都会在消息队列排队，事件循环赋予调用堆栈优先级，首先处理调用堆栈中的，处理完之后才会处理消息队列。")]),t._v(" "),s("h4",{attrs:{id:"作业队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作业队列"}},[t._v("#")]),t._v(" 作业队列")]),t._v(" "),s("p",[t._v("es6引入的，Promise（基于promise构建的async/await）使用作业队列，在当前函数结束之前resolve的Promise会在当前函数执行之后立即执行。")]),t._v(" "),s("h4",{attrs:{id:"process-nexttick"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#process-nexttick"}},[t._v("#")]),t._v(" process.nextTick()")]),t._v(" "),s("h4",{attrs:{id:"setimmediate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setimmediate"}},[t._v("#")]),t._v(" setImmediate()")]),t._v(" "),s("p",[t._v("在 Node.js 中还提供相当于使用 "),s("code",[t._v("setTimeout(() => {}, 0)")])])])}),[],!1,null,null,null);e.default=r.exports}}]);