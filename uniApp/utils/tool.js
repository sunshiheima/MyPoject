import Vue from "vue";
/* 显示提示 */
export const Toast = class Toast {
	constructor(timeOut) {
		this.timeOut = timeOut;
	}
	static showToast(title = "成功", callBack, data = null) {
		uni.hideToast();
		uni.showToast({
			title,
			icon: (data && data.icon) ? data.icon : "succes",
			duration: (data && data.ctimeOut) ? data.duration : 1500,
			image: (data && data.image) ? data.image : null,
			mask: (data && data.mask) ? data.mask : false,
			position: (data && data.position) ? data.position : "center",
			complete() {
				if (callBack) {
					Toast.timeOut = setTimeout(() => {
						callBack();
						clearTimeout(Toast.timeOut)
					}, 1500)
				}

			}
		})
	}
}
Vue.prototype.$showToast = Toast.showToast;
