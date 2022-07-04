var xhr = new XMLHttpRequest();
xhr.open('post','www.xxx.com',true);
//接收返回值
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4){
    if((xhr.status >= 200 && xhr.status <300) || xhr.status == 304){
      console.log(xhr.responseText);
    }
  }
};

//处理请求参数  postData变颜色了?而且有自动提示？说明它是内置的变量？
postData = {"name":"value","name2":"value2"};
postData = (function(value){
  var dataString = "";
  for(var key in value){
    dataString += key+"="+value[key]+"&";
  };
  return dataString;
}(postData));
//设置请求头
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//异常处理
xhr.onerror = function(){
  console.log('Network request failed');
};
//跨域携带cookie
xhr.withCredentials = true;

//发出请求
xhr.send(postData);

