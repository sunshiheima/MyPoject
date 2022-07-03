/*
题目：
  在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组
示例：
  输入[1, 2, 3, 4], 'z', 2 ； 输出[1, 2, 'z', 3, 4]
*/

//我的写法（已过）
function insert(arr, item, index) {
  var result = [...arr];
  result.splice(index, 0, item);
  return result;
}