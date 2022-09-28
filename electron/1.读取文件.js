const fs = require('fs');
const path = require("path");

window.onload = () => {
  const readBtn = document.querySelector('.read');
  const writeDiv = document.querySelector('.write');

  readBtn.onclick = () => {
    fs.readFile(path.join(__dirname, 'resource/读入文件.txt'), "utf8", (err, data) => {
      if (err) return alert("读取失败！")
      writeDiv.textContent = data;
    })
  }
}
