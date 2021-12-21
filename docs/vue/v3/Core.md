## Core

### Reactivity Module

关键字:
[WeakMap](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
[垃圾回收](https://zh.javascript.info/garbage-collection)
[Reflect](https://wangdoc.com/es6/reflect.html)

#### In Vue 2  
ES5 Object.defineProperty()  
#### In Vue 3  
ES6 Reflect & Proxy  

```js
// targetMap: 存储副作用
// WeakMap 弱引用的Key可以更好的出发垃圾回收
const targetMap = new WeakMap();

// track 追踪
function track(target, key) {
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()));
  }
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, (dep = new Set()));
  }
  dep.add(effect);
}

// trigger 触发
function trigger(target, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let dep = depsMap.get(key);
  if (dep) {
    dep.forEach((effect) => effect());
  }
}

// reactive: use Proxy & Reflect
function reactive(target) {
  const handler = {
    get(target, key, receiver) {
      let result = Reflect.get(target, key, receiver);
      track(target, key);
      return result;
    },
    set(target, key, value, receiver) {
      let oldValue = target[key];
      let result = Reflect.set(target, key, value, receiver);
      if (oldValue !== value) {
        trigger(target, key);
      }
      return result;
    },
  };
  return new Proxy(target, handler);
}

let product = reactive({
  price: 5,
  quantity: 2,
});
let total = 0;

// effect 副作用
let effect = () => {
  total = product.price * product.quantity;
  console.log(`total = ${total}`);
};
effect();
```

### Compiler Module

#### createVnode

在进行模板编译时，会在`createVnode`的函数参数进行`patch hints`补丁提示，告知在执行`patch`或者`diff`时是否需要更新或对比某些`attrs`or`elements`，如下表示只有`onClick`可能会变化。注释中的补丁内容表示只需要检查该部分的内容变化即可。
```js
// 这是 vue3 的 compiler 生成的 render function 的一部分
createVNode('div',{
    id: 'foo',
    onClick: _ctx.onClick
}, 'hello', 8 /* PROPS */, ['onClick'])
```

#### createBlock

在有可能会有更改的渲染函数节点会被`createBlock`包裹，每个`createBlock`都会有一个额外的数组存储`动态节点`以便跟踪变化。

### Renderer Module

#### Render Phase

 `render function => virtual Dom node`

```js
function h(tag, props, children) {}
function mount(vnode, container){}

const vdom = h('div', { class:'red' }, [
    h('span', null, ['hello'])
])

mount(vdom, document.getElementById("app"))
```

#### Mount Phase

 `virtual Dom node =(dom API)> Webpage`

 ```js
 function h(tag, props, children){
     return {
         tag,
         props,
         children
     }
 }

 function mount(vnode, container){
    const el = vnode.el = document.createElement(vnode.tag)
    // props
    if (vnode.props) {
        for (const key in vnode.props){
            const value = vnode.props[key]
            el.setAttribute(key, value)
        }
    }
    // children
    if(vnode.children){
        if(typeof vnode.children === 'string'){
            el.textContent = vnode.children
        }else{
            vnode.children.forEach(child => {
                mount(child, el)
            })
        }
    }
    container.appendCHild(el)
 }
 ```

#### Patch Phase

 `Old VNode & New VNode =(compare - update)> Webpage`  
 
 通过`compiler`生成的`render function`返回的`vdom`来说，其中包含的有很多部分例如`createBlock`方法还有`vdom`中的`hints`还有`v-for :key`都是为了在`patch`的时候减少工作量

 ```js
 function patch(n1, n2) {
    if (n1.tag === n2.tag) {
        const el = n2.el = n1.el
        // props
        const oldProps = n1.props || {}
        const newProps = n2.props || {}
        for(const key in newProps){
            const oldValue = oldProps[key]
            const newValue = newProps[key]
            if(newValue !== oldValue){
                el.setAttribute(key, newValue)
            }
        } 
        for(const key in oldProps){
            if(!(key in newProps)){
                el.removeAttribute(key)
            }
        }
        // children
        const oldChildren = n1.children
        const newChildren = n2.children
        if(typeof newChildren === 'string'){
            if(typeof oldChildren === 'string'){
                if(newChildren !== oldChildren){
                    el.textContent = newChildren
                }
            }else{
                el.textContent = newChildren
            }
        }else{
            if(typeof oldChildren === 'string'){
                el.innerHtml = ''
                newChildren.forEach(child => {
                    mount(child, el)
                })
            }else{
                // not have key
                const commonLength = Math.min(oldChildren.length, newChildren.length)
                for(let i =0; i<commonLength; i++){
                    patch(oldChildren(i), newChildren(i))
                })
                if(newChildren.length > oldChildren.length){
                    newChildren.slice(oldChildren.length).forEach(child => {
                        mount(child, el)
                    })
                }else if(newChildren.length < oldChildren.length){
                    oldChildren.slice(newChildren.length).forEach(child => {
                        el.removeChild(child.el)
                    })
                }
                // keyMode: v-for :key
                // e.g. <div v-for="item in list" :key="item.id" />
            }
        }
    } else {
        // replace
    }
 }

 const vdom = h('div', { class: 'green' }, [
     h('span', null, 'hello')
 ])

 const vdom2 = h('div', { class: 'red' }, [
     h('span', null, 'changed!')
 ])

 patch(vdom, vdom2)
 ```
