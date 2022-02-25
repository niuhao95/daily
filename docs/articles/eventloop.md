### 事件循环

首先，js是单线程运行的，每次只处理一件事。

#### 调用堆栈 LIFO队列

事件循环不断地检查调用堆栈查看是否有需要运行任何函数。

#### 消息队列

setTimeout、fetch、用户触发事件(单击 or 键盘 or 获取response or onload)都会在消息队列排队，事件循环赋予调用堆栈优先级，首先处理调用堆栈中的，处理完之后才会处理消息队列。

#### 作业队列

es6引入的，Promise（基于promise构建的async/await）使用作业队列，在当前函数结束之前resolve的Promise会在当前函数执行之后立即执行。

#### process.nextTick()
#### setImmediate()

在 Node.js 中还提供相当于使用 `setTimeout(() => {}, 0)`
