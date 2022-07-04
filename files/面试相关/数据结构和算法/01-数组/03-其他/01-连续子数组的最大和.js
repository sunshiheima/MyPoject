/*
题目3：（连续子数组的最大和）
  输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。
  求所有子数组的和的最大值，要求时间复杂度为O(n)
  注意：结果max是数组中的某一个正数也行！！！
思路：
  记录一个当前连续子数组的最大值max，默认值为数组第一项
  记录一个当前连续子数组的累加值sum，默认值为数组第一项
  1.从数组第二个数开始，若sum<0则当前的sum不再对后面累加有贡献，sum=当前数
  2.若sum>0，则sum = sum + 当前数
  3.比较sum和max，max = 两者最大值
*/
// function FindGreatestSumOfSubArray(array){
//
// }
// let array = [-1,-2,5,-4];
// FindGreatestSumOfSubArray(array);

function FindGreatestSumOfSubArray(array) {
  var max = array[0];
  var sum = array[0];
  for (var i = 0; i < array.length; i++) {
    if (sum < 0) {
      sum = array[i];
    } else {
      sum = sum + array[i];
    }
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
let array = [-1, -2, 5, -4];
console.log(FindGreatestSumOfSubArray(array));

// function FindGreatestSumOfSubArray(array) {
//   //注意：只需要最大和的结果，无需知道是哪几个数构成了最大和，所以无需用child来记录子数组
//   var max = array[0];
//   var sum = array[0];
//   for (var i = 1; i < array.length; i++) {
//     if (sum < 0) {
//       sum = array[i];
//     } else {
//       sum = sum + array[i];
//     }
//     if (sum > max) {
//       max = sum;
//     }
//   }
//   return max;
// }
// let array = [-1, -2, 5, -4, 6];
// console.log(FindGreatestSumOfSubArray(array));

// function FindGreatestSumOfSubArray(array){
//   if(Array.isArray(array) && array.length > 0){
//     let sum = array[0];
//     let max = array[0];
//     for(let i=1; i<array.length; i++){
//       if(sum<0){         //先看之前的sum是否小于0，如果是，那么令sum等于当前数
//         sum = array[i];
//       }else{
//         sum = sum + array[i];
//       }
//       if(sum>max){
//         max = sum;
//       }
//     }
//     return max;
//   }
//   return 0;
// }
// let array = [-1,-2,5,-4];
// FindGreatestSumOfSubArray(array);

// function FindGreatestSumOfSubArray(array){
//   let sum = array[0];
//   let max = array[0];
//   for(let i=1; i<array.length; i++){
//     if(sum<0){    //注意：是先直接判断之前的sum，而不是先sum += array[i]之后再判断sum!
//       sum = array[i];
//     }else{
//       sum += array[i];
//     }
//     if(sum>max){
//       max = sum;
//     }
//   }
//   return max;
// }
// let array = [-1,-2,5,-4];
// FindGreatestSumOfSubArray(array);
