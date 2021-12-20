## Virtual Dom

将渲染逻辑与实际Dom分离，在非浏览器环境中可以直接重用，例如 `SSR` 、渲染到 `canvas/WebGL` 或者原生的移动端。（需要开发者构建自定义渲染器）  

### Render Function

h: `hyperScript` 生成 HTML 结构的脚本

::: details Vue 2 API

```js
render(h) {
    const slot = (this.$slots.default ?? []).filter(i => i.tag)

    return h('div', {
        attrs: {
            class: 'stack'
        }
    }, slot.map(child => {
        return h('div', {
            attrs: {
                class: 'mt-4'
            }
        }, [child])
    }))
}
```

<Stack>
<div>hello</div>
<div>hello</div>
<Stack>
    <div>hello</div>
    <div>hello</div>
    <div>hello</div>
</Stack>
</Stack>

:::

::: details Vue 3 API

```js
// Globally imported `h` helper
import { h } from 'vue'

// Flat props structure
render() {
    return h('div', {
        id: 'foo',
        onClick: this.onClick
    }, 'hello')
}
```

:::

## Core

### Reactivity Module

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

```js
function h(tag, props, children) {}
function mount(vnode, container){}

const vdom = h('div', { class:'red' }, [
    h('span', null, ['hello'])
])

mount(vdom, document.getElementById("app"))
```

#### Render Phase

 `render function => virtual Dom node`

#### Mount Phase

 `virtual Dom node =(dom API)> Webpage`

#### Patch Phase

 `Old VNode & New VNode =(compare - update)> Webpage`
