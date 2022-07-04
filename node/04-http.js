const http = require("http");
const fs = require("fs");
const path = require("path");
/* 1、创建服务器 */
const server = http.createServer();
/* 2、为服务器绑定request事件，监听客户端请求 */
server.on("request", (req, res) => {
  console.log(`请求了${req.url},${req.method}`);
  /* 设置响应头，解决中文乱码的问题 */
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  /* 读取文件并返回 */
  fs.readFile(path.join(__dirname, "./file/03fle/html/index.html"), "utf8", (err, dataStr) => {
    if (err) return console.warn("读取文件失败！");
    res.end(dataStr);
  })

})
/* 3、启动服务器 */
server.listen(80, () => {
  console.log("serve running http://127.0.0.1:80");
})
