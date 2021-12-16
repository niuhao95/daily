### 类型注解

ts会在变量可以基于初始值进行推断的时候自动推断类型

```ts
// 不需要类型注释 'myName' 会被推断为类型 'string'
let myName = "Alice"
```

### 原始类型

* `string`
* `number`
* `boolean`

#### JavaScript 不常见的原始类型

* `bigInt`
* `symbol`

### 数组

1. `string[]` === `Array<string>` (泛型 `T<U>`)
2. `number[]`

### any

可以设置[noImplicitAny](https://www.typescriptlang.org/tsconfig#noImplicitAny), 出现被隐式推断为 `any` 的情况时会报错

### 函数

1. 参数类型注解 (也会检查传入参数的数量)
2. 返回值类型注解
3. 匿名函数会根据调用情况推断参数类型 (上下文推断)

### 对象

可选属性

```ts
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
```

### 联合类型

如果有一个联合类型 `string | number` , 你不能使用只存在 `string` 上的方法

```ts
function printId(id: number | string) {
  console.log(id.toUpperCase());
    // Property 'toUpperCase' does not exist on type 'string | number'.
    // Property 'toUpperCase' does not exist on type 'number'.
}
```

解决方案是用代码收窄联合类型 (类型收窄)

### 类型别名（Type Aliases）& 接口

```ts
// 类型别名
type ID = number | string;

// 接口
interface Animal {
  name: string
}
```

#### 区别

* 类型别名也许不会实现声明合并，但是接口可以
* 接口可能只会被用于声明对象的形状，不能重命名原始类型
::: details 类型别名本身无法添加新的属性，而接口是可以扩展的。

```ts
// Interface
// 通过继承扩展类型
interface Animal {
  name: string
}
interface Bear extends Animal {
  honey: boolean
}

// Type
// 只能通过交集扩展类型
type Animal = {
  name: string
}
type Bear = Animal & { 
  honey: boolean 
}
```

:::

::: details 类型创建后不能被改变，但可以对一个接口添加新的字段

```ts
// Interface
interface Window {
  title: string
}
interface Window {
  ts: TypeScriptAPI
}

        
// Type
type Window = {
  title: string
}
type Window = {
  ts: TypeScriptAPI
}
// Error: Duplicate identifier 'Window'.
```

:::

### 类型断言

可以使用类型断言将其指定为一个更具体或者更不具体的类型

```ts
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement
// 尖括号预发 不能再 .tsx 中使用
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas")

// 双重断言 避免使用
const a = (expr as any) as T
```

#### 非空断言操作符 后缀 `!`

表示它的值不可能是 `null` 或者 `undefined`

### 字面量类型

#### 字面量推断

`req.method` 被推断为 `string` ，而不是 `"GET"`

```ts
declare function handleRequest(url: string, method: "GET" | "POST"): void;

const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);

// Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
```

解决方法：
1. 类型断言

```ts
// Change 1:
const req = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
handleRequest(req.url, req.method as "GET");
```

2. `as const`
`as const` 效果跟 `const` 类似，但是对类型系统而言，它可以确保所有的属性都被赋予一个字面量类型，而不是一个更通用的类型比如 `string` 或者 `number`

```ts
const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);
```

### null & undefined

#### strictNullChecks

当 `strictNullChecks` 打开，如果一个值可能是 null 或者 undefined，你需要在用它的方法或者属性之前，先检查这些值
