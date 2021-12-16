### 声明文件

* ts会解析项目瞎所有的`*.ts`&`.d.ts`文件
* `.d.ts`作为ts声明文件
* `*.ts`文件会获得`.d.ts`的类型定义

### 全局变量

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
