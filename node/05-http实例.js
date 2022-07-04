const path = require("path");
const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  console.log(req.url);
  /* 获取url */
  let fPath = "";
  let fType = "text/html";
  if (req.url === "/") {
    fPath = path.join(__dirname, "./file/03fle/dist/index.html");
  } else {
    fPath = path.join(__dirname, "./file/03fle/dist", req.url);
  }
  if (req.url === "/index.css") fType = "text/css";


  /* 读取文件 */
  fs.readFile(fPath, "utf-8", (err, dataStr) => {
    if (err) return res.end("<h1>404 未找到资源！</h1>");
    res.end(dataStr);
  })
  res.setHeader("Content-Type", `${fType}; charset = utf - 8`);
})
server.listen(80, () => {
  console.log('server running at http://127.0.0.1');
})