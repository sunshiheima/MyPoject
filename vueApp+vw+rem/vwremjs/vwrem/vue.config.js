module.exports={
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