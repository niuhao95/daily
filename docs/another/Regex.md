### Regular Expression

- `/regexp/gm` 基本匹配
- `/./g` 任何字符`.`：匹配除回车外的任何单字符
- `/b[aeiou]r/g` 字符集`[]`
- `/b[^eo]r/g` 否定字符集`[^]`
- `/[e-o]/g` 字母范围`[-]`
- `/[3-6]/g` 数字范围
- `/be*r/g` 不出现、出现1次或多次`*`
- `/be+r/g` 出现1次或多次`+`
- `/colou?r/g` 不出现、出现1次`?`
- `/be{2}r/g` 出现2次`{2}`
- `/be{3,}r/g` 至少出现3次`{3,}`
- `/be{1,3}r/g` 出现1-3次`{1,3}`
- `/(ha)-\1,(haa)-\2/g` 引用组`()`：`\1`代表第一组
- `/(?:ha)-ha,(haa)-\1/g` 非捕获分组`?:`该分组不被引用捕获
- `/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/` 命名捕获组`?<name>`
    ```js
    const reDate = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/,
      match = reDate.exec("2018-08-06");
    console.log(match);
    //>> [2018-08-06, 08, 06, 2018, groups: {day: 06, month: 08, year: 2018}]

    //此时用groups对象来获取年月日，无论正则表达式怎么变换，这下面三行不用改了，省事！
    let year = match.groups.year; //>> 2018
    let month = match.groups.month; //>> 08
    let day = match.groups.day; //>> 06
    ```
- `/(C|c)at|rat/g` 分支`|`
- `/(\*|\.)/g` 转义字符`\`
- `/^[0-9]/gm` 匹配字符串的开始`^`
- `/html$/gm` 匹配字符串的结束`$`
- `/\w/g` 字母数字下划线
- `/\W/g` 非字母数字下划线
- `/\d/g` 数字
- `/\D/g` 非数字
- `/\s/g` 空白字符
- `/\S/g` 非空白字符
- `/n\b/g` 匹配单词的开头或末尾
- `/n\B/g` 匹配不在单词开头或末尾的位置
- `/\d+(?=PM)/g` 正向先行断言`(?=)`：只匹配后面有 `PM` 的数值
- `/\d+(?!PM)/g` 负向先行断言`(?!)`：匹配后面没有 `PM` 的数值
- `/(?<=\$)\d+/g` 正向后行断言`(?<=)`：只匹配前面带有 `$` 的数字
- `/(?<!\$)\d+/g` 负向后行断言`(?<!)`：匹配前面没有 `$` 的数字
- Flags/标志/修饰符
  1. `g` global
  2. `m` multiline
  3. `i` case insensitive
  4. `s` dotAll模式，`.`匹配除回车外的任何单字符，Flag`s`改变这种行为，允许匹配回车换行
        ```js
        /hello.world/.test('hello\nworld');  // false
        /hello.world/s.test('hello\nworld'); // true
        console.log(/hello.world/s.test(`hello
        world`))   //>> true
        ```
  5. `u` ES9 之前，在正则表达式中本地访问 Unicode 字符属性是不被允许的。ES9 添加了 Unicode 属性转义，形式为\p{...}和\P{...}，在正则表达式中使用标记 u (unicode) 设置，在\p的{...}内，可用键值对的方式设置需要匹配的属性而非具体内容。
      ```js
      const regex = /\p{Script=Greek}/u;//Greek为希腊语的意思
      console.log(regex.test('a')); //>> flase
      console.log(regex.test('Σ')); //>> true
      ```
- 默认执行
  1. `/.*r/` 贪婪匹配：'`ber beer beeer beeeer`'
  2. `/.*?r/` 懒惰匹配: '`ber` beer beeer beeeer'