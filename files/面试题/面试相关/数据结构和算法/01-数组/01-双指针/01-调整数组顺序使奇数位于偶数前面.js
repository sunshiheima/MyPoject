/*
双指针问题：
  主要是利用两个或多个不同位置的指针，通过速度和方向的变换解决问题
  注意这种技巧经常在排序数组中使用
*/

/*
题目1：（调整数组顺序使奇数位于偶数前面）
  输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分
思路：
  设定两个指针：
  第一个指针start从数组第一个元素出发，向尾部前进
  第二个指针end从数组的最后一个元素出发，向头部前进
  start遍历到偶数，end遍历到奇数时，交换两个数的位置
  当start>end时，完成交换
*/

// function reOrderArray(array){

// }

function reOrderArray(array) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    while (array[left] % 2 === 1) {
      left++;
    }
    while (array[right] % 2 === 0) {
      right--;
    }
    [array[left], array[right]] = [array[right], array[left]];
    left++;
    right--;
    console.log("left, right, array: ", left, right, array);
  }
  return array;
}

function reOrderArray(array) {
  var left = 0;
  var right = array.length - 1;
  while (left < right) {
    while (array[left] % 2 === 1) {
      left++;
    }
    while (array[right] % 2 === 0) {
      right--;
    }
    [array[left], array[right]] = [array[right], array[left]];
    left++;
    right--;
  }
  return array;
}

// function reOrderArray(array){
//   var start = 0;
//   var end = array.length-1;
//   while(start<end){
//     while(array[start]%2===1){
//       start++;
//     }
//     while(array[end]%2===0){
//       end--;
//     }
//     if(start<end){
//       [array[start], array[end]] = [array[end], array[start]];
//     }
//   }
//   return array;
// }
var array = [2, 4, 1, 6, 7, 8, 9, 2, 0, 1];
console.log(reOrderArray(array)); //这样结果就正常了！[1, 9, 1, 7, 6, 8, 4, 2, 0, 2]

// function reOrderArray(array){
//   if(Array.isArray(array)){
//     let start = 0;
//     let end = array.length -1;
//     while(start<end){
//       while(array[start]%2 === 1){
//         start++;
//       }
//       while(array[end]%2 === 0){
//         end--;
//       }
//       // [array[start], array[end]] = [array[end], array[start]]; //结果将是[1, 9, 1, 6, 7, 8, 4, 2, 0, 2]这个结果有问题！6竟然在7前面！
//       if(start<end){      //这个判断非常关键！！！害得我琢磨了好久！！！
//         [array[start], array[end]] = [array[end], array[start]];
//       }
//     }
//   }
//   return array;
// }
// let array = [2,4,1,6,7,8,9,2,0,1];
// reOrderArray(array);  //这样结果就正常了！[1, 9, 1, 7, 6, 8, 4, 2, 0, 2]
