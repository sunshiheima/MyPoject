/*
  在很长一段时间里，人们使用jQuery提供的ajax封装进行网络请求，
  包括$.ajax 、 $.get 、 $.post
  这几个方法放到现在，我依然觉得很实用

  $ajax只接收一个参数，这个参数接收一系列配置，其自己封装了一个jqXHR对象
  作者还提供了jQuery-ajax源码
*/
$.ajax({
  dataType:'json',  //设置返回值类型
  contentType:'application/json',   //设置参数类型
  headers:{'Content-Type','application/json'},    //设置请求头
  xhrFields:{withCredentials:true},   //跨域携带cookie
  data:JSON.stringify({a:[{b:1, a:1}]}),    //传递参数
  error:function(xhr,status){   //错误处理
    console.log(xhr,status);
  },
  success:function(data,status){    //获取结果
    console.log(data,status);
  }
})