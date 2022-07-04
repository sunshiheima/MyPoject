/*
题目：
  实现函数 callIt，调用之后满足如下条件
  1、返回的结果为调用 fn 之后的结果
  2、fn 的调用参数为 callIt 的第一个参数之后的全部参数
*/


function callIt(fn) {
  var param = Array.prototype.slice.call(arguments, 1);
  return fn(...param);
}
//测试
// var rel = callIt(function(x,y,z){
//   return x+y+z;
// }, 1, 2, 3)
//
// console.log(rel);   //6

