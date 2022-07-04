# 孙氏黑马 npm 小本本

## 【node】 fs 模块

```js
//读取
fs.readFile('./file/读取.txt', 'utf8', (err, data) => {
  if (!!err) return
  if (data) {
    let str = data.replaceAll('=', ':')
    str = str.split(' ').join('\r\n')
    //写入
    fs.writeFile(path.join(__dirname, './file/写入.txt'), str, (err) => {
      if (!err) {
        console.log('写入成功！')
      }
    })
  }
})
```

## 【node】path 模块

```js
/* 
  1、地址格式化
   */
const p1 = path.normalize('/file//读取.txt')
console.log('格式化：', p1)

/*
  2、地址拼接 后面覆盖前面
 */
const p2 = path.join('/', './file', '/读取.txt')
console.log('地址拼接', p2)

/*
  3、如今巡航 (相当不断调用cd方法: cd file/读取.txt)
 */
const p3 = path.resolve('./', '/file', '读取.txt')
console.log('如今巡航：', p3)

/*
4、相对路径  
 */
const p4 = path.relative('./file/读取.txt', './file/写入.txt')
console.log('相对路径：', p4)
/* 
5、返回路径/文件的所在的文件夹路径 
  */
const p5 = path.dirname('/file/读取.txt')
console.log('文件名称：', p5)
/* 
7、返回文件名 可选参数为扩展名
  */
const p6 = path.basename('./file/读取.txt')
const p7 = path.basename('./file/读取.txt', '.txt')
console.log('文件名：', p6)
console.log('文件名：', p7)
/* 
8、返回扩展名 
*/
const p8 = path.extname('./file/读取.txt')
const p9 = path.extname('./file/读取.')
const p10 = path.extname('./file/读取')
console.log('扩展名：', p8, p9, p10)
/* 
9、路径分隔符
 */
const p11 = 'file/读取/txt'.split(path.sep) //不能实现
const p12 = 'file\\读取\\txt'.split(path.sep)
console.log('分隔符：', p11, p12)
/* 
10、__dirname 和 __filename 
  (1)dirname 当前文件所在文件夹的绝对路径
  (2)filename 当前文件的绝对路径
*/
console.log('绝对路径：', __dirname, __filename)
```

## 【node】 http 模块

```js
const http = require('http')
const fs = require('fs')
const path = require('path')
/* 1、创建服务器 */
const server = http.createServer()
/* 2、为服务器绑定request事件，监听客户端请求 */
server.on('request', (req, res) => {
  /* 获取url */
  let fPath = ''
  let fType = 'text/html'
  if (req.url === '/') {
    fPath = path.join(__dirname, './file/03fle/dist/index.html')
  } else {
    //地址拼接之后客户端只需要访问如：127.0.0.1/index.html
    fPath = path.join(__dirname, './file/03fle/dist', req.url)
  }
  if (req.url === '/index.css') fType = 'text/css'
  /* 设置响应头，解决中文乱码的问题 */
  //注意文件类型 如css：text/css
  res.setHeader('Content-Type', `${fType}; charset = utf - 8`)
  /* 读取文件并返回 */
  /* 读取文件 */
  fs.readFile(fPath, 'utf-8', (err, dataStr) => {
    if (err) return res.end('<h1>404 未找到资源！</h1>')
    res.end(dataStr)
  })
})
/* 3、启动服务器 */
server.listen(80, () => {
  console.log('serve running http://127.0.0.1:80')
})
```

## commonjs 规范

```text
 1、一个js文件就是一个模块，每个模块都有一个module对象，代表当前模块
 2、module对象有一个exports属性，用来暴露模块内部的变量/方法
 3、require加载一个模块 其实就是，加载那个模块的module.exports属性
```

## npm 发布流程

### 准备工作

#### package.json

```json
//package.json
{
  "name": "sunfirstday", //npm install sunfirstday
  "version": "1.0.2",
  "main": "index.js", //入口文件
  "license": "MIT", //开源协议
  "description": "我是一个测试npm上传文档！", //简短描述
  "keywords": "moment date html filter" //关键词
}
```

#### 入口文件 index.js

```js
//引入子模块组件
const moment = require('./dateFilter/index')
const htmlEscape = require('./htmlFilter/index')
//导出
module.exports = {
  ...moment,
  ...htmlEscape,
}
```

### 描述文件 README.md

### 发布

```text
 1、https://www.npmjs.com/ 注册账号
 2、使用nrm use npm 切换到npm原生镜像
 3、运行npm login 登录
 4、npm publish 发布
```

## 删除

```bash
npm unpublish 包名
```

```text
注意：删除72小时以内不得上传 相同包名
```
