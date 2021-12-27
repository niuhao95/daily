### 下划线/驼峰 规则转换

[String.prototype.replace()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

```js
function toCamelCase(s){
  return s.replace(/_(\w)/g, (all, letter) => {
    return letter.toUpperCase()
  })
}
toCamelCase('a_good_man') // aGoodMan

function toUnderscore(s){
  return s.replace(/([A-Z])/g, "_$1").toLowerCase()
}
toUnderscore('aGoodMan') // a_good_man
```