#### 参考链接

[grid layout 和其它布局方法的联系](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)  
[网格布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout)  
[Flex 布局教程：语法篇](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)  
[CSS Grid 网格布局教程](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

## flex

### Flex Container

* flex-flow
  + flex-direction 受flex容器方向性`(dir:ltr/rtl)`的影响
    - row(初始值) 主轴定义为与文本方向相同
    - row-reverse 主轴定义为与文本方向相反
    - column 主轴和块轴相同
    - column-reverse 主轴和块轴相反
  + flex-wrap
    - nowrap(初始值)
    - wrap
    - wrap-reverse
* flex
  + 缩写
    - initial === "flex: 0 1 auto"
    - `<number>` === "flex: `<number>` 1 0"
    - `<width`> === "flex-basic: '`<number>`'"
    - auto === "flex: 1 1 auto"
    - none === "flex: 0 0 auto"
    - `<number1> <number2>` === "flex: "`<flex-grow> <flex-shrink>`"
    - `<number1> <width>` === "flex: "`<flex-grow> <flex-basic>`"
  + flex-grow 负值无效。省略时默认值为 1。 (初始值为 0)
  + flex-shrink 负值无效。省略时默认值为1。 (初始值为 1)
  + flex-basis 省略时默认值为 0。(初始值为 auto)
* align-items
  + flex-start
  + flex-end
  + center
  + stretch
* justify-content
  + space-between
  + space-around
  + space-evenly
  + stretch

### Flex Item

* order
* align-self：覆盖已有的 `align-items` 的值
* flex-grow
* flex-shrink
* flex-basis

## grid

### grid Container

* grid-template-columns 列宽
  - 1fr / 200px / 10% / repeat(3, 1fr 200px)
  - grid-template-columns: `[c1] 100px [c2] 100px [c3] auto [c4]`; 指定线的名字，[fifth-line row-5]像这样可以为多个名字。
* grid-template-rows 行高

* grid-template-areas:'header header header'
                      'sidebar main main'
                      'sidebar footer footer';
  - `.`可以表示不需要利用
  - 区域的命名会影响到网格线，区域名为header，则起始位置的水平网格线和垂直网格线叫做header-start，终止位置的水平网格线和垂直网格线叫做header-end。

* column-gap(grid-column-gap) 列间距
* row-gap(grid-row-gap) 行间距
* gap(grid-gap): `<row-gap> <column-gap>`;

* grid-auto-flow: row; 默认值
  - grid-auto-flow: row dense; 先行后列，但是要求尽量排满，不会严格按照顺序。

* justify-items: start | end | center | stretch;
* align-items: start | end | center | stretch;
* place-items: `<align-items> <justify-items>`;

* justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
* align-content: start | end | center | stretch | space-around | space-between | space-evenly; 
* place-content: `<align-content> <justify-content>`;

* grid-auto-rows: 同 grid-template-rows 值一样
* grid-auto-columns: 同 grid-template-columns 值一样
  - 浏览器自动创建的多余网格的列宽和行高。如果不指定这两个属性，浏览器完全根据单元格内容的大小，决定新增网格的列宽和行高。

* grid-template: `<grid-template-columns> <grid-template-rows> <grid-template-areas>`
* grid: `<grid-template-columns> <grid-template-rows> <grid-template-areas> <grid-auto-rows> <grid-auto-columns> <grid-auto-flow>`
  - 语义化不好 不建议使用

### grid Item

* grid-column: `<start-line> / <end-line>;`
* grid-column-start: 1 | header | sapn 2; 数字 | 网格线名称 | 跨越网格数量
* grid-column-end
* grid-row: `<start-line> / <end-line>;`
* grid-row-start
* grid-row-end

* grid-area: main; 指定放在哪个区域

* justify-self: start | end | center | stretch;
* align-self: start | end | center | stretch;
* place-self: `<align-self> <justify-self>`;

### 函数

* repeat()
  - repeat(auto-fill, 100px)：表示每列宽度100px，然后自动填充，直到容器不能放置更多的列。(一般用在`grid-auto-flow`方向上)
* minmax()
  - minmax(100px, 1fr)：表示列宽不小于100px，不大于1fr。
* fit-content()