/*
解释：
    name: 是你配置的entry中键名，或者优化后chunk的名称？
    hash: 是表示bundle文件名添加文件内容hash值，以便于实现浏览器持久化缓存支持？
    crossOriginLoading: 在script标签上添加crossOrgin，以便于支持跨域脚本的错误堆栈捕获？
    publicPath: 静态资源路径，指的是输出到html中的资源路径前缀
    path: 文件输出路径
*/

// {
//     output: {
//         filename: '[name].[hash].js',
//         crossOriginLoading:'anonymous',
//         publicPath: 'https://7.ur.cn/fudao/pc/',
//         path: './dist/'
//     }
// }
