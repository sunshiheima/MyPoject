/*
entry: 入口配置（可以有多个入口文件）
一般需配置三个：
    -vendor.js      第三方依赖库
    -polyfill.js    特性填充库
    -入口文件配置    (根据单页/多页不同)
*/

//1.单页面应用入口配置
module.exports = {
  entry: {
    vendor: "./src/vendor.js",
    polyfill: "./src/polyfill.js",
    index: "./src/index.js", //重！
  },
};

//2.多页面应用入口配置（不同页面会有不同入口文件）
//不写死在entry中，而是在生成webpack.config.js时，扫描指定目录确定每个页面的入口文件。代码如下：
const path = require("path");
const fs = require("fs");
//公共entry
const commonEntry = ["./src/vendor.js", "./src/polyfill.js"];
//页面目录
const PAGES_DIR = "./src/pages/";
const entry = {};
//！遍历页面目录，筛选出那些带有index.js的文件夹(每一个文件夹代表一个页面)
const getPages = () => {
  return fs.readdirSync(PAGES_DIR).filter((item) => {
    let filepath = path.join(PAGES_DIR, item, "index.js");
    if (!fs.existsSync(filepath)) {
      filepath = `${filepath}x`;
    }
    if (!fs.existsSync(filepath)) {
      return false;
    }
    return true;
  });
};
//！将【页面名称：对应入口文件index.js的路径】，添加到entry当中
getPages(options).forEach((file) => {
  //options?
  const name = path.basename(file);
  entry[name] = [...commonEntry, `${PAGES_DIR}/${file}/index`];
});
//导出配置
module.exports = {
  entry,
};
