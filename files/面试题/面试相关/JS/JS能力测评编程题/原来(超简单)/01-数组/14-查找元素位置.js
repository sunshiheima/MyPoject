/*
题目：
  在数组 arr 中，查找值与 item 相等的元素出现的所有位置
示例：
  输入['a','b','c','d','e','f','a','b','c'] 'a' ； 输出[0, 6]
*/

//我的写法（已过）
function findAllOccurrences(arr, target) {
  var result = [];
  for(var i=0; i<arr.length; i++){
    if(arr[i] === target){
      result.push(i);
    }
  }
  return result;
}