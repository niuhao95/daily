(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{399:function(t,s,e){"use strict";e.r(s);var a=e(54),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"regular-expression"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#regular-expression"}},[t._v("#")]),t._v(" Regular Expression")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("/regexp/gm")]),t._v(" 基本匹配")]),t._v(" "),e("li",[e("code",[t._v("/./g")]),t._v(" 任何字符"),e("code",[t._v(".")]),t._v("：匹配除回车外的任何单字符")]),t._v(" "),e("li",[e("code",[t._v("/b[aeiou]r/g")]),t._v(" 字符集"),e("code",[t._v("[]")])]),t._v(" "),e("li",[e("code",[t._v("/b[^eo]r/g")]),t._v(" 否定字符集"),e("code",[t._v("[^]")])]),t._v(" "),e("li",[e("code",[t._v("/[e-o]/g")]),t._v(" 字母范围"),e("code",[t._v("[-]")])]),t._v(" "),e("li",[e("code",[t._v("/[3-6]/g")]),t._v(" 数字范围")]),t._v(" "),e("li",[e("code",[t._v("/be*r/g")]),t._v(" 不出现、出现1次或多次"),e("code",[t._v("*")])]),t._v(" "),e("li",[e("code",[t._v("/be+r/g")]),t._v(" 出现1次或多次"),e("code",[t._v("+")])]),t._v(" "),e("li",[e("code",[t._v("/colou?r/g")]),t._v(" 不出现、出现1次"),e("code",[t._v("?")])]),t._v(" "),e("li",[e("code",[t._v("/be{2}r/g")]),t._v(" 出现2次"),e("code",[t._v("{2}")])]),t._v(" "),e("li",[e("code",[t._v("/be{3,}r/g")]),t._v(" 至少出现3次"),e("code",[t._v("{3,}")])]),t._v(" "),e("li",[e("code",[t._v("/be{1,3}r/g")]),t._v(" 出现1-3次"),e("code",[t._v("{1,3}")])]),t._v(" "),e("li",[e("code",[t._v("/(ha)-\\1,(haa)-\\2/g")]),t._v(" 引用组"),e("code",[t._v("()")]),t._v("："),e("code",[t._v("\\1")]),t._v("代表第一组")]),t._v(" "),e("li",[e("code",[t._v("/(?:ha)-ha,(haa)-\\1/g")]),t._v(" 非捕获分组"),e("code",[t._v("?:")]),t._v("该分组不被引用捕获")]),t._v(" "),e("li",[e("code",[t._v("/(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/")]),t._v(" 命名捕获组"),e("code",[t._v("?<name>")]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" reDate "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  match "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reDate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-08-06"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("match"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//>> [2018-08-06, 08, 06, 2018, groups: {day: 06, month: 08, year: 2018}]")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//此时用groups对象来获取年月日，无论正则表达式怎么变换，这下面三行不用改了，省事！")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" year "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" match"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("groups"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("year"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//>> 2018")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" month "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" match"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("groups"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("month"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//>> 08")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" day "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" match"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("groups"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("day"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//>> 06")]),t._v("\n")])])])]),t._v(" "),e("li",[e("code",[t._v("/(C|c)at|rat/g")]),t._v(" 分支"),e("code",[t._v("|")])]),t._v(" "),e("li",[e("code",[t._v("/(\\*|\\.)/g")]),t._v(" 转义字符"),e("code",[t._v("\\")])]),t._v(" "),e("li",[e("code",[t._v("/^[0-9]/gm")]),t._v(" 匹配字符串的开始"),e("code",[t._v("^")])]),t._v(" "),e("li",[e("code",[t._v("/html$/gm")]),t._v(" 匹配字符串的结束"),e("code",[t._v("$")])]),t._v(" "),e("li",[e("code",[t._v("/\\w/g")]),t._v(" 字母数字下划线")]),t._v(" "),e("li",[e("code",[t._v("/\\W/g")]),t._v(" 非字母数字下划线")]),t._v(" "),e("li",[e("code",[t._v("/\\d/g")]),t._v(" 数字")]),t._v(" "),e("li",[e("code",[t._v("/\\D/g")]),t._v(" 非数字")]),t._v(" "),e("li",[e("code",[t._v("/\\s/g")]),t._v(" 空白字符")]),t._v(" "),e("li",[e("code",[t._v("/\\S/g")]),t._v(" 非空白字符")]),t._v(" "),e("li",[e("code",[t._v("/n\\b/g")]),t._v(" 匹配单词的开头或末尾")]),t._v(" "),e("li",[e("code",[t._v("/n\\B/g")]),t._v(" 匹配不在单词开头或末尾的位置")]),t._v(" "),e("li",[e("code",[t._v("/\\d+(?=PM)/g")]),t._v(" 正向先行断言"),e("code",[t._v("(?=)")]),t._v("：只匹配后面有 "),e("code",[t._v("PM")]),t._v(" 的数值")]),t._v(" "),e("li",[e("code",[t._v("/\\d+(?!PM)/g")]),t._v(" 负向先行断言"),e("code",[t._v("(?!)")]),t._v("：匹配后面没有 "),e("code",[t._v("PM")]),t._v(" 的数值")]),t._v(" "),e("li",[e("code",[t._v("/(?<=\\$)\\d+/g")]),t._v(" 正向后行断言"),e("code",[t._v("(?<=)")]),t._v("：只匹配前面带有 "),e("code",[t._v("$")]),t._v(" 的数字")]),t._v(" "),e("li",[e("code",[t._v("/(?<!\\$)\\d+/g")]),t._v(" 负向后行断言"),e("code",[t._v("(?<!)")]),t._v("：匹配前面没有 "),e("code",[t._v("$")]),t._v(" 的数字")]),t._v(" "),e("li",[t._v("Flags/标志/修饰符\n"),e("ol",[e("li",[e("code",[t._v("g")]),t._v(" global")]),t._v(" "),e("li",[e("code",[t._v("m")]),t._v(" multiline")]),t._v(" "),e("li",[e("code",[t._v("i")]),t._v(" case insensitive")]),t._v(" "),e("li",[e("code",[t._v("s")]),t._v(" dotAll模式，"),e("code",[t._v(".")]),t._v("匹配除回车外的任何单字符，Flag"),e("code",[t._v("s")]),t._v("改变这种行为，允许匹配回车换行"),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("hello.world")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello\\nworld'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("hello"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("world"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello\\nworld'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("hello.world")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("s")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("hello\nworld")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//>> true")]),t._v("\n")])])])]),t._v(" "),e("li",[e("code",[t._v("u")]),t._v(" ES9 之前，在正则表达式中本地访问 Unicode 字符属性是不被允许的。ES9 添加了 Unicode 属性转义，形式为\\p{...}和\\P{...}，在正则表达式中使用标记 u (unicode) 设置，在\\p的{...}内，可用键值对的方式设置需要匹配的属性而非具体内容。"),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" regex "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\p{Script=Greek}")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("u")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Greek为希腊语的意思")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("regex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//>> flase")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("regex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Σ'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//>> true")]),t._v("\n")])])])])])]),t._v(" "),e("li",[t._v("默认执行\n"),e("ol",[e("li",[e("code",[t._v("/.*r/")]),t._v(" 贪婪匹配：'"),e("code",[t._v("ber beer beeer beeeer")]),t._v("'")]),t._v(" "),e("li",[e("code",[t._v("/.*?r/")]),t._v(" 懒惰匹配: '"),e("code",[t._v("ber")]),t._v(" beer beeer beeeer'")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);