## Vue

### 生命周期

```vue
<!-- Parent -->
<template>
    <div id="app">
        <Child1 />
        <Child2 />
    </div>
</template>

<script>
// 生命周期输出顺序

// parent beforeCreate
// parent created
// parent beforeMount

// child-1 beforeCreate
// child-1 created
// child-1 beforeMount

// child-2 beforeCreate
// child-2 created
// child-2 beforeMount

// child-1 mounted
// child-2 mounted
// parent mounted
</script>  
```

### 计算属性 computed

计算属性默认只有 getter，不过在需要时你也可以提供一个 setter：

```js
// ...
computed: {
    fullName: {
        // getter
        get: function() {
            return this.firstName + ' ' + this.lastName
        },
        // setter
        set: function(newValue) {
            var names = newValue.split(' ')
            this.firstName = names[0]
            this.lastName = names[names.length - 1]
        }
    }
}
// ...
```

现在再运行 `vm.fullName = 'John Doe'` 时，setter 会被调用， `vm.firstName` 和 `vm.lastName` 也会相应地被更新。
