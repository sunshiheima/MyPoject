/*
题目：
  函数 useArguments 可以接收 1 个及以上的参数。请实现函数 useArguments，返回所有调用参数相加后的结果。
  本题的测试参数全部为 Number 类型，不需考虑参数转换。
*/

//我的写法（已过）
function useArguments() {
  // console.log(arguments);
  var arr = Array.prototype.slice.call(arguments);
  return arr.reduce((prev, cur) => {
    return prev + cur;
  }, 0);
}
console.log(useArguments(1,2,3));