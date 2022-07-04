const express = require('express');
const errorMiddle = require('./errorMiddle');
const userRouter = require('./router/user');
const send = require('./sendMiddle');
const { expressjwt } = require('express-jwt');
const { secretKey } = require('./config');


const app = express();

/* urlencoded中间件处理 */
app.use(express.urlencoded({ extended: false }));

/* 自定义send中间件 */
app.use(send);

/* token中间件 //中间件解析（'/user'开头的接口都不验证token）*/
app.use(expressjwt({ secret: secretKey, algorithms: ['HS256'] }).unless({ path: [/^\/user\//] }));

/* user路由 */
app.use('/user', userRouter);//登录注册

/* 错误中间件 （所有路由之后引入）*/
app.use(errorMiddle);

app.listen(80, () => {
  console.log('server running at http://127.0.0.1');
})