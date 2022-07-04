const express = require('express');
const path = require('path');
const app = express();
/* 中间件 */
/* 中间件一般放在所有路由之前 */
/* 1、应用级别中间件 */
app.use((req, res, next) => {
  console.log('应用中间件！');
  next();
})
/* 2、路由中间件！ */
app.get('/user', (req, res, next) => {
  console.log('路由中间件');
}, (req, res) => {

})
/* 测试错误中间件 */
app.get('/list', (req, res) => {
  console.log('错误中间件！');
  throw Error('服务器错误！')
  res.send('请求成功！')
})
/* 4、express内置中间件*/
/* 4.1  express.static 快速托管静态资源，例如：html、css、js等。（无兼容性）*/
/* 4.2  express.json 解析json格式的请求体数据（仅在4.16.0+版本中可用） */
/* 4.3  express.urlencoded 解析URL-encoded格式的请求体数据 */

/* express.static 访问：127.0.0.1/file/index.html */
app.use('/files', express.static(path.join(__dirname, "/file/03fle/dist")));
/* express.json  */
/* 使用内置express.josn中间件 默认req.body为undefined */
app.use(express.json());
app.post('/addUser', (req, res) => {
  console.log(req.body);
  res.send(req.body)
})
/*  express.urlencoded 键值对的形式 */
app.use(express.urlencoded({ extended: false }));//固定写法
app.post('/upUser', (req, res) => {
  console.log(req.body);
  res.send(req.body)
})
/* 3、错误中间件 */
/* 拦截所有请求错误，错误中间件一般放在路由最后 */
app.use((err, req, res, next) => {
  console.log('错误中间件！');
  res.send('服务器错误！')
})
/* 5、第三方中间件 */
/*
  5.1 安装 例如：npm i body-parser
  5.2 使用require引入
  5.3 调用app.use()注册
 */
/* 6、自定义中间件 */
/* 所有的中间件共享req与res 共享到下个中间件 */
app.use((req, res, next) => {
  /* 监听data 事件*/
  req.on('data', () => {
    req.starTime = Date.now();
    next()
  })
  /* 监听end 事件*/
  req.on('end', () => {
    req.endTime = Date.now();
    next()
  })
})
app.get('/sun', (req, res) => {
  console.log(req.starTime, req.endTime);
})
app.listen(80, () => {
  console.log('server running at http://127.0.0.1');
})