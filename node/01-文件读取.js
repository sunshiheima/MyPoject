const fs = require("fs");
const path = require("path");
fs.readFile("./file/读取.txt", "utf8", (err, data) => {
  if (!!err) return;
  if (data) {
    let str = data.replaceAll('=', ":");
    str = str.split(" ").join("\r\n");
    fs.writeFile(path.join(__dirname, './file/写入.txt'), str, (err) => {
      if (!err) {
        console.log("写入成功！")
      }
    })
  }
})