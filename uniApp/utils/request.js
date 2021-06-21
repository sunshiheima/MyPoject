/*
 * @Author: sunshiheima 
 * @Date: 2021-06-15 15:58:11 
 * @Last Modified by: sunshiheima
 * @Last Modified time: 2021-06-15 15:59:37
 * 接口封装
 */
import Vue from "vue";
import {Toast} from "./tool.js"
// 定义默认的路径
const BASE_URL="http://10.28.17.80:10001";
const BASE_TIMEOUT=20000;
//先把接口暴露出去
const http={
	//我们先定一个uni-app方法 以便于以下操作使用uni-app调取接口时便利
	request(options) {
		///我们使用Promise方法来实现调用接口时后面多个.then()的方法
		//只有Promise能实现如同$axios后面连续多个.then()的方法
		return new Promise((reslove, reject) => {
			let token=uni.getStorageSync("token");
			if(!token){
				if(!options.login){
					reslove(false);
					return loginChecked(false);
				} 
				token="";
			}
			uni.request({
				...options,
				header:{
					'Authorization':"Meeting "+ token,
					"Content-Type": "application/x-www-form-urlencoded"
				},
				success: res => {
					//判断我们在使用封装的自定义时第三个参数是否为native
					uni.hideLoading();
					//当native为true时 我们返回原数据
					if (options.native) {
						reslove(res);
					}
					//当native为false时 我们直接返回data中的数据
					if (res.statusCode === 200) {
						const{code,msg}=res.data;
						let result=filterStateCode(code,msg,options);
						if(result){
							reslove(result)
						}else{
							reslove(res.data)
						}
					} else {
						//加入接口参数错误或接口地址错误时 我们返回原错误提示
						Toast.showToast("请求失败！",null,{icon:"none"})
						reject(res)
					}
				},
				fail: error => {
					uni.hideLoading();
					Toast.showToast("请求失败！",null,{icon:"none"})
					reject(error)
				}
			})
		})
	},
	//在方法中 第二个参数和第三个参数用ES6新语法来添加默认值
	//接口调取get方法
	get(url, data = {}, options = {}, isShowLoading = false) {
		//我们把传过来的参数赋给options，这样我们在使用uni-app
		//this.request()方法时 传递一个参数就可以
		options=options?options:{};
		options["url"] = BASE_URL+url;
		options["data"] = data?data:{};
		options["timeout"]=BASE_TIMEOUT
		options["method"] = 'get';
		//调用上面自己定义的this.request()方法传递参数
		uni.hideLoading();
		if (isShowLoading) {
			uni.showLoading({
				title: "数据加载中",
				icon: "loading",
				mask: true,
				position: "center",
			})
		}

		return this.request(options);
	},
	//接口调取post方法
	post(url, data = {}, options = {}, isShowLoading = false) {
		options=options?options:{};
		options["url"] = BASE_URL+url;
		options["data"] = data?data:{};
		options["timeout"]=BASE_TIMEOUT;
		options["method"]='post';
		uni.hideLoading();
		if (isShowLoading) {
			uni.showLoading({
				title: "数据加载中",
				icon: "loading",
				mask: true,
				position: "center",
			})
		}
		return this.request(options);
	}
}
Vue.prototype.$http=http;
/* 拦截状态吗 */
function filterStateCode(code,msg,options){
	switch (code){
		case 401:
		return loginChecked(true,options);
		break;
		case 0:
		msg="";
		break;
		case 200:
		msg="";
		break;
	}
	if(msg){
		Toast.showToast(msg,null,{icon:"none"});
	}
	return false;
}
/* login判断  token失效不跳转login页面 直接重新获取token 并完成之前的请求 基于微信小程序（openid 长期有效）*/
function loginChecked(isToken=true,options){
	let msg="前往登陆";
	isToken&&(msg="token已经过期");
	if(isToken){
		/* 获取token */
		let Openid=uni.getStorageSync("openId");
		let sessionKey=uni.getStorageSync("seestionKey");
		if(Openid&&sessionKey){
			return http.post("/api/auth",{
				Openid,
				sessionKey,
				},{login:true},true).then(res=>{
					uni.setStorageSync("token",res.data.token);
					return	http.request(options);
				})
		}else{
			uni.redirectTo({
				url:"/pages/login/login"
			})
		}
	}else{
		uni.redirectTo({
			url:"/pages/login/login"
		})
	}
	
}