## Promise

### Promise.all - ES6

- `all resolve`
- `当且仅当`传入的可迭代对象为空时为同步。

```js
// 1
Promise.all([p1, p2, p3, p4, p5]).then(values => {
  // all resolve
  console.log(values);
}, reason => {
  // if one reject
  console.log(reason)
});

// 2
Promise.all([p1, p2, p3, p4, p5]).then(values => {
  console.log(values);
}).catch(reason => {
  console.log(reason)
});
```

### Promise.race - ES6

- `if one resolve or reject`

### Promise.finally - ES9

### Promise.allSettled - ES11

- `all resolve or reject`

### Promise.any - ES12

- `if one resolve`
