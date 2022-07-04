## 安装

```bash

  npm install sunfirstday

```

## 时间格式化

```js
//2022-04-01 15:21:50
const date = sun.moment(new Date())
```

## html 字符串转义

```js
//转义前html字符
const htmlStr = '<div><span>sun htmlEscape</span></div>'
//&lt;div&gt;&lt;span&gt;sun htmlEscape&lt;/span&gt;&lt;/div&gt;
const escapeAfter = sun.htmlEscape(htmlStr)
```

## html 转义字符还原

```js
const escapeBefore = sun.htmlUnEscape(escapeAfter)
//<div><span>sun htmlEscape &emsp;</span></div>
console.log(escapeBefore)
```
