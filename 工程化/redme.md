# 前端工程化

通过各种工具或者方法，来提升开发效率。

- 1)脚手架工具
  - 1.1)通用脚手架:yeoman、Plop;
  - 1.2)专用脚手架工具：vue-cil、create-react-app、angular-cil、gatsby-cil;
- 2)自动化构建：npm script&script hooks、Grunt、Gulp、Fls
- 3)模块化打包：webpack、Rollup、Parcel
- 4)标准化规范：Eslint、StyleLint、Prettier
- 5)自动化测试：Mocha、Jest、Enzyme、Cypress、Nightmare、Puppeteer
- 6)自动化部署：Git Hooks、Lint-staged、CI/CD

## 1、脚手架工具

自动生成文件夹、文件等项目目录结构、规范。

- [通用脚手架] Yeoman、Plop;
- [专用脚手架工具]：vue-cil、create-react-app、angular-cil、gatsby-cil;

### 1.1 通用脚手架

- [Yeoman]
  是一款脚手架工具;
  可以帮助开发人员创建项目的基础结构代码；
- [yo]
  是 Yeoman 的命令行管理工具
  可以在命令行运行 Yeoman 的命令
- [生成器]
  Yeoman 中具体的脚手架
  针对不同的脚手架（例如：网站，APP，小程序等）

[步骤：]创建一个 node 项目

```javascript
npm i -g yo //全局安装Yeoman
npm  install -g generator-node //全局安装生成器
mkdir nodeDir //生成文件夹

//初始化
yo node //generator-node 后面的node生成器名称
/*
Module Name：模块名称
Description:描述信息
Project homepage url：x项目地址
Author’s Name:作者
Author’s Email:邮箱
Author’s Homepage:个人主页
Send coverage reports to coveralls：选择no，将报道报告发送给工作人员
Which license reports to use：开源协议，选MIT，随便选
...其他的默认
 */
```

[创建一个自己的生成器项目]：

- 1)文件目录结构：

- generator-生成器名称
  - generators
    - app 必须的
      - templates
        - index.html 模板文件
      - index.js 入口文件
- 2)安装基类

```bash
yarn add yeoman-generator
```

- 3)基本结构
  默认导出继承与 Yeoman-generator 的类

```javascript
const Generator = require("Yeoman-generator");
module.exports = class extends Generator {
  writing() {
    this.fs.write(this.destinationPath("路径(test.txt)"), 内容);
  }
};
```

- 4)挂载到全局
  根目录下(generator-生成器名称):

```javascript
npm link //挂载链接
npm unlink //卸载链接

//使用创建好的生成器
yo 生成器的名称 //例如： yo sun
```

- 5)模板语法

```html
<!-- EJS 语法：  -->
<title><%= title %></title>
```

```javascript
module.exports = class extends Generator {
  writing(){
    const tmpl=this.templatePath('index.html')；//获取模板文件的目录
    const output=this.destinationPath('index.html');//获取当前生成器的根目录
    const context={title:'孙氏黑马'};

    this.fs.copyTpl(tmpl,output,context)
  }
}
```

- 6)用户输入交互

```javascript
module.exports = class extends Generator {
  prompting(){
    return this.prompt([
      {
        type:'input',//交互类型
        name:'title',//变量字段
        message:'You project names:'//输入提示
      }
    ]).then((res)=>{
      this.answers=answers;
    })
  }

  writing(){
    const tmpl=this.templatePath('index.html')；//获取模板文件的目录
    const output=this.destinationPath('index.html');//获取当前生成器的根目录
    const context=this.answers;

    this.fs.copyTpl(tmpl,output,context)
  }
}
```

vue 案例：

```javascript
module.exports = class extends Generator {
  prompting(){
    return this.prompt([
      {
        type:'input',//交互类型
        name:'title',//变量字段
        message:'You project names:'//输入提示
      }
    ]).then((res)=>{
      this.answers=answers;
    })
  }

  writing(){
    const urlList=[
      "public/config/baseUrl.js",
      "json/WebSocketReception.js",
      "json/WebSocketSend.js",
      "favicon.ico",
      "index.html",
      "index.html",
      "src/api/test.js",
      "src/api/test.js",
      ...
    ]
    for(let item of urlList){
       const tmpl=this.templatePath(item)；//获取模板文件的目录
      const output=this.destinationPath(item);//获取当前生成器的根目录
      this.fs.copyTpl(tmpl,output,context)
    }

     this.fs.copyTpl(this.templatePath('index.html'),this.destinationPath('index.html'),this.answers)
  }
}
```
