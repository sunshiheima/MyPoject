[判断一个浏览器是否支持一个 css 属性]('https://blog.csdn.net/weixin_44058725/article/details/117027873?utm_medium=distribute.pc_feed_404.none-task-blog-2~default~BlogCommendFromBaidu~Rate-3-117027873-blog-null.pc_404_mixedpudn&depth_1-utm_source=distribute.pc_feed_404.none-task-blog-2~default~BlogCommendFromBaidu~Rate-3-117027873-blog-null.pc_404_mixedpud')

# 直接判断浏览器是否支持某个 CSS 属性 -普通 CSS 属性：

```js
//采用小驼峰命名规则
if ("textShadow" in document.documentElement.style) {
}
```

# 一些 CSS3 属性需要有浏览器厂商前缀，例如判断是否支持 transform（下面四个的关系是 或 ）

```js
if('MozTransform' in document.documentElement.style){}
if('WebkitTransform' ...)
if('OTransform' ...)
if('msTransform' ...) //IE
```

如果不知道某个 CSS 属性在 DOM 中的名字，在下面的网址查找：
https://blog.csdn.net/yj1838248984/article/details/88816673
