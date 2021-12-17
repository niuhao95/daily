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

#### in ts

* `void` -> 表示没有任何返回值的函数

#### in js

* `bigInt` (ES10) (2^53-1)
* `symbol`

### 数组

1. `string[]` === `Array<string>` (泛型 `T<U>`)
2. `number[]`

```ts
// 类数组内置接口定义, 如: `IArguments`、`NodeList`、`HTMLCollection`
function sum() {
    let args: IArguments = arguments;
}

// 接口, 常用来表示类数组
interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];
```

### any

可以设置[noImplicitAny](https://www.typescriptlang.org/tsconfig#noImplicitAny), 出现被隐式推断为 `any` 的情况时会报错

### 函数

1. 参数类型注解 (也会检查传入参数的数量)
2. 返回值类型注解
3. 匿名函数会根据调用情况推断参数类型 (上下文推断)
4. 可选参数后面不允许再出现必需参数
5. ts会将添加了默认值的参数识别为可选参数(加默认值的可选参数不受顺序影响)
6. `...rest: any[]` -> 获取剩余参数
7. 重载，函数可以多次定义最后实现

```ts
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```

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
interface Person {
  // 只读属性（约束第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候）
  readonly id: number;
  name: string;
  age?: number; // 可选属性（可以没有）
  [propName: string]: any; // 任意属性
  // [propName: number]: any; // 对确定和可选属性没有限制
}
// 一旦有任意属性(且属性名是string,number不限制)，确定属性和可选属性的类型都必须是它的类型的子集
let tom: Person = {
  id: 9527,
  name: 'Tom',
  gender: 'male'
};
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

### 枚举 (Enums)

这并不是一个类型层面的增量，而是会添加到语言和运行时

```ts
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true
```

编译为:

```js
var Days;
(function(Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
```

可以手动为枚举项赋值(小数或负数), 自动递增的枚举项可能和手动赋值的重复, 自动递增的步长为1

```ts
enum Days {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 3); // true
console.log(Days["Wed"] === 3); // true
console.log(Days[3] === "Sun"); // false
console.log(Days[3] === "Wed"); // true

// 重复部分的编译结果 js
Days[Days["Sun"] = 3] = "Sun";
Days[Days["Wed"] = 3] = "Wed";
// 也可以赋值为非数字,配合类型断言
enum Days {Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>"S"};
```

### 元祖 (Tuple)

 `type tupleType = [number, string, boolean]`

* 已知索引访问或者直接初始化或赋值需要按照类型中指定的项
* 越界元素类型被限制为元祖中每个类型的联合类型
