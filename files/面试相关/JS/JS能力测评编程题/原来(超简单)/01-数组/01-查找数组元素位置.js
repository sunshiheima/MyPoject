/*
题目：找出元素item在给定数组中arr中的位置
输出描述：如果数组中存在item，则返回元素在数组中的位置，否则返回-1
示例：输入[1,2,3,4], 3 ；输出2
*/

//我的写法（已通过！）
function indexOf(arr, item) {
  for(var i=0; i<arr.length; i++){
    if(arr[i] === item) return i;
  }
  return -1;
}