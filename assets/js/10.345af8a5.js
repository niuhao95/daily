(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{399:function(v,_,e){"use strict";e.r(_);var o=e(54),c=Object(o.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h3",{attrs:{id:"regular-expression"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#regular-expression"}},[v._v("#")]),v._v(" Regular Expression")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("/regexp/gm")]),v._v(" 基本匹配")]),v._v(" "),e("li",[e("code",[v._v("/./g")]),v._v(" 任何字符"),e("code",[v._v(".")])]),v._v(" "),e("li",[e("code",[v._v("/b[aeiou]r/g")]),v._v(" 字符集"),e("code",[v._v("[]")])]),v._v(" "),e("li",[e("code",[v._v("/b[^eo]r/g")]),v._v(" 否定字符集"),e("code",[v._v("[^]")])]),v._v(" "),e("li",[e("code",[v._v("/[e-o]/g")]),v._v(" 字母范围"),e("code",[v._v("[-]")])]),v._v(" "),e("li",[e("code",[v._v("/[3-6]/g")]),v._v(" 数字范围")]),v._v(" "),e("li",[e("code",[v._v("/be*r/g")]),v._v(" 不出现、出现1次或多次"),e("code",[v._v("*")])]),v._v(" "),e("li",[e("code",[v._v("/be+r/g")]),v._v(" 出现1次或多次"),e("code",[v._v("+")])]),v._v(" "),e("li",[e("code",[v._v("/colou?r/g")]),v._v(" 不出现、出现1次"),e("code",[v._v("?")])]),v._v(" "),e("li",[e("code",[v._v("/be{2}r/g")]),v._v(" 出现2次"),e("code",[v._v("{2}")])]),v._v(" "),e("li",[e("code",[v._v("/be{3,}r/g")]),v._v(" 至少出现3次"),e("code",[v._v("{3,}")])]),v._v(" "),e("li",[e("code",[v._v("/be{1,3}r/g")]),v._v(" 出现1-3次"),e("code",[v._v("{1,3}")])]),v._v(" "),e("li",[e("code",[v._v("/(ha)-\\1,(haa)-\\2/g")]),v._v(" 引用组"),e("code",[v._v("()")]),v._v("："),e("code",[v._v("\\1")]),v._v("代表第一组")]),v._v(" "),e("li",[e("code",[v._v("/(?:ha)-ha,(haa)-\\1/g")]),v._v(" 非捕获分组"),e("code",[v._v("?:")]),v._v("该分组不被引用捕获")]),v._v(" "),e("li",[e("code",[v._v("/(C|c)at|rat/g")]),v._v(" 分支"),e("code",[v._v("|")])]),v._v(" "),e("li",[e("code",[v._v("/(\\*|\\.)/g")]),v._v(" 转义字符"),e("code",[v._v("\\")])]),v._v(" "),e("li",[e("code",[v._v("/^[0-9]/gm")]),v._v(" 匹配字符串的开始"),e("code",[v._v("^")])]),v._v(" "),e("li",[e("code",[v._v("/html$/gm")]),v._v(" 匹配字符串的结束"),e("code",[v._v("$")])]),v._v(" "),e("li",[e("code",[v._v("/\\w/g")]),v._v(" 字母数字下划线")]),v._v(" "),e("li",[e("code",[v._v("/\\W/g")]),v._v(" 非字母数字下划线")]),v._v(" "),e("li",[e("code",[v._v("/\\d/g")]),v._v(" 数字")]),v._v(" "),e("li",[e("code",[v._v("/\\D/g")]),v._v(" 非数字")]),v._v(" "),e("li",[e("code",[v._v("/\\s/g")]),v._v(" 空白字符")]),v._v(" "),e("li",[e("code",[v._v("/\\S/g")]),v._v(" 非空白字符")]),v._v(" "),e("li",[e("code",[v._v("/n\\b/g")]),v._v(" 匹配单词的开头或末尾")]),v._v(" "),e("li",[e("code",[v._v("/n\\B/g")]),v._v(" 匹配不在单词开头或末尾的位置")]),v._v(" "),e("li",[e("code",[v._v("/\\d+(?=PM)/g")]),v._v(" 正向先行断言"),e("code",[v._v("(?=)")]),v._v("：只匹配后面有 "),e("code",[v._v("PM")]),v._v(" 的数值")]),v._v(" "),e("li",[e("code",[v._v("/\\d+(?!PM)/g")]),v._v(" 负向先行断言"),e("code",[v._v("(?!)")]),v._v("：匹配后面没有 "),e("code",[v._v("PM")]),v._v(" 的数值")]),v._v(" "),e("li",[e("code",[v._v("/(?<=\\$)\\d+/g")]),v._v(" 正向后行断言"),e("code",[v._v("(?<=)")]),v._v("：只匹配前面带有 "),e("code",[v._v("$")]),v._v(" 的数字")]),v._v(" "),e("li",[e("code",[v._v("/(?<!\\$)\\d+/g")]),v._v(" 负向后行断言"),e("code",[v._v("(?<!)")]),v._v("：匹配前面没有 "),e("code",[v._v("$")]),v._v(" 的数字")]),v._v(" "),e("li",[v._v("Flags/标志/修饰符\n"),e("ol",[e("li",[e("code",[v._v("g")]),v._v(" global")]),v._v(" "),e("li",[e("code",[v._v("m")]),v._v(" multiline")]),v._v(" "),e("li",[e("code",[v._v("i")]),v._v(" case insensitive")])])]),v._v(" "),e("li",[v._v("默认执行\n"),e("ol",[e("li",[e("code",[v._v("/.*r/")]),v._v(" 贪婪匹配：'"),e("code",[v._v("ber beer beeer beeeer")]),v._v("'")]),v._v(" "),e("li",[e("code",[v._v("/.*?r/")]),v._v(" 懒惰匹配: '"),e("code",[v._v("ber")]),v._v(" beer beeer beeeer'")])])])])])}),[],!1,null,null,null);_.default=c.exports}}]);