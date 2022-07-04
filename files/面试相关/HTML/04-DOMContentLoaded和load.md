文章还不错，只是细节有点冗余，下面笔记为重点！
https://juejin.im/post/6844903623583891469

# 重点

## MDN 的解释：

DOMContentLoaded：html 文档加载完毕，并且 html 所引用的内联 js、以及外链 js 的同步代码都执行完毕后触发。
load: 当页面 DOM 结构中的 js、css、图片，以及 js 异步加载的 js、css 、图片都加载完成之后，才会触发 load 事件。

## 区别：

DOMContentLoaded：是 HTML 文档加载并解析完毕、页面引用的所有 js(内嵌或外链)中的同步代码执行完毕之后，就会触发 DOMContentLoaded 事件。
load: html 文档中的 css、js、图片，以及 js 中异步加载的 js、css 、图片，都加载完成之后，才会触发 load 事件。

### 注意：

video、audio、flash 不会影响 load 事件触发

## 页面首次加载过程：

```text
1、浏览器首先下载该地址所对应的 html 页面；
2、浏览器解析页面的 DOM 结构：（同时会开启下载线程，将文档中的所有资源，按优先级排序加载）；

-遇到 html 标签：解析 html，构建 DOM 树
-遇到 link 标签：加载并解析 css，构建 render 树。不会影响后面资源的下载，但会阻塞 Render 树的构建，外链的css加载完之前都是白屏。
-遇到 script 标签：如果该 js 尚未下载到本地，则该js 之前的 DOM和css合成render树，会暂时先被渲染到页面上，同时 js 会阻止后面 DOM 的解析构建，所以，js 执行完之前，我们在页面上看不到该 js 后面的 DOM 元素。
3、文档解析完毕，页面重新渲染。当页面引用的所有 js 同步代码执行完毕，触发 DOMContentLoaded 事件
4、html 文档中的图片资源，js 代码中有异步加载的 css、js 、图片资源都加载完毕之后，load 事件触发。
```

## 【页面从白屏到首次渲染的时间节点】

在 body 中第一个 script 资源下载完成之前，浏览器会进行首次渲染。
将该 script 标签前面的 DOM 树和 CSSOM 树合并成一棵 Render 树。
//只有 DOM 树构建完毕了，而外链 CSS 还没有加载完成时，Render 树也不会被构建，仍然是白屏。

浏览器会限制【同一域名】下的资源并发下载线程数，chrome 为 6 个。（超过 6 个需在队列中等待）
这就是为什么我们要将资源发散到不同域名下的原因，是为了充分利用该机制，最大程度的并发下载所需资源。
//如果是 n 个不同域名的化，在浏览器设置的最大并发上限以内(默认是 10 个)，是可以达到 n\*6 个的最大并发下载的。

## performance 性能统计：

//要用好这个工具，首先需要各个过程的细节！具体见文！

```javascript
// 利用 performance 统计 load 加载时间。
console.log(performance.timing.loadEventStart - performance.timing.fetchStart);
```

### performance 属性：

connectStart：HTTP（TCP）开始建立连接的时间。如果是持久连接，则和 fetchStart 的时间相等，注意，如果在传输层发生了错误且重新建立连接，这里显示的是新建立连接的开始时间。
connectEnd: 完成建立连接的时间。
domComplete：DOM 树解析完成，并且资源准备就绪的时间，Document.readyState 变为 complete，并将抛出 readystatechange 相关事件。
domContentLoadedEventEnd：DOM 解析完成后，网页内资源加载完成的时间（如 JS、css 加载执行完毕）。
domContentLoadedEventStart：DOM 解析完成后，网页内资源加载开始的时间在 DOMContentLoaded 事件抛出前发生。
loadEventStart：load 事件触发，也即 load 回调函数开始执行的时间。注意：如果没有绑定 load 事件，值为 0。
loadEventEnd：load 事件的回调函数执行完毕的时间

# 拓展

## 名词解释：

### 下载/加载

这两个词语表达的是一个意思，就是浏览器将资源下载到本地的过程。

### 解析

解析的意思是将一个元素通过一定的方式转换成另一种形式。
比如 html 的解析。首先要明确，html 下载到浏览器的表现形式就是 包含字符串的文件。浏览器将 html 文件里面的字符串读取到内存中，按照 html 规则，对字符串进行取词编译，将字符串转化成另一种易于表达的数据结构。

#### 浏览器会对转化后的数据结构自上而下进行分析：

首先开启下载线程，对所有的资源进行优先级排序下载（注意，这里仅仅是下载）。

#### 同时主线程会对文档进行解析：

遇到 script 标签时，首先阻塞后续内容的解析，同时检查该 script 是否已经下载下来，如果已下载，便执行代码。
遇到 link 标签时，不会阻塞后续内容的解析（比如 DOM 构建），检查 link 资源是否已下载，如果已下载，则构建 cssom。
遇到 DOM 标签时，执行 DOM 构建，将该 DOM 元素添加到文档树中。

#### 注意:

在 body 中第一个 script 资源下载完成之前，浏览器会进行首次渲染，将该 script 标签前面的 DOM 树和 CSSOM 合并成一棵 Render 树，渲染到页面中。这是页面从白屏到首次渲染的时间节点，比较关键。

### DOM 构建

将文档中的所有 DOM 元素构建成一个树型结构。

### css 构建

将文档中的所有 css 资源合并。

### render 树

将 DOM 树和 CSS 合并成一棵渲染树，render 树在合适的时机会被渲染到页面中。（比如遇到 script 时, 该 script 还没有下载到本地时）。
