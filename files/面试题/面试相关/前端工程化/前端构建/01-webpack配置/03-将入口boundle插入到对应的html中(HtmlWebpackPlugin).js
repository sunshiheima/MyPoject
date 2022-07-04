/*
如何将生成的boundle.js插入到对应的html中（使用HtmlWebpackPlugin插件自动处理）
根据单页和多页有所区别
*/

const plugins = [];
//单页：只需要一次HtmlWebpackPlugin
if (mode === "single") {
  plugins.push(
    new HtmlWebpackPlugin({
      minify: false,
      filename: "index.html",
      template: "./src/index.html",
    })
  );
}
//多页：每一个页面的入口boundle都需要一次HtmlWebpackPlugin
if (mode === "multi") {
  const files = getPages(options); //此处getPages文件写在./entry.js中
  files.forEach((file) => {
    const name = path.basename(file);
    file = `${PAGES_DIR}/${file}/index.html`;
    const chunks = [`runtime${name}`, name];
    plugins.push(
      new HtmlWebpackPlugin({
        minify: false,
        filename: `${name}.html`,
        template: file,
        chunks, //?
      })
    );
  });
}
//导出配置
module.exports = {
  plugins,
};
