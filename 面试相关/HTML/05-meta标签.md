原文链接：https://juejin.cn/post/7089271039842058253

# 重点

meta 是文档级元数据元素，用来表示那些不能由其它 HTML 元相关元素（<base>、<link>, <script>、<style>或 <title>）之一表示的任何元数据。

## name 属性和 content 值:

name 和 content 一起使用，前者表示要表示的元数据的名称，后者是元数据的值。

## name 的值

charset：字符集
http-equiv：可模拟 http 请求头，设置过期事件、缓存和刷新
-expires 指定过期时间
-refresh 定时刷新
-set-cookie 设置 cookie
-progma 设置 no-cache 可以禁止缓存？
viewport：视口，控制页面宽高及缩放比例
-width/height 宽高，默认宽度为 980px
-initial-scale 初始缩放比例 1~10
-maximum-scale/minimum-scale 允许用户缩放的最大最小比例
-user-scalable 用户是否可以缩放 yes/no
-X-UA-Compatible 使用浏览器版本
-pple-mobile-web-app-status-bar-style 针对 WebApp 全屏模式，隐藏状态栏/设置状态栏颜色

## html 标签 doctype 的作用？

声明文档类型。告知浏览器用什么文档标准解析这个文档 -怪异模式（不加 doctype）：浏览器会使用自己的模式解析文档 -标准模式（加 doctype）：浏览器以 W3C 的标准解析文档
