/*
https://juejin.im/book/6844733800300150797/section/6844733800367439885

冒泡排序：
从第一个元素开始，重复比较相邻的两个项，若第一项比第二项更大，则交换两者的位置，反之不动
每一轮操作，都会将这一轮中最大的元素放到数组的末尾。假如数组的长度是n，那么当我们重复完n轮的时候，整个数组就有序了。


时间复杂度：
最好时间复杂度：12的为O(n^2)，3的为O(n)
最坏时间复杂度：三种都为O(n^2)
平均时间复杂度：三个都为为O(n^2)

注意：
重点掌握第三种解法，是标准的冒泡排序！
*/
function bubbleSort(arr) {
  var len = arr.length;
  //外层循环，进行n轮操作
  for (var i = 0; i < len; i++) {
    var flag = false;
    //内层循环，进行一轮操作，操作完毕会将本轮中最大的元素放到数组的末尾
    for (var j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }
    //表示数组就是有序的，不用再进行后面轮次的操作了
    if (!flag) {
      return arr;
    }
  }
  return arr;
}
console.log(bubbleSort([5, 3, 2, 4, 1]));

// function bubbleSort(arr) {
//   var len = arr.length;
//   for (var i = 0; i < len; i++) {
//     var flag = false;
//     for (var j = 0; j < len - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         flag = true;
//       }
//     }
//     if (flag === false) {
//       return arr;
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort([5, 3, 2, 4, 1]));

//1.我的冒泡排序实现（基础，和文中一样）
// function bubbleSort(arr) {
//   var len = arr.length;
//   //外层循环用于控制需要循环多少轮（没经过一轮就会让一个元素冒泡到其应该到达的位置）
//   for (var i = 0; i < len; i++) {
//     //内层循环用于完成每一轮遍历过程中的重复比较+交换
//     for (var j = 0; j < len - 1; j++) {
//       var cur = arr[j];
//       var next = arr[j + 1];
//       if (cur > next) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }
// bubbleSort([5, 3, 2, 4, 1]);

//2.改进（因为每经过一轮就会让一个元素冒泡到其应该到达的位置，故下一次就无需再管这个元素了
// for(var j=0; i<len-1-i; j++){...}

//3.改进（即可能在某一轮循环之后，就已经按序排列了，那么我们就不应该继续之后轮次的循环了）
function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    //区别在这里，我们加了一个标志位
    let flag = false;
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        //只要在本轮循环中发生了一次交换，就修改标志位
        flag = true;
      }
    }
    //若一次交换也没发生，则说明数组有序，不再继续之后的轮次
    if (flag === false) {
      return arr;
    }
  }
  return arr;
}
bubbleSort([5, 3, 2, 4, 1]);
