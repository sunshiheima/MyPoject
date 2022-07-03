function Ajax(type, url, data, success, failed) {
  // 创建ajax对象
  var xhr = null;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  //...(此处省略一系列的业务逻辑细节)

  var type = type.toUpperCase();

  // 识别请求类型
  if (type == "GET") {
    if (data) {
      xhr.open("GET", url + "?" + data, true); //如果有数据就拼接
    }
    // 发送get请求
    xhr.send();
  } else if (type == "POST") {
    xhr.open("POST", url, true);
    // 如果需要像 html 表单那样 POST 数据，使用 setRequestHeader() 来添加 http 头。
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // 发送post请求
    xhr.send(data);
  }

  // 处理返回数据
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        success(xhr.responseText);
      } else {
        if (failed) {
          failed(xhr.status);
        }
      }
    }
  };
}

//调用
// 发送get请求
Ajax(
  "get",
  url地址,
  post入参,
  function (data) {
    // 成功的回调逻辑
  },
  function (error) {
    // 失败的回调逻辑
  }
);
