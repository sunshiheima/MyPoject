#!/usr/bin/env node
const path = require('path');
const inquirer = require('inquirer');
const ejs = require('ejs');
const fs = require('fs');
/* 命令行交互 */
inquirer.prompt([{
  type: 'input',
  name: 'title',
  message: "my project name:"
}]).then(res => {
  console.log(res)
  const tempDir = path.join(__dirname, './templates');//模板目录
  const targetDir = process.cwd();//目标目录

  /* 文件读取 */
  fs.readdir(tempDir, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
      ejs.renderFile(path.join(tempDir, file), res, (err, result) => {
        if (err) throw err;
        fs.writeFileSync(path.join(targetDir, file), result)
      })
    })
  })
})