const fs = require("fs");
const path = require("path");

/* 1、读取文件*/
fs.readFile(path.join(__dirname, "./file/03fle/html/index.html"), "utf8", (err, dataStr) => {
  if (err) return console.error("读取文件失败！");
  // console.log(dataStr);
  strFilter(dataStr, "style");
  strFilter(dataStr, "js");
  strFilter(dataStr, "html");
})
function strFilter (htmlStr, type) {
  const styleReg = /<style>[\s\S]*<\/style>/;
  const jsReg = /<script>[\s\S]*<\/script>/;
  const url = `./file/03fle/dist/index.${type === "style" ? "css" : type}`;
  let str = "";
  if (type === "style" || type === "js") {
    const reg = type === "style" ? styleReg : jsReg;
    str = reg.exec(htmlStr);
    if (type === "style") {
      str = str[0].replace("<style>", "").replace("</style>", "");
    } else {
      str = str[0].replace("<script>", "").replace("</script>", "");
    }
  } else {
    str = htmlStr.replace(styleReg, "<link rel='stylesheet' type='text/css' href='./index.css' ></link>");
    str = str.replace(jsReg, "<script src='./index.js'></script>");
  }
  if (str) {
    // console.log(path, str[0]);
    fs.writeFile(path.join(__dirname, url), str, (err) => {
      if (!err) {
        console.log(`${type}写入成功！`);
      }
    })
  }
}
