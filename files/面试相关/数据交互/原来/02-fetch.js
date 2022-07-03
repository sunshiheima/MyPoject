/*
  发展背景：
    1.近年来，随着前端其他框架的出现（vue、react、angular)，人们越来越少的使用jQuery,
      我们不可能单独为了使用jQuery的Ajax api来单独引入它，所以我们需要寻找新的技术方案。

    2.尤雨溪在他的文档中推荐axios进行网络请求，axios基于Promise对原生XHR进行了非常全面的封装，使用方式也非常的优雅。
      另外，axios同样提供了在node环境下的支持，可谓是网络请求的首选方案。

    3.未来必定还会出现更优秀的封装，他们有非常周全的考虑以及详细的文档，这里我们不多做深究
      我们把关注的重点放在更底层的API fetch

    4.Fetch API
      是一个用于访问和操纵HTTP管道的强大的原生API
      (这种功能以前是使用XMLHttpRequest实现的。Fetch提供了一个更好的替代方法，可以很容易地被其他技术使用，例如Service Workers
       Fetch还提供了单个逻辑位置来定义其他HTTP相关概念，例如CORS和HTTP的扩展。)

      可见fetch是作为XMLHttpRequest的替代品出现的

      使用fetch，你不需要再额外加载一个外部资源。但它还没有被浏览器完全支持，所以你仍然需要一个polyfill
*/

//一个基本的fetch请求
const options = {
  method:'POST',    //请求参数
  headers:{"Content-Type":"application/json"},    //设置请求头
  body: JSON.stringify({name:'123'}),   //请求参数
  credentials:"same-origin",    //cookie设置  意思时：当同源（即未跨域）的时候设置cookie（即缓存）
  mode:"cors",      //跨域  意思是：当下的模式是跨域
};
fetch('http://www.xxx.com',options)
  .then(function(response){
    return response.json();     //json()函数是？
  })
  .then(function(myJson){
    console.log(myJson);        //响应数据
  })
  .catch(function(err){
    console.log(err);           //异常处理
  })

/*
  fetch()方法：用于发起获取资源的请求，它返回一个promise，这个promise会在请求响应后被resolve,并传回Response对象

  辅助构造函数有以下三个：
  1.Headers: 可以通过Headers()构造函数来创建一个你自己的headers对象，相当于response/request的头信息，
              可以使你查询到这些头信息，或者针对不同的结果做不同的操作
              var myHeaders = new Headers();
              myHeaders.append("Content-type","text/plain");

  2.Request: 通过Request()构造函数可以创建一个Request对象，这个对象可以作为fetch函数的第二个参数
  3.Response: 在fetch()处理完promise之后返回一个Response实例，也可以手动创建一个Response实例
*/
