#### 通用选择器（Universal selector）
`*` `ns|*` `*|*`  
`*` 将匹配文档的所有元素。
#### 元素选择器（Type selector）
`input` 匹配任何 `<input>` 元素。
#### 类选择器（Class selector）
`.index` 匹配任何 `class` 属性中含有 "index" 类的元素。
#### ID 选择器（ID selector）
`#toc` 匹配 ID 为 "toc" 的元素
#### 属性选择器（Attribute selector）
`[attr]` `[attr=value]` `[attr~=value]` `[attr|=value]` `[attr^=value]` `[attr$=value]` `[attr*=value]`  
`[autoplay]` 选择所有具有 `autoplay` 属性的元素（不论这个属性的值是什么）。
#### 后代组合器（Descendant combinator）
`div span` 匹配所有位于任意 `<div>` 元素之内的 `<span>` 元素。
#### 直接子代组合器（Child combinator）
`ul > li` 匹配直接嵌套在 `<ul>` 元素内的所有 `<li>` 元素。
#### 一般兄弟组合器（General sibling combinator）
`p ~ span` 匹配同一父元素下，`<p>` 元素后的所有 `<span>` 元素。
#### 紧邻兄弟组合器（Adjacent sibling combinator）
`h2 + p` 会匹配所有紧邻在 `<h2>` 元素后的 `<p>` 元素。
#### 伪选择器（Pseudo）
##### 伪类（Pseudo-classes）`:` 能够根据状态改变元素样式
##### 伪元素（Pseudo-elements）`::` 可被用于为一个元素的 `特定部分` 应用样式  
- `::selection` CSS伪元素应用于文档中被用户高亮的部分

#### CSS Specifishity
![css Specifishity](../../assets/img/specifishity.png)  
