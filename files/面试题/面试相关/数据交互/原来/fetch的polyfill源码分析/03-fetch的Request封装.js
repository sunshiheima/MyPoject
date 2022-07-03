/*
  Request对象接收两个参数即fetch函数接收的两个参数。
    第一个参数可以直接传递url,也可以传递一个构造好的request对象。
    第二个参数即控制不同配置的options对象

  可以传入credentials、headers、method、mode、signal、referrer等属性

  注意：传入的headers被当作Headers构造函数的参数来构造headers对象
*/

export function Request(input, options){
  options = options || {}
  var body = options.body

  if(input instanceof Request){
    this.url = input.url;
    this.method = input.method;
    //...
  }else{
    this.url = String(input)
  }
  this.credentials = options.credentials || this.credentials || 'same-origin'
  if(options.headers || !this.headers){
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || this.signal
  this.signal = options.signal || this.signal
  this.referrer = null
  //...
  this._initBody(body)
}