let path = require("path");
module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname, "build"),
        port: 2333,
        https: false,
        open: true,
    },
    css: {
        // loaderOptions: {
        //     postcss: {
        //         postcss: {
        //             plugins: [
        //                 //viewportWidth这个配置项的数值是多少呢？？？ 通常我们是根据设计图来定这个值，原因很简单，便于开发。
        //                 //假如设计图给的宽度是750，我们通常就会把viewportWidth设置为75，这样我们写样式时，可以直接按照设计图标注的宽高来1:1还原开发。
        //                 require('postcss-plugin-vwtorem')({
        //                     viewportWidth: 750,         // 默认 viewport 宽度
        //                     unitPrecision: 5,           // 保留小数点之后位数
        //                     rootValue: 16,              // 转换为 rem 的基础字号
        //                     keepVw: true,               // 是否保留 vw，默认保留
        //                     selectorBlackList: ["novw"]       // 黑名单，用于忽略转换为 vw
        //                 })
        //             ]
        //         }
        //     }
        // }
    }
}