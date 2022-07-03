/*
题目：计算给定数组 arr 中所有元素的总和
输入描述：数组中的元素均为 Number 类型
示例：输入[ 1, 2, 3, 4 ]；输出10
*/

//我的写法一（已过）
function sum(arr) {
  return arr.reduce((pre, cur, index, arr) => {
    return pre+cur;
  }, 0);
}

//我的写法二（已过）
function sum(arr) {
  var result = 0;
  for(var i=0; i<arr.length; i++){
    result += arr[i];
  }
  return result;
}

