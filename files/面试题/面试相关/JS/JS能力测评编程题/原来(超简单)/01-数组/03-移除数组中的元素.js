/*
题目：
  移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
示例：
  输入[1, 2, 3, 4, 2], 2 ； 输出[1, 3, 4]
*/

//我的写法一（已过）
function remove(arr, item) {
  return arr.filter((value, index, arr) => {
    return value !== item
  })
}

//我的写法二（已过）
function remove(arr, item) {
  var result = [];
  for(var i=0; i<arr.length; i++){
    if(arr[i] !== item){
      result.push(arr[i]);
    }
  }
  return result;
}