// 定义默认的路径
const BASE_URL="http://117.175.169.58:19223"
//先把接口暴露出去
export default {
	//我们先定一个uni-app方法 以便于以下操作使用uni-app调取接口时便利
	request(options) {
		///我们使用Promise方法来实现调用接口时后面多个.then()的方法
		let token=uni.getStorageSync("token");
		if(!token){
			token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjE2NzM3MzA5LCJ1c2VybmFtZSI6ImFkbWluIn0.i7EMUuV-xB4ls5ygMc3mcyRQuW82MKhR9ASNWSqwJ9A"
		}
		//只有Promise能实现如同$axios后面连续多个.then()的方法
		return new Promise((reslove, reject) => {
			uni.request({
				...options,
				header:{'token':token},
				success: res => {
					//判断我们在使用封装的自定义时第三个参数是否为native
					uni.hideLoading();
					//当native为true时 我们返回原数据
					if (options.native) {
						reslove(res)
					}
					//当native为false时 我们直接返回data中的数据
					if (res.statusCode === 200) {
						uni.hideToast(); //展示提示前销毁之前的提示
						uni.showToast({
							title: "数据数据成功！",
							icon:"success",
							position: "center"
						})
						reslove(res.data)
					} else {
						//加入接口参数错误或接口地址错误时 我们返回原错误提示
						uni.hideToast(); //展示提示前销毁之前的提示
						uni.showToast({
							title: "数据获取失败！",
							position: "center"
						})
						reject(res)
					}
				},
				fail: error => {
					uni.hideLoading();
					uni.hideToast(); //展示提示前销毁之前的提示
					uni.showToast({
						title: "服务连接失败！",
						position: "center"
					})
				}
			})
		})
	},
	//在方法中 第二个参数和第三个参数用ES6新语法来添加默认值
	//接口调取get方法
	get(url, data = {}, options = {}, isShowLoading = false) {
		//我们把传过来的参数赋给options，这样我们在使用uni-app
		//this.request()方法时 传递一个参数就可以
		options.url = url;
		options.data = data;
		options.method = 'get';
		//调用上面自己定义的this.request()方法传递参数
		uni.hideLoading();
		if (isShowLoading) {
			uni.showToast({
				title: "数据加载中",
				icon: "loading",
				mask: true,
				position: "center",
			})
		}

		return this.request(options)
	},
	//接口调取post方法
	post(url, data = {}, options = {}, isShowLoading = false) {
		options.url = url;
		options.data = data;
		options.method = 'post';
		uni.hideLoading();
		if (isShowLoading) {
			uni.showToast({
				title: "数据加载中",
				icon: "loading",
				mask: true,
				position: "center",
			})
		}
		return this.request(options)
	}
}
