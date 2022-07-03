/*
题目1：（两数之和）
  给定一个整数数组nums和一个目标值target，请你在该数组中找出和为目标值的那两个整数，并返回它们的数组下标
  注意：你可以假设每种输入只会对应一个答案，但是，你不能同时重复利用这个数组中同样的元素。
思路：
  使用一个对象map将数组中的数字存起来，将数组元素值作为key，将数组元素下标作为value。
  每一次遍历：
  1.去map中查找看是否存在一个key，为target-nums[i]
  2.如果取到了，则条件成立，返回；如果没有取到，将当前数组元素存入map当中
*/
// let twoSum = function(nums, target){
//
// }
// let nums = [3,7,2,8,4,9,10];
// console.log(twoSum(nums, 17));   //结果为[3,5]

let twoSum = function (nums, target) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined) {
      return [i, map[target - nums[i]]];
    } else {
      map[nums[i]] = i;
    }
  }
};
let nums = [3, 7, 2, 8, 4, 9, 10];
console.log(twoSum(nums, 17)); //结果为[3,5]

// let twoSum = function (nums, target) {
//   var map = {};
//   for (var i = 0; i < nums.length; i++) {
//     if (map[target - nums[i]] !== undefined) {
//       return [i, map[target - nums[i]]];
//     } else {
//       map[nums[i]] = i;
//     }
//   }
// };
// let nums = [3, 7, 2, 8, 4, 9, 10];
// console.log(twoSum(nums, 17)); //结果为[3,5]

// let twoSum = function (nums, target) {
//   let map = {};
//   for (var i = 0; i < nums.length; i++) {
//     console.log(map[target - nums[i]]);
//     if (map[target - nums[i]] !== undefined) {
//       //如果存在符合条件的就返回
//       return [i, map[target - nums[i]]];
//     } else {
//       //如果不存在就将当前值nums[i]作为key, 存储到map对象当中
//       map[nums[i]] = i; //将值作为key，数组下标作为value
//     }
//   }
// };
//let nums = [3,7,2,8,4,9,10];
//console.log(twoSum([2, 7, 11, 15], 9)); //结果为[3,5]

// let twoSum = function(nums, target){
//   const map = {};
//   if(Array.isArray(nums)){
//     for(let i=0; i<nums.length; i++){
//       //每次遍历去查找是否有key为target-nums[i]的项
//       if(map[target - nums[i]] != undefined) {
//         //如果取到了，则条件成立，返回
//         return [map[target - nums[i]], i];
//       }else{
//         //如果没有取到，将当前值作为key,下标作为值存入map
//         map[nums[i]] = i;
//       }
//     }
//   }
//   return [];
// }
// let nums = [3,7,2,8,4,9,10];
// twoSum(nums, 17);   //结果为[3,5]
