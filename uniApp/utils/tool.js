/*
 * @Author: sunshiheima 
 * @Date: 2021-06-15 15:56:33 
 * @Last Modified by: sunshiheima
 * @Last Modified time: 2021-06-15 15:57:43
 * 项目公共方法
 */
import Vue from "vue";
/* 显示提示 */
export const Toast = class Toast {
	constructor(timeOut) {
		this.timeOut = timeOut;
	}
	static showToast(title = "成功", callBack, data = {}) {
		uni.hideToast();
		let obj = Object.assign({ title, }, data, {
			complete() {
				if (callBack) {
					Toast.timeOut = setTimeout(() => {
						callBack(uni);
						clearTimeout(Toast.timeOut)
					}, 1500)
				}

			}
		})
		uni.showToast(obj);
	}
}
Vue.prototype.$showToast = Toast.showToast;
/* 路由传参封装 */
export const urlOptions = (object, isForm) => {
	let str = "?"
	let bg = false;
	for (let key in object) {
		if (isForm) {
			for (let k in object[key]) {
				if (k == "value") {
					if (bg) {
						str += `&${key}=${object[key][k]}`;
					} else {
						bg = true;
						str += `${key}=${object[key][k]}`;
					}
				}
			}
		} else {
			if (bg) {
				str += `&${key}=${object[key]}`;
			} else {
				bg = true;
				str += `${key}=${object[key]}`;
			}
		}

	}
	return str;
}
Vue.prototype.$urlOptions = urlOptions;
