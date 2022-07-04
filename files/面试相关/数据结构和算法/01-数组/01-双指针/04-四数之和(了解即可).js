/*
题目4：(四数之和)
  给定一个包含n个整数的数组nums，判断nums中是否存在四个元素a,b,c,d，使得a+b+c+d=0?找出所有满足条件且不重复的四元组
  注意：答案中不可以包含重复的四元组
思路：
  像这种N数之和，是有规律的。我们可以像三数之和那样：
  我们可以通过大小指针来逼近结果，从而达到降低一层时间复杂度的效果。
  (不管是几数之和，我们都用这种方法来进行优化)
*/
// let fourSum = function(nums, target){

// }
// let nums = [4,-7,5,-2,7,-9,1,-6,3];
// console.log(fourSum(nums, -5));  //运行结果结果竟然有6组！！！

let fourSum = function (nums, target) {
  if (nums.length < 4) {
    return [];
  }
  let result = [];
  //排序
  nums.sort((a, b) => a - b);
  //去重
  var newNums = Array.from(new Set(nums));
  //遍历数组
  var length = newNums.length;
  for (var i = 0; i < length - 3; i++) {
    var base1 = newNums[i];
    for (var j = i + 1; j < length - 2; j++) {
      var base2 = newNums[j];
      var left = j + 1;
      var right = length - 1;
      while (left < right) {
        var sum = base1 + base2 + newNums[left] + newNums[right];
        if (sum === target) {
          result.push([base1, base2, newNums[left], newNums[right]]);
          left++;
          right--;
        }
        if (sum < target) {
          left++;
        }
        if (sum > target) {
          right--;
        }
      }
    }
  }
  return result;
};
let nums = [4, -7, 5, -2, 7, -9, 1, -6, 3];
console.log(fourSum(nums, -5)); //运行结果结果竟然有6组！！！

// let fourSum = function (nums, target) {
//   //终1
//   if (nums.length < 4) {
//     return [];
//   }
//   const result = [];
//   //将数组排序（升序）
//   nums.sort((a, b) => a - b);
//   //将原数组中的数字依次作为第一个基准数
//   for (let i = 0; i < nums.length - 3; i++) {
//     //选第一个基准数字的时候：跳过重复数字
//     if (i > 0 && nums[i] === nums[i - 1]) {
//       continue;
//     }
//     //终2：当连续的四个数已经大于target时，表示后面不可能再有符合条件的四元组了，则终止循环break;
//     if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
//       break;
//     }
//     //取基准数的下一个于之不同的数作为第二个基准数
//     for (let j = i + 1; j < nums.length - 2; j++) {
//       //选第二个基准数字的时候：跳过重复数字
//       if (j > i + 1 && nums[j] === nums[j - 1]) {
//         continue;
//       }
//       //第二个基准数之后的就是寻找数组
//       //确定寻找数组的起点和终点
//       let left = j + 1;
//       let right = nums.length - 1;
//       while (left < right) {
//         sum = nums[i] + nums[j] + nums[left] + nums[right];
//         if (sum === target) {
//           result.push([nums[i], nums[j], nums[left], nums[right]]);
//         }
//         if (sum <= target) {
//           while (nums[left] === nums[++left]);
//         } else {
//           while (nums[right] === nums[--right]);
//         }
//       }
//     }
//   }
//   return result;
// };
// let nums = [4, -7, 5, -2, 7, -9, 1, -6, 3];
// console.log(fourSum(nums, -5)); //运行结果结果竟然有6组！！！
