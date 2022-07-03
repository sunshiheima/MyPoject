const path = require("path");
module.exports={
    devServer: {
        contentBase: path.resolve(__dirname, "build"),
        host:"127.0.0.1",
        disableHostCheck: true,
        port: 2333,
        https: false,
        open: true,
    },
    css:{
           loaderOptions: {
            postcss: {
                plugins: [
                    // require('postcss-pxtorem')({
                    //     rootValue: 75,
                    //     unitPrecision: 5,
                    //     propList: ["*"],
                    //     selectorBlackList: [],
                    //     replace: true,
                    //     mediaQuery: false,
                    //     minPixelValue: 0,
                    //     exclude:"/node_modules/i",
                    // })
                ]
                        //     remUnit: 75
                        // })
                   
            //    package.json
            //    "postcss": {
            //     "plugins": {
            //       "postcss-pxtorem": {
            //         "unitPrecision": 75,
            //         "propList": ["*"],
            //         "selectorBlackList": [],
            //         "replace": true,
            //         "mediaQuery": false,
            //         "minPixelValue": 0,
            //         "exclude": "/node_modules/i"
            //       }
            //     }
            //   },
            }
        }
       
    }
}