//对fetch封装

//1.请求参数处理：支持传入不同的参数类型
function stringify(url, data){
  var dataString = url.indexOf('?') === -1 ? "?" : "&";
  for(var key in data){
    dataString += key + "=" + data[key] + "&";
  };
  return dataString;
}

if (request.formData) {
  request.body = request.data;
} else if (/^get$/i.test(request.method)) {
  request.url = `${request.url}${stringify(request.url, request.data)}`;
} else if (request.form) {
  request.headers.set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
  request.body = stringify(request.data);
} else {
  request.headers.set('Content-Type', 'application/json;charset=UTF-8');
  request.body = JSON.stringify(request.data);
}

//2.cookie携带
/*fetch在新版浏览器已经开始默认携带同源cookie，但在老版浏览器中不会默认携带，我们需要对他进行统一设置*/
request.credentials = 'same-origin';    //同源携带
//request.credentials = 'include';        //可跨域携带


//3.异常处理
/*
  当接收到一个代表错误的 HTTP 状态码时，
  从 fetch()返回的 Promise 不会被标记为 reject，即使该 HTTP 响应的状态码是 404 或 500。
  相反，它会将 Promise 状态标记为 resolve （但是会将 resolve 的返回值的 ok 属性设置为 false ），
  仅当网络故障时或请求被阻止时，才会标记为 reject。
  因此我们要对fetch的异常进行统一的处理
*/
.then(response=>{
  if(response.ok){
    return Promise.resolve(response);
  }else{
    const error = new Error(`请求失败！状态码：${response.status},失败信息：${response.statusText}`);
    error.response = response;
    return Promise.reject(error);
  }
});

//4.返回值处理
/*对不同的返回值类型调用不同的函数接收，这里必须提前判断好类型，不能多次调用获取返回值的方法*/
.then(response=>{
  let contentType = response.headers.get('content-type');
  if(contentType.includes('application/json')){
    return response.json();
  }else{
    return response.text();
  }
});

//5.jsonp
/*
  fetch本身没有提供对jsonp的支持，jsonp本身也不属于一种非常好的解决跨域的方式
  推荐使用cors或者nginx解决跨域
*/



