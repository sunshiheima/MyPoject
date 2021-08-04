const path = require("path");
/* 去除冗余css */
const purgecss = require('@fullhuman/postcss-purgecss');
const glob = require('glob-all');
// const PurgecssPlugin = require('purgecss-webpack-plugin');
module.exports = {
    // 基本路径
    publicPath: process.env.NODE_ENV === 'production' ? './' : './',
    // 输出文件目录
    outputDir: 'dist', // 默认dist
    // 用于嵌套生成的静态资产（js,css,img,fonts）目录
    assetsDir: './assets',
    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
    indexPath: 'index.html', // Default: 'index.html'
    // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
    filenameHashing: true,
    // 构建多页时使用
    pages: {
        index: {
            // index page 的入口
            entry: 'src/main.js',//例如：public/index/main.js
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出名称
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'sunshiheima',//标题名称在此修改
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        //   subpage: 'src/subpage/main.js'
    },
    // eslint-loader是否在保存的时候检查
    lintOnSave: true,
    // 是否使用包含运行时编译器的Vue核心的构建
    runtimeCompiler: false,
    // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
    transpileDependencies: [],
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,
    devServer: {
        // host: 'localhost',设置本地IP地址
        contentBase: path.resolve(__dirname, 'dist'),
        port: 2333,
        https: false,
        open: true,
        // hotOnly: false,
        //    hot:true,//热刷新 一般不需要 另外添加
    },
    // 第三方插件配置
    configureWebpack: config => {
        // let obj=glob.sync(path.join(__dirname, './src/**/rest.scss'));
        config.plugins.push(


        )
        //  console.log(config.plugins)

    },
    /* css配置 */
    css: {
        loaderOptions: {
            sass: {
                /* 全局变量 */
                prependData: `@import "./src/assets/style/main.scss";`
            },
            postcss: {
                plugins: process.env.NODE_ENV === 'production' ? [
                    purgecss({
                        content: glob.sync([
                            path.join(__dirname, "./src/**/*.js"),
                            path.join(__dirname, "/**/*.vue"),
                            path.join(__dirname, "./public/**/*.html"),
                        ]),
                        /* 要清除的css 文件 */
                        // css:[ "./node_modules/**/*.css","./src/**/*.scss"],
                        defaultExtractor(content) {
                            const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
                            return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
                        },
                        safelist: [
                            /-(leave|enter|appear)(|-(to|from|active))$/, 
                            /^(?!(|.*?:)cursor-move).+-move$/, 
                            /^router-link(|-exact)-active$/,
                            /data-v-.*/, 
                            /^el-/,//不清除element 样式
                        ],
                        /*  /如果使用的时 CSS 动画库，例如 animate.css，你可以通过将 keyframes 参数设置为 true 来删除未使用的 keyframes。*/
                        keyframes: true,
                        /* 删除未使用的css变量 */
                        variables: true,
                        /* 排除文件路径 */
                        skippedContentGlobs: ["node_modules/**"],
                        /* 自定义样式 */
                        // dynamicAttributes: [/^el-/,]
                    })
                ] : []

            }
        }
    }
}