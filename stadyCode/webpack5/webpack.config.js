const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
  /* 入口 */
  entry: "./src/main.js",
  /* 出口 */
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "dist"),
  },
  /* loader 各种加载器*/
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,//图片资源处理
        loader: "url-loader",
        options: {
          limit: 8 * 1024,
          name: "[name][hash:10].[ext]",//不重复名字
          publicPath: "./imgs/",
          outputPath: "imgs/",
          // esModule:false,//关闭es6
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        // 打包其他资源
        exclude: /\.(css|js|html|scss|png|jpg|gif)$/,
        loader: "file-loader",
        options: {
          name: "[name][hash:10].[ext]",
          publicPath: "./files",
          outputPath: "files/"
        }
      }
    ]
  },
  /* 插件 */
  plugins: [
    /* html处理 */
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
      filename: "index.html",
      minify: {
        // collapseWhitespace: true,//移除空格
        removeComments: true,//移除注释s
      }
    }),
    /* 通过link引入css */
    new MiniCssExtractPlugin({
      filename: "demo.css"
    }),
    /* 压缩css */
    new OptimizeCssAssetsWebpackPlugin()
  ],
  /* 开发服务器 */
  devServer: {
    port: 2333,//端口
    contentBase: path.join(__dirname, "dist"),
    compress: true,//为静态文件开启gzip 压缩
  },
  mode: "development"//development 开发 production 生产
}