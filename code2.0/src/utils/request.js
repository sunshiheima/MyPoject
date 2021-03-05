import axios from 'axios';
import qs from 'qs';
import {Message,Loading } from "element-ui";
import "element-ui/lib/theme-chalk/loading.css";
let loadings=null;
const http = axios.create({
  /* eslint-disable */
  baseURL: BASE_URL,
  timeout: 5000,
})
http.interceptors.request.use(req => { //此处拦截请求，把请求数据处理得更清爽，更简洁，交给后端
  
  if (req.data && req.data.showLoadding) {
    if (loadings){
      loadings.close();
    }
    loadings = Loading.service({
      text: "Loading",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.1)"
    });
  } 
  let token = localStorage.getItem('token')
  if (token) {//如果有token,就把token放在请求数据的头部
    req.headers['token'] = token
  }
  if (req.methods === 'post') {//如果请求的方式是post,那就用qs模块处理掉数据
    req.data = qs.stringify(req.data)
  }
  return req//发送给后端经过处理的值
}, error => {
  if (loadings) loadings.close();
  Message.closeAll();
  if (error.message.includes('timeout')) {   // 判断请求异常信息中是否含有超时timeout字符串
     Message({ type: 'error', message: '请求超时，请稍后再试' })
    }else{
      Message({ type: 'error', message: error.message })
    }
    return Promise.reject(error);//如果有错就把错误原因返回
});
http.interceptors.response.use(res => {//响应拦截器哦
  if (loadings) loadings.close();
  let msg=null;
  if(res&&res.data&&res.data){
    msg=resCode(res.data.status)
  }
  if(msg){
    Message.closeAll();
     Message({ type: 'error', message: msg })
  }
  return Promise.reject(res.data);//将数据返回
}, error => {
  if (loadings) loadings.close();
  let msg = "未知错误";
  if (error && error.response) {
    msg=resCode(error.response.status)
  } else {
    if(error.message.includes('timeout')){
      msg = '服务器响应超时...'; 
    }else if(error.message=="Network Error"){
      msg = "服务器连接失败";
    }
    if(msg){
      Message.closeAll();
       Message({ type: 'error', message: msg })
    }
  }
 return Promise.reject(error)//把错误原因返回
}) 

function resCode(code) {//状态码判断
  let msg=null;
    switch (code) {
      case 400:
        msg = "错误400";
        break;
      case 401:
        msg = "未授权，请重新登录";
        break;
      case 403:
        msg = "拒绝访问";
        break;
      case 404:
        msg = "请求错误,未找到该资源";
        break;
      case 405:
        msg = "请求方法未允许";
        break;
      case 408:
        msg = "请求超时";
        break;
      case 500:
        msg = "服务器端出错";
        break;
      case 501:
        msg = "网络未实现";
        break;
      case 502:
        msg = "网络错误";
        break;
      case 503:
        msg = "服务不可用";
        break;
      case 504:
        msg = "网络超时";
        break;
      case 505:
        msg = "http版本不支持该请求";
        break;
      default:
        msg = null;
    }
return msg;
}
export const fileUpload=(url,file)=>{//文件上传
  return axios({
  method: "post",
  url:BASE_URL+url, // 本地图片上传的API地址
  data: file,
  config: { headers: { "Content-Type": "multipart/form-data" } },
});
}
export default http