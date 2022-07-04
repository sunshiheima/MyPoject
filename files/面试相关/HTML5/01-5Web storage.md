Web storage

# 重点

## 1.web storage 分为两种：localStorage 和 sessionStorage

```js
//存
localStorage.backtoken = "jartto";
localStorage.setItem("backtoken", "jartto");
//取
localStorage.getItem("backtoken");
//删
localStorage.removeItem("backtoken");
//清空
localStorage.clear();
```

## 2.localStorage 和 sessionStorage 大同小异，主要区别在于生命周期：

1. localStorage 和 sessionStorage 都是用来存储客户端临时信息的对象 —— 更倾向于用它来存储一些内容稳定的资源，比如 Base64 格式的图片字符串 或者 不经常更新的 CSS、JS 等静态资源
   它们均只能存储字符串类型的对象（虽然规范中可以存储其他原生类型的对象，但是都尚未有浏览器对其进行实现）
2. localStorage 生命周期是永久，这意味着除非用户直接用 JS 代码清除 localStorage 信息，否则这些信息将永远存在
3. sessionStorage 生命周期为当前窗口或标签页，一旦窗口或标签页被永久关闭了，那么所有通过 sessionStorage 存储的数据也就被清空了
4. 相同浏览器当中属于相同域名和端口下的页面间，可以共享 localStorage，但是不同页面间无法共享 sessionStorage 的信息。

## 3.离线存储

1. HTML5 的 Web storage API 采用了离线存储，会生成一个清单文件(manifest file).
   这个清单文件实质上就是一系列的 URL 列表文件，这些 URL 分别指向页面当中的 html, css, javascript, 图片等相关内容。

2. 如果要使用离线应用，则应用会引入这一清单文件。 浏览器会读取这一文件，把当中的文件下载并缓存到本地。
   从而使得这些 web 应用能够脱离网络使用，而用户在离线时的更改同样会映射到清单文件中，并在重新连线之后将更改应用并返回，工作方式与我们现在所使用的网盘有着异曲同工之处。

### 3. 使用方式:

#### 1.首先，需要在页面头加入 manifest 属性：

```html
<!DOCTYPE html>
<html manifest="cache.manifest">
  ...
</html>
```

#### 2.cache.manifest 文件的书写方式为：

CACHE MANIFEST
#v0.11

CACHE
js/app.js
css/style.css

NETWORK:
resourse/logo.pgn

FALLBACK:
//offline.html

### 4. 离线存储的 manifest 一般由三个部分组成：

1.CACHE: 表示需要离线存储的资源列表，由于包含 manifest 文件的页面将被自动离线存储，所以不需要把页面自身也列出来

2.NETWORK: 表示在它下面列出来的资源只有在在线的情况下才能访问，它们不会被离线存储，所以在离线情况下无法使用这些资源。
但是，如果在 CACHE 和 NETWORK 中有一个相同的资源，这个资源还是会被离线存储，也就是说 CACHE 的优先级更高。

3.FALLBACK：表示如果访问第一个资源失败，那么就使用第二个资源来替换它，比如上面这个文件表示的就是，如果访问根目录下任何一个资源失败了，那么就去访问 offline.html
