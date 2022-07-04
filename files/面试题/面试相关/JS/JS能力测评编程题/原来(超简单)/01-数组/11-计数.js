/*
题目：
  统计数组 arr 中值等于 item 的元素出现的次数
示例：
  输入[1, 2, 4, 4, 3, 4, 3], 4 ； 输出3
*/

//我的写法（已过）
function count(arr, item) {
  var count = 0;
  for(var i=0; i<arr.length; i++){
    if(arr[i] === item) count++;
  }
  return count;
}