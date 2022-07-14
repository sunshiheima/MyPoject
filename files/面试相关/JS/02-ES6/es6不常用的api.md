# 1 performance 计时 api

# 1.1 performance.now()

返回微秒精度的浮点值--时间戳。
[解决问题]：
Date.now()只是返回毫秒精度的时间戳，如果是执行的速度过快，相邻的 Date.now()并不会表现出差异。
[注意事项]：

- 1.这个在创建上下文之处就开始从 0 开始计时，所以对于不同的上下文参照点是不一样的，不具有共享性。
  使用 performance.timeOrigin 来解决，返回初始化时全局时钟的值。
- 2.幽灵漏洞
  可以执行缓存推断攻击，为了弥补这个漏洞，所有的浏览器选择降低 performance.now()的精度。

```js
var t1 = Date.now()
var t2 = Date.now()

console.log(t2 - t1) //0

var p1 = performance.now()
var p2 = performance.now()

console.log(p2 - p1) //13.532525 微秒精度

var m3 = performance.timeOrigin

console.log(m3 - p1) //1214124.7899
```

# 1.2 performance.mark()

User Timing api 用于记录和分析自定义性能条目。
使用 performance.getEntriesByType('mark')获取,返回的是一个对象数组；

```js
var p1 = performance.mark('sun')
for (let i = 0; i < 1000; i++);
var p2 = performance.mark('sun1')
var m4 = performance.measure('p3', 'p1', 'p2') //用于获取两个标记之间的时间差
console.log(p1)
/* 
{
  detail: null
  duration: 0
  entryType: "mark"
  name: "sun"
  startTime: 102183878.69999981
} 
*/
console.log(m4)
/* 
{
  name: "p3",
  entryType: "measure"
  startTime: 102183878.69999981
  duration: 112312.432423
} 
*/
```

# 1.3 Navigation Timing api

提供了高精度时间戳，用以度量当前页面加载速度。
获取方法：performance.getEntriesByType('navigation');

# 1.4 资源加载速度

获取方法：performance.getEntriesByType('resource');

# 2 template 标签 html 模板

template 标签中的内容 默认不会渲染到页面上，不属于活动文档，且查询不到。
[！注意]不能嵌套，template 下只能有一个 template 标签

```html
<div>
  <template id="foo">
    #document-fragment
    <p>hello word</p>
  </template>
</div>
```

```js
const dom = querySelector('#id')
const content = dom.content
console.log(content) //#document-fragment

const pDom = querySelector('p')
console.log(pDom) //null

const pDom2 = content.querySelector('p')
console.log(pDom2) // <p>hello word</p>

const body = document.body
body.appendChild(content) //直接一步将fragment添加到body，只会进行一次重排，就可以直接展示了
```

## 2.1 使用构造函数创建

```js
const fragment = new DocumentFragment()
fragment.appendChild(document.createElement('div')) //这种添加不会导致刷新
```

## 2.3 克隆

```js
const fragment = new DocumentFragment()
document.importNode(fragment, true)
```

## 2.4 模板脚本

模板中的脚本文件是不会执行的。

```html
<template id="bar">
  #document-fragment
  <script>
    console.log('sun') /* 不会执行 */
  </script>
</template>
```

```js
const body = document.body
const bar = querySelector('#bar')
body.appendChild(bar.content) // console.log('sun') 会输出结果
```

# 3 影子 dom

可以将一个完整的 dom 树添加到父 dom，这样可以实现 dom 封装，意味着 css 样式和 css 选择符可以限制在影子 dom 内，并且与外部隔离。
与 template 不同的是，影子 dom 会直接渲染到页面上。

# 3.1 创建影子 dom

并非是所有的标签都可以都可以创建影子 dom，以下标签可以创建

<body><div><span><aside><footer><h1>...<h6><header><main><nav><p>等。

通过 attachShadow()方法创建

```js
const body=document.body;
const yz=body.attachShadow({mode,'open'})
console.log(yz.shadowRoot)//#shadow-root(open)
```

[参数：]

- mode:值为 open，则可以通过 shadowRoot 在 HTML 上获取到;值为 closed,为保密影子 dom 获取不到。
