# 值的比较

1. 结果为 `Boolean`
2. 字符串按照 `Unicode` 编码顺序从首位开始比较
3. 不同类型转化为 `Number` 后进行比较（不包括严格相等检查）
4. `null` 和 `undefined`
  - `==`比较时 仅互相相等
  - 其它方法比较时 `null` 被转化为 `0`, `undefined` 被转化为 `NaN`
5. `NaN` 与任何值进行比较都会返回 `false`

# 运算符优先级
