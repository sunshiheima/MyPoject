const express = require("express");
/* 导入自定义路由模块 */
const router = require("./08-router");
const path = require("path");
const app = express();
/* 静态资源处理 并加上路由前缀*/
/* 注意事项：如果use中含有相同的模块，先use的覆盖后面的 */
app.use('/files', express.static(path.join(__dirname, "./file/03fle/dist")))
/* 使用自定义模块 */
app.use("/api", router)
/* 启动服务器 监听端口 */
app.listen(80, () => {
  console.log("serve running at http://127.0.0.1");
})
/*
  请使用nodemon 运行：检测到代码改变 自动重启服务器
 */