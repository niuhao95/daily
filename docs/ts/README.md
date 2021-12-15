## 概念

### 声明空间

#### 类型声明空间

用来当做类型注解，例如：

```ts
class Foo {}
interface Bar {}
type Bas = {};
// 作为类型注解使用
let foo: Foo;
let bar: Bar;
let bas: Bas;

const bar = Bar; // Error: 'Bar'仅表示类型，但在此处却作为值使用。
```

#### 变量声明空间

```ts
class Foo {}
const someVar = Foo;
const someOtherVar = 123;

// 同样，一些变量也不能当做类型注解
const foo = 123;
let bar: foo; // ERROR: 'foo'表示值，但在此处用作类型。
```

## 基础

### 基础数据类型

#### in js

* `Boolean`
* `Number`
* `String`
* `null`
* `undefined`
* `Symbol`
* `BigInt` (ES10) (2^53-1)

#### in ts

1. `boolean`
2. `number`
3. `string`
4. `void` -> 表示没有任何返回值的函数
5. `null`、`undefined` -> 是所有类型的子类型
6. `any` -> 任意值类型
  + 变量声明未指定类型且‘未赋值’ -> 任意值类型
  + 变量声明未指定类型但‘有赋值’ -> `类型推论`
7. `联合类型` -> `let myAge: string | number`
  + 当不确定变量具体是哪个类型时，只能访问所有类型里共有的属性或方法
  + 赋值时会进行类型推论
  + `类型别名`:`type Id = string | number`
8. 字面量类型
  + `type EventNames = 'click' | 'scroll' | 'mousemove'`

### 接口 - Interfaces（类的抽象 | 对象的形状）

```ts
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

### 数组

1. 「类型 + 方括号」
  + `number[]` -> `let ids: number[] = [1, 2, 3, 5]`
  + `let list: any[] = ['hao', 26, { like: 'games' }]`
2. 数组泛型
  + `Array<number>` -> `let ids: Array<number> = [2, 3, 5]`
3. 接口
  + 常用来表示类数组

```ts
interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];
```

4. 类数组
  + 内置接口定义, 如: `IArguments`、`NodeList`、`HTMLCollection`

```ts
function sum() {
    let args: IArguments = arguments;
}
```

### 元祖 Tuple

* 已知索引访问或者直接初始化或赋值需要按照类型中指定的项
* 越界元素类型被限制为元祖中每个类型的联合类型

### 枚举 Enum

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

可以手动赋值, 自动递增的枚举项可能和手动赋值的重复, 自动递增的步长为1

```ts
enum Days {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 3); // true
console.log(Days["Wed"] === 3); // true
console.log(Days[3] === "Sun"); // false
console.log(Days[3] === "Wed"); // true

// 重复部分的编译结果
// Days[Days["Sun"] = 3] = "Sun";
// Days[Days["Wed"] = 3] = "Wed";
// 可以赋值为非数字,配合类型断言
// enum Days {Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>"S"};
```

### 函数

* 可选参数后面不允许再出现必需参数
* ts会将添加了默认值的参数识别为可选参数(加默认值的可选参数不受顺序影响)

1. 声明式

```ts
function sum(x: number, y: number): number {
    return x + y;
}
// 调用时参数不能多或者少
```

2. 表达式

```ts
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
}
```

3. 接口

```ts
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}
```

4. `...rest: any[]` -> es6剩余参数
7. 重载，多次定义函数类型

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

### 类型断言

* 语法
  1. `值 as 类型`, tsx中必须使用
  2. `<类型>值`
* 联合类型可以被断言为其中一个类型
* 父类可以被断言为子类
* 任何类型 <=> any
* A <=> B，只需要 A 兼容 B 或 B 兼容 A 即可
* 类型声明(子类可以赋值给父类) 比 类型断言 要严格

### 声明文件

* ts会解析项目瞎所有的`*.ts`&`.d.ts`文件
* `.d.ts`作为ts声明文件
* `*.ts`文件会获得`.d.ts`的类型定义

#### 全局变量

1. `declare var`
2. `declare let`
3. `declare const`
4. `declare function`
5. `declare class`
6. `declare enum`
7. `declare namespace` -> `declare module`
8. `interface`
9. `type`

* npm / umd
  1. 
    - `package.json`中有`types`字段
    - 有`index.d.ts`声明文件
  2. 
    - 发布到`@types`
    - `npm install @types/foo --save-dev`
  3. 
    - 创建`node_modules/@types/foo/index.d.ts`
    - 创建`types`目录，将声明文件放到`types/foo/index.d.ts`中,这种方式需要配置`tsconfig.json`中的`paths`和`baseUrl`字段

### 内置对象

### 泛型

```ts
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
```
