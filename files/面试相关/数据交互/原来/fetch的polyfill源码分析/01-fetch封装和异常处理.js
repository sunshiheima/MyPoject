export function fetch(input,init){
  return new Promise(function (resolve,reject){     //构造一个Promise对象并返回
    var request = new Request(input, init);         //创建一个Request对象

    var xhr = new XMLHttpRequest();                 //1.创建一个XMLHttpRequest对象

    xhr.open(request.method, request.url, true);    //2.取出Request对象中的请求方法、请求url, open一个xhr请求

    xhr.onload = function(){      //xhr onload后取出response的status、headers、body封装Response对象，调用resolve
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
      var body = 'response' in xhr ? xhr.response : xhr.responseText;
      resolve(new Response(body, options))
    }

    request.headers.forEach(function(value,name){   //将Request对象中存储的headers取出赋给xhr
      xhr.setRequestHeader(name, value);
    })

    xhr.send()

    //以下为异常处理部分
    /*
      注意：当和服务器建立连接，并收到服务器的异常状态码如404、500等并不能触发onerror
           当网络故障或请求被阻止时，才会标记为reject，如跨域、url不存在、网络异常等会触发onerror

            所以，使用fetch当接收到异常状态码都是会进入then而不是catch。这些错误请求往往要手动处理。

      手动终止
            可以在request参数中传入signal参数，并对signal对象添加abort事件监听，
            当xhr.readyState变为4（响应内容解析完成）后将signal对象的abort事件监听移除掉；
            这表示：
            在一个fetch请求结束之前可以调用signal.abort将其终止
            在浏览器中可以使用AbortController()构造函数创建一个控制器，然后使用AbortController.signal属性？？？
    */
    function abortXhr(){
      xhr.abort()
    }

    xhr.onerror = function(){   //请求失败
      reject(new TypeError('NetWork request failed'))
    }

    xhr.ontimeout = function(){   //请求超时
      reject(new TypeError('Network request failed'))
    }

    xhr.onabort = function(){     //手动终止
      reject(new DOMException('Aborted,','AbortError'))
    }

    if(request.signal){
      request.signal.addEventListener('abort',abortXhr)
      xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
          request.signal.removeEventListener('abort',abortXhr)
        }
      }
    }
  })

  //以下为cookie处理部分
  /*默认的credentials类型为same-origin，即可携带同源请求的cookie*/
  if(request.credentials === 'include'){
    xhr.withCredentials = true;
  }else if(request.credentials === 'omit'){
    xhr.withCredentials = false
  }
}

