//引入老接口
import Ajax from "./01-XMLHttpRequest封装";
//引入新接口
import HttpUtils from "./02-fetch封装";

//使用适配器AjaxAdepter
// Ajax适配器函数，入参与旧接口保持一致
async function AjaxAdapter(type, url, data, success, failed) {
  const type = type.toUpperCase();
  let result;
  try {
    // 实际的请求全部由新接口发起
    if (type === "GET") {
      result = (await HttpUtils.get(url)) || {};
    } else if (type === "POST") {
      result = (await HttpUtils.post(url, data)) || {};
    }
    // 假设请求成功对应的状态码是1
    result.statusCode === 1 && success
      ? success(result)
      : failed(result.statusCode);
  } catch (error) {
    // 捕捉网络错误
    if (failed) {
      failed(error.statusCode);
    }
  }
}

// 用适配器适配旧的Ajax方法，然后老代码中调用的Ajax实则是这个Ajax（而非原来的Ajax封装了，所以原来的./01-XMLHttpRequest封装可以删了）
async function Ajax(type, url, data, success, failed) {
  await AjaxAdapter(type, url, data, success, failed);
}

export default Ajax;
