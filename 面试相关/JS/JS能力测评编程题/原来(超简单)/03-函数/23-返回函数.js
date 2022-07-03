/*
题目：
  实现函数 functionFunction，调用之后满足如下条件：
  1、返回值为一个函数 f
  2、调用返回的函数 f，返回值为按照调用顺序的参数拼接，拼接字符为英文逗号加一个空格，即 ', '
  3、所有函数的参数数量为 1，且均为 String 类型
示例：
  输入functionFunction('Hello')('world')
  输出Hello, world
*/

//我的写法(已过)
function functionFunction(str) {
  return function(str2){
    return str+', '+str2;
  }
}