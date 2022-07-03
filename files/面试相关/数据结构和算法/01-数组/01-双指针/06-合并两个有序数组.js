/*
题目：给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
说明：初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
示例：
    输入nums1 = [1,2,3,0,0,0], m = 3，nums2 = [2,5,6], n = 3
    输出输出: [1,2,2,3,5,6]
思路：
    定义两个指针，各指向两个数组生效部分的尾部
    每次只对指针所指的元素进行比较。取较大的元素，把它从nums1的末尾往前面填补
注意：（由于nums1的有效部分和nums2不一定是一样长的，我们还需要考虑其中一个提前到头这种情况）
    1.如果提前遍历完的是nums1的有效部分，剩下的是nums2。那么这时意味着nums1的头部空出来了，直接把nums2整个补到nums1前面去即可
    2.如果提前遍历完的是nums2，剩下的是nums1。由于容器本身就是nums1,所以此时不必做任何额外的操作
*/

// var merge = function (nums, m, nums, n) {

// };
// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

var merge = function (nums1, m, nums2, n) {
  var i = m - 1;
  var j = n - 1;
  var k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
      k--;
    } else {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }
  //当nums2剩下的情况
  while (j > 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
  return nums1;
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

//我自己的实现（只有核心功能代码，因为边界情况不会处理，所以未能写出完整的代码）
// let one = m - 1;
// let two = n - 1;
// while (one >= -1 || two >= -1) {
//   while (nums2[two] > nums1[one]) {
//     nums1[one + two + 1] = nums2[two];
//     two--;
//   }
//   while (nums1[one] > nums2[two]) {
//     nums1[one + two + 1] = nums1[one];
//     one--;
//   }
// }

//文中的完整实现
// const merge = function (nums1, m, nums2, n) {
//   //初始化两个指针的指向，初始化nums1尾部索引k
//   let i = m - 1,
//     j = n - 1,
//     k = m + n - 1; //k也可以等于i+j+1 (错！)
//   //当两个数组都没遍历完时，指针移动（每次只移动那个指向较大数的指针，注意不是文中所谓的“同步”！）
//   while (i >= 0 && j >= 0) {
//     //取较大的值，从末尾往前填补
//     if (nums1[i] >= nums2[j]) {
//       nums1[k] = nums1[i];
//       i--;
//       k--;
//     } else {
//       nums1[k] = nums2[j];
//       j--;
//       k--;
//     }
//   }
//   //nums2留下的情况，特殊情况处理一下
//   while (j >= 0) {
//     nums1[k] = nums2[j];
//     j--;
//     k--;
//   }
//   return nums1;
// };
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

//注意：把k换成i+j+1的话，会报错："Unexpected token while"，原因不知！
// const merge = function (nums1, m, nums2, n) {
//     //初始化两个指针的指向，初始化nums1尾部索引k
//     let i = m - 1,
//       j = n - 1,
//     //   k = m + n - 1; //k也可以等于i+k+1
//     //当两个数组都没遍历完时，指针移动（每次只移动那个指向较大数的指针，注意不是文中所谓的“同步”！）
//     while(i >= 0 && j >= 0) {
//       //取较大的值，从末尾往前填补
//       if (nums1[i] >= nums2[j]) {
//         nums1[i+j+1] = nums1[i];
//         i--;
//       } else {
//         nums1[i+j+1] = nums2[j];
//         j--;
//       }
//     }
//     //nums2留下的情况，特殊情况处理一下
//     while (j >= 0) {
//       nums1[i+j+1] = nums2[j];
//       j--;
//     }
//     return nums1;
//   };
//   merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
