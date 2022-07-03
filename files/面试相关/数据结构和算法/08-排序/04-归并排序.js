/*
归并排序是【分治思想】的典型应用，思路是：
    1.分解子问题
      将需要被排序的数组从中间分割为两半，然后再将分割出来的每个子数组各自分割为两半，重复以上操作，直到单个子数组只有一个元素为止。
    2.求解每个子问题
      从粒度最小的子数组开始，两两合并、确保每次合并出来的数组都是有序的。（这里的“子问题”指的就是对每两个子数组进行排序）
    3.合并子问题的解，得出大问题的解
      当数组被合并至原有的规模时，就得到了一个完全排序的数组。

归并排序的两个
主要动作：
    分割 —— 将大数组反复分解为一个一个的原子项（重复的）—— 【递归或迭代】
    合并 —— 将原子项反复的组装回原有的大数组（有去有回）—— 【回溯】

归并排序的基础：
    递归、回溯、两个有序数组的合并（第7节）

归并排序的时间复杂度为O(nlogn)，分析：
    1.我们把切分+归并看作是一轮。对于规模为n的数组来说，n*(0.5^切分次数)=1，所以切分次数为log(n)次，因此就有log(n)轮
    2.每一轮中的切分动作和归并动作(O(1)和O(n)，取O(n))
      //单次切分动作如下，可见是常数级别的，时间复杂度为O(1)
      const mid = Math.fllor(len/2);
      const leftArr = mergeSort(arr.slice(0, mid));
      const rightArr = mergeSort(arr.slice(mid, len));
      //单次合并，即mergeArr函数，可见是将两个数组遍历了一遍，故时间复杂度为O(n)
    3.最终时间复杂度就是，轮次*每一轮的时间复杂度 = O(nlogn)
*/

function mergeSort(arr) {
  var len = arr.length;
  //递归出口
  if (len <= 1) {
    return arr;
  }
  //简单二分
  var mid = Math.floor(len / 2);
  var leftArr = mergeSort(arr.slice(0, mid));
  var rightArr = mergeSort(arr.slice(mid, len));
  //复杂合并
  var resultArr = mergeArr(leftArr, rightArr);
  return resultArr;
}
function mergeArr(arr1, arr2) {
  var len1 = arr2.length;
  var len2 = arr2.length;
  var i = 0,
    j = 0;
  var res = [];
  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  if (i < len1) {
    return res.concat(arr1.slice(i));
  } else {
    return res.concat(arr2.slice(j));
  }
}
console.log(mergeSort([5, 3, 2, 4, 1]));

// function mergeSort(arr) {
//   var len = arr.length;
//   if (len <= 1) {
//     return arr;
//   }
//   //分割
//   var mid = Math.floor(len / 2);
//   var leftArr = mergeSort(arr.slice(0, mid));
//   var rightArr = mergeSort(arr.slice(mid, len));
//   //合并
//   var resultArr = mergeArr(leftArr, rightArr);
//   return resultArr;
// }
// function mergeArr(arr1, arr2) {
//   var len1 = arr1.length;
//   var len2 = arr2.length;
//   var i = 0,
//     j = 0;
//   var res = [];
//   while (i < len1 && j < len2) {
//     if (arr1[i] < arr2[j]) {
//       res.push(arr1[i]);
//       i++;
//     } else {
//       res.push(arr2[j]);
//       j++;
//     }
//   }
//   if (i < len1) {
//     return res.concat(arr1.slice(i));
//   } else {
//     return res.concat(arr2.slice(j));
//   }
// }
// console.log(mergeSort([5, 3, 2, 4, 1]));

//归并排序
// function mergeSort(arr) {
//   const len = arr.length;
//   if (len <= 1) {
//     return arr;
//   }

//   //计算分割点
//   const mid = Math.floor(len / 2);
//   //递归分割左子数组
//   const leftArr = mergeSort(arr.slice(0, mid));
//   //递归分割右子数组
//   const rightArr = mergeSort(arr.slice(mid, len));

//   //合并左右两个有序数组
//   arr = mergeArr(leftArr, rightArr);

//   //返回合并之后的数组
//   return arr;
// }

// function mergeArr(arr1, arr2) {
//   const res = [];
//   const len1 = arr1.length;
//   const len2 = arr2.length;
//   //初始化两个指针，分别指向arr1和arr2的第一个元素
//   let i = 0,
//     j = 0;
//   //合并两个子数组
//   while (i < len1 && j < len2) {
//     if (arr1[i] < arr2[j]) {
//       res.push(arr1[i]);
//       i++;
//     } else {
//       res.push(arr2[j]);
//       j++;
//     }
//   }
//   //若其中一个子数组首先被合并完全，则直接凭借另一个子树的剩余部分
//   //程序执行到这儿，表明其中一个没有执行完全，而另一个执行完全了。
//   if (i < len1) {
//     //len1未遍历完，len2遍历完了
//     return res.concat(arr1.slice(i));
//   } else {
//     //j<len2的情况，即len2未遍历完，len1遍历完了
//     return res.concat(arr2.slice(j));
//   }
// }
// console.log(mergeSort([5, 3, 2, 4, 1]));
