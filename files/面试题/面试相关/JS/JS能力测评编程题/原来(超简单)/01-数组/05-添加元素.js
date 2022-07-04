/*
题目：
  在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组
示例：
  输入[1, 2, 3, 4],  10 ；输出[1, 2, 3, 4, 10]
*/

//我的写法（已过）
function append(arr, item) {
  //向末尾添加元素
  var result = [...arr, item];
  //向头部添加元素
  // var result = [item, ...arr];
  return result;
}