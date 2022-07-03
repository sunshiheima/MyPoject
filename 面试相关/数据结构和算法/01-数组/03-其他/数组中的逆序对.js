/*
题目：
    在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数P
方法一：
    使用暴力法，从第一个数开始，依次和后面每一个数字进行比较记录逆序对的个数，时间复杂度O(n2)
方法二：
    用到了归并排序相似的思想（但是又有区别！）
*/
//方法一
function InversePairs(data) {
  //用count来记录逆序对的个数
  var count = 0;
  for (var i = 0; i < data.length - 1; i++) {
    var base = data[i];
    for (var j = i + 1; j < data.length; j++) {
      if (data[i] > data[j]) {
        count++;
      }
    }
  }
  return count;
}

//方法二 --- 用到了归并排序的思想，暂略！不会！可能大概或许类似于下面这么写的？但是我感觉还是有问题的？？？处还未处理
function InversePairs(arr) {
  var len = arr.length;
  //分割
  var mid = Math.floor(len / 2);
  var leftArr = InversePairs(arr.slice(0, mid));
  var rightArr = InversePairs(arr.slice(mid, len));
  //合并
  var P = mergeArr(leftArr, rightArr);
  return P;
}
function mergeArr(arr1, arr2) {
  var len1 = arr1.length;
  var len2 = arr2.length;
  var i = 0,
    j = 0;
  var count = 0;
  while (i < len1 && j < len2) {
    if (arr1[i] > arr2[j]) {
      count++;
    }
  }
  //？？？
  return count;
}
