/*
https://juejin.im/book/6844733800300150797/section/6844733800367439885

选择排序：
选择排序的关键字是“最小值”：循环遍历数组，每次都找出当前范围内的最小值，把它放在当前范围的头部；然后缩小排序范围，继续重复以上操作，直至数组完全有序为止

时间复杂度：
最好、最坏、平均时间复杂度都为O(n^2)

下面文中的实现和我的实现差不多，但文中的实现更规范，着重掌握文中的实现！
*/
function selectSort(arr) {
  var len = arr.length;
  //n轮操作
  for (var i = 0; i < len - 1; i++) {
    //确定排序范围，最开始是0~n-1，找出最小值
    var min = i;
    for (var j = i; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}
console.log(selectSort([5, 4, 3, 2, 1]));

// function selectSort(arr) {
//   var len = arr.length;
//   for (var i = 0; i < len - 1; i++) {
//     var minIndex = i;
//     for (var j = i; j < len; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//   }
//   return arr;
// }
// console.log(selectSort([5, 4, 3, 2, 1]));

//文中的实现
// function selectSort(arr) {
//   const len = arr.length;
//   for (var i = 0; i < len - 1; i++) {
//     let minIndex = i; //最初我们将arr[i]（即范围当中的第一个数）定位最小值
//     for (let j = i; j < len; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//   }
//   return arr;
// }
// selectSort([5, 4, 3, 2, 1]);

//我的实现
// function selectSort(arr) {
//   const len = arr.length;
//   for (var i = 0; i < len - 1; i++) {
//     let from = i;
//     let to = len;
//     let minIndex = i; //最初我们将arr[i]（即范围当中的第一个数）定位最小值
//     for (let j = from; j < to; j++) {
//       if (arr[j] < arr[i]) {
//         //此处有问题，应该为arr[j]<arr[minIndex]，但是不改运行结果却是正确的，这就很迷惑了。。。
//         minIndex = j;
//       }
//     }
//     [arr[from], arr[minIndex]] = [arr[minIndex], arr[from]];
//   }
//   return arr;
// }
// selectSort([5, 4, 3, 2, 1]);
