/*
题目2：（和为S的两个数字，注意和两数之和区分开！）
  输入一个递增排序的数组和一个数字s，在数组中查找两个数，使它们的和正好是s，如果有多对数字的和等于s，输出两个数的乘积最小的
思路：
  注意：数组中可能有多对符合条件的结果，而且要求输出乘积最小的，说明要分布在两侧，比如：3,8和5,7要取3,8
  设定一个小索引left,从0开始
  设定一个大索引right，从array.length-1开始
  判断array[left]+array[right]的和sum是否符合条件
  符合条件就返回
  sum大于s，right向左移动
  sum小于s，left向右移动
  若left=right，则没有符合条件的结果
*/
// function FindNumbersWithSum(array, s){
//
// }
// let array = [0,1,2,3,4,6,8,10,11];
// console.log(FindNumbersWithSum(array, 12));    //[1,11]

function FindNumbersWithSum(array, s) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    var sum = array[left] + array[right];
    if (sum === s) {
      return [array[left], array[right]];
    } else if (sum > s) {
      right--;
    } else {
      left++;
    }
  }
  return [];
}
let array = [0, 1, 2, 3, 4, 6, 8, 10, 11];
console.log(FindNumbersWithSum(array, 12)); //[1,11]

function FindNumbersWithSum(array, s) {
  var left = 0;
  var right = array.length - 1;
  while (left < right) {
    var sum = array[left] + array[right];
    if (sum === s) {
      return [array[left], array[right]];
    }
    if (sum < s) {
      left++;
    }
    if (sum > s) {
      right--;
    }
  }
  return [];
}
let array = [0, 1, 2, 3, 4, 6, 8, 10, 11];
console.log(FindNumbersWithSum(array, 12));

// function FindNumbersWithSum(array, s){
//   var left = 0;
//   var right = array.length-1;
//   while(left<right){
//     var sum = array[left]+array[right];
//     if(sum===s){
//       return [array[left], array[right]];
//     }
//     if(sum<s){
//       left++
//     }
//     if(sum>s){
//       right--
//     }
//   }
//   return [];
// }
// let array = [0,1,2,3,4,6,8,10,11];
// console.log(FindNumbersWithSum(array, 12));

// function FindNumbersWithSum(array, s){
//   if(array && array.length>0){
//     let left = 0;
//     let right = array.length-1;
//     while(left<right){
//       let sum = array[left] + array[right];
//       if(sum>s){
//         right--;
//       }else if(sum<s){
//         left++;
//       }else{
//         return [array[left], array[right]];
//       }
//     }
//     return []
//   }
// }
// let array = [0,1,2,3,4,6,8,10,11];
// FindNumbersWithSum(array, 12);
