/*
https://juejin.im/book/6844733800300150797/section/6844733800367439885

插入排序：
核心思想是“找到元素在它前面那个序列中的正确位置”
即插入排序所有的操作都基于一个前提：当前元素前面的序列是有序的，基于这个前提，从后往前去寻找元素在前面那个序列里的正确位置。

首先，我们定位到数组的第二个元素，然后在该元素前面的序列中，从后往前找到其正确位置进行插入，这样前两个元素就是有序的了
然后，我们定位到数组的第三个元素，然后在该元素前面的序列中，从后往前找到其正确位置进行插入，这样前三个元素即使有序的了
依此类推

时间复杂度:
最好时间复杂度：它对应的是数组本身就有序这种情况。此时内层循环只走一次，整体复杂度却决于外层循环，时间复杂度就是一层循环对应的O(n)
最坏时间复杂度：它对应的是数组完全逆序这种情况。此时内层循环每次都要移动有序序列里的所有元素，因此时间复杂度对应的就是两层循环的O(n^2)
平均时间复杂度：O(n^2)
*/
// 1 4 j-15    ij2

function insert(arr) {
  var len = arr.length;
  //外层循环，定位到数组当中的某个元素
  for (var i = 1; i < len - 1; i++) {
    var cur = arr[i];
    //内层循环，找到当前元素在其前面那个序列中的正确位置(从后往前找)，并进行插入
    for (var j = i; j > 0; j--) {
      if (arr[j - 1] > cur) {
        arr[j] = arr[j - 1]; //这样arr[j]这个位置就被空出来了
      }
    }
    // var j = i;
    // while (j > 0 && arr[j - 1] > cur) {
    //   arr[j] = arr[j - 1];
    //   j--;
    // }
    arr[j] = cur;
  }
  return j;
}
console.log(insert([5, 4, 3, 2, 1]));

function insert(arr) {
  var len = arr.length;
  //确定待插入的元素
  for (var i = 1; i < len; i++) {
    var base = arr[i];
    //循环让位
    var j = i;
    while (j > 0 && arr[j - 1] > base) {
      arr[j] = arr[j - 1];
      j--;
    }
    //到此处，则j即为那个正确的位置，将base插入即可
    arr[j] = base;
  }
  return arr;
}
console.log(insert([5, 4, 3, 2, 1]));

//文中的实现（自己未实现出来）
// function insert(arr) {
//   const len = arr.length;
//   //i为每次待插入的元素的索引
//   for (let i = 1; i < len; i++) {
//     let base = arr[i];
//     //循环让位
//     let j = i;
//     while (j > 0 && arr[j - 1] > base) {
//       arr[j] = arr[j - 1];
//       j--;
//     }
//     //循环让位最后得到的j就是base的正确索引
//     arr[j] = base;
//   }
//   return arr;
// }
// insert([5, 4, 3, 2, 1]);
