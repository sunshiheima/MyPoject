/*
题目：
  删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组
示例：
  输入[1, 2, 3, 4] ； 输出[1, 2, 3]
*/

//我的写法（已过）
function truncate(arr) {
  //删除数组当中的最后一个元素
  return arr.slice(0, arr[arr.length-2]);
  //删除数组当中的第一个元素
  // return arr.slice(1);
}