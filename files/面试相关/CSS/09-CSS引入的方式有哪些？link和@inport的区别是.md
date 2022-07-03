# CSS 引入的方式有四种：

    内联(元素上的style属性)、内嵌(style标签)、外链(link)、导入(@import)

# link 和@import 的区别是：

1. link：是 XHTML 标签，除了加载 CSS 外，还可以定义 RSS 等其他事务；
   @import 则属于 CSS 范畴，只能加载 CSS
2. link 引用 CSS 时，在页面载入时同时加载；而@import 需要页面网页完全载入以后加载。
3. link 是 XHTML 标签，无兼容问题；而@import 是在 CSS2.1 提出的，低版本的浏览器不支持。
4. link 支持使用 Javascript 控制 DOM 去改变样式；而@import 不支持
