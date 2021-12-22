将渲染逻辑与实际Dom分离，在非浏览器环境中可以直接重用，例如 `SSR` 、渲染到 `canvas/WebGL` 或者原生的移动端。  
需要开发者构建自定义渲染器。 

### Render Function

h: `hyperScript` 生成 HTML 结构的脚本

#### Vue 2 API

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
```vue
<template>
  <Stack>
    <div>hello</div>
    <div>hello</div>
    <Stack>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
    </Stack>
  </Stack>
</template>
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


#### Vue 3 API

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