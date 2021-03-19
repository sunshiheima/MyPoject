
// let path = require('path');
// let stylePath = path.resolve(__dirname, '/uni.less')
module.exports={
	css: {  
	        loaderOptions: {  
	            less: {  
	                javascriptEnabled: true,  
	                globalVars: {  
	                    'hack': `true; @import "${require('path').resolve(__dirname,'./uni.less')}"`  
	                }  
	            }  
	        }  
	    }  
}