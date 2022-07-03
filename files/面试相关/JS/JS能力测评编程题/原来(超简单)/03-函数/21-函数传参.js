/*
题目：将数组 arr 中的元素作为调用函数 fn 的参数
示例：
1.输入
  function (greeting, name, punctuation) {
    return greeting + ', ' + name + (punctuation || '!');
  },
  ['Hello', 'Ellie', '!']

2.输出
  Hello, Ellie!
*/

//我的写法（已过）
function argsAsArray(fn, arr) {
  return fn(...arr);
  //下面的也可以！
  // return fn.apply(null, arr);
}

/*
题目：
  将函数fn的执行上下文(即this)改为obj对象
*/
function speak(fn, obj){
  return fn.call(obj);
  //return fn.apply(obj);
}