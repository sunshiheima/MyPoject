const express = require('express');
const app = express();
/* 导入api路由 */
const apiRouter = require('./10-apiRouter');
/* 解决跨域 */
const cors = require('cors');
app.use(cors());


/* post请求处理 */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
/* 路由中间件 */
app.use('/api', apiRouter);

app.listen(80, () => {
  console.log('server running at http://127.0.0.1');
})