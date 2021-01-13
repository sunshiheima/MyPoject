const path = require('path')
// const  UglifyJsPlugin= require('uglifyjs-webpack-plugin');
module.exports = {
    // // 基本路径
    // publicPath: process.env.NODE_ENV === 'production' ? './' : './',
    publicPath:'./' ,
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
            entry: 'src/main.js',//例如：public/index/index.html
            // 模板来源
            template: 'src/pages/index/index.html',
            // 在 dist/index.html 的输出名称
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '孙氏黑马',//标题名称在此修改
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
    // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。如果这个值是一个函数，则会接收被解析的配置作为参数。该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.mode = 'production'
            // 将每个依赖包打包成单独的js文件
            let optimization = {
                runtimeChunk: 'single',
                splitChunks: {
                    chunks: 'all',
                    maxInitialRequests: Infinity,
                    minSize: 20000,
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name(module) {
                                // get the name. E.g. node_modules/packageName/not/this/part.js
                                // or node_modules/packageName
                                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                                // npm package names are URL-safe, but some servers don't like @ symbols
                                return `npm.${packageName.replace('@', '')}`
                            }
                        }
                    }
                },
                // minimizer: [new UglifyJsPlugin({ 
                //     uglifyOptions: {
                //         compress: {
                //             warnings: false,
                //             drop_console: true, // console
                //             drop_debugger: false,
                //             pure_funcs: ['console.log'] // 移除console
                //         }
                //     }
                // })]
            }
            Object.assign(config, {
                optimization
            })
        } else {
            // 为开发环境修改配置...
        }
        // Object.assign(config, {
        //     // 开发生产共同配置
        //     resolve: {
        //         alias: {
        //             '@': path.resolve(__dirname, './src'),
        //             '@c': path.resolve(__dirname, './src/components'),
        //             '@p': path.resolve(__dirname, './src/views')
        //         } // 别名配置
        //     }
        // })
    },
    // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })
    },
    // css相关配置
    css: {
        // 启用 CSS modules
        modules: false,
        // 是否使用css分离插件  设置为true 热刷新样式失效
        extract: process.env.NODE_ENV === 'production' ? true : false,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    //remUnit这个配置项的数值是多少呢？？？ 通常我们是根据设计图来定这个值，原因很简单，便于开发。
                    //假如设计图给的宽度是750，我们通常就会把remUnit设置为75，这样我们写样式时，可以直接按照设计图标注的宽高来1:1还原开发。
                    // require('postcss-px2rem')({
                    //     remUnit: 75
                    // })
                ]
            }
        },
    },
    // webpack-dev-server 相关配置
    devServer: {
        // host: 'localhost',设置本地IP地址
        contentBase:path.resolve(__dirname,'build'),
        port: 2333,
        https: false,
        open: true,
        // hotOnly: false,
        // hot:true,//热刷新 一般不需要 另外添加
        proxy: { // 设置代理
            '/api': {
                target: 'http://www.taobao.com', // 代理接口地址
                secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true, // 是否跨域
                ws: true,    //如果要代理 websockets，配置这个参数
                pathRewrite: {
                    '^/api': ''   //需要rewrite的, 这里理解成以'/api'开头的接口地址，把/api代替target中的地址
                }
            },
            // before: app => { },
        }
    },
    // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
    parallel: require('os').cpus().length > 1,
    // PWA 插件相关配置
    pwa: {},
    // 第三方插件配置
    pluginOptions: {
        // ...
    }
}