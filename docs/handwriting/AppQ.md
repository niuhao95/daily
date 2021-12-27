### 下划线/驼峰 规则转换

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