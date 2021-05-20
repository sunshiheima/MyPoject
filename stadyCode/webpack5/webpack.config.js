const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const PurgecssWebpackPlugin=require("purgecss-webpack-plugin");
const PATHS={src:path.join(__dirname,"src")};
const glob=require("glob");
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
            /* 样式资源
                postcss 需要在package.json中加入
                 "browserslist": [
                    "> 0.2%",
                    "last 2 versions",
                    "not dead"
                ],
            */
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
            },
            /* 图片资源处理 */
            {
                test: /\.(png|jpg|gif)$/,
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
                exclude: /\.(html|css|js|scss|less|json|png|jpg|gif|jpeg|)$/,
                loader: "file-loader",
                options: {
                    name: "[name][hash:10].[ext]",
                    publicPath: "./files",
                    outputPath: "files/"
                }
            },
            /* 
            eslint 检查工具
            1)package.json中加入:
               "eslintConfig": {
                "extends": "airbnb-base"
                 }
            2)代码行加入 eslint-disable-next-line 下一行不在检查
            */
            {
                test: /\.js$/,
                loader: "eslint-loader",
                exclude:/node_modules/,
                options: {
                    fix: true,
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
                removeComments: true,//移除注释
            }
        }),
        /* 通过link引入css */
        new MiniCssExtractPlugin({
            filename: "demo.css"
        }),
        /* 压缩css */
        new OptimizeCssAssetsWebpackPlugin(),
        /* 去除死代码 */
        new PurgecssWebpackPlugin({
            paths:glob.sync(`${PATHS.src}/**/*`,{nodir:true}),
        })
    ],
    /* 开发服务器 */
    devServer: {
        port: 2333,//端口
        contentBase: path.join(__dirname, "dist"),
        compress: true,//为静态文件开启gzip 压缩
        open:true,
        hot:true,
    },
    target:"web",//webpack5 需要添加这个参数 启动刷新
    
    // mode: "development"//development 开发 production 生产
}