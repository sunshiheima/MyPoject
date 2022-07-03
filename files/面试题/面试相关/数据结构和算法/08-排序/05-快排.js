/*
1.快速排序和归并排序的联系和区别：
  用的都是分治(二分+合并)的思想 ——  使用了"递归"
  递归：入栈(递)时【二分】 && 出栈(归)时【合并】
  -归并排序：
      入栈(递)时简单-简单二分，即将数组排序划分为一左一右的两个子数组(partition方法)。重复操作(递归入栈)，直到子数组中只含有一个元素为止，就开始出栈；
      出栈(归)时复杂-复杂合并，合并子数组的同时进行排序(mergeArr方法)得到resultArr。重复操作(递归出栈)。最终return resultArr。
      //构建了一个新数组resultArr
  -快速排序：
      入栈时复杂-复杂二分，即将数组排序划分为一小一大的两个子数组(partition方法)。重复操作(递归入栈)，直到子数组中只含有一个元素为止(其实此时已经得到了完全排序的数组了)，就开始出栈；
      出栈时简单-简单合并，只是将入栈的函数都自然出栈得到arr。重复操作(递归出栈)。最终return arr  
      //在原数组arr上面直接进行排序
 
2.快速排序的partition思路：
    取一个基准值：当前数组最中间的那个元素
    两个指针：一个指针从数组的第一个元素开始，一个指针从数组的最后一个元素开始
    ---
    对比左指针元素和基准值：若左指针小于基准值（符合要求），则将左指针向右移动一位，直到找到一个不小于基准值的值为止                         
    对比右指针元素和基准值：若右指针大于基准值（符合要求），则将右指针向左移动一位，直到找到一个不大于基准值的值为止                       
    ---
    这样双指针完全遍历一次数组之后，就能够以左指针(或基准值?)为轴心，划分出一左一右、一小一大的两个子数组了！！！
    //注意：此处划分得到的一小一大的分界值lineIndex(即partition返回的i)，并不意味着分界值右边的元素都比分界值小，仅仅意味着【0~lineIndex-1中的任意元素】<【lineIndex~len-1中的任意元素】
    //例如[4, 2, 1, 8, 0, 13, 5, 6]经过一次partition()的处理：arr会变成[4, 2, 1, 6, 0, 5, 13, 8]，得到的lineIndex为6（即13所在的位置），可以看到[4, 2, 1, 6, 0, 5]<[13, 8]。而8并不小于13。

//针对两个子数组，重复执行以上操作，直到数组完全排序为止！！！

3.快排的时间复杂度分析：(?)
    最好为O(nlogn)：即我们每次取到的基准值，都刚好是当前子数组的中间数。和归并排序相似。
    最坏为O(n^2)：即每次取到的基准值，都是当前数组中的最大值/最小值。就退化为了冒泡排序。
    平均为O(nlogn)

4.注意：为什么quickSort当中的形参arr，作为参数传入partition方法，在该方法内部修改arr之后，不用partition方法"return arr;"就能将改变之后的arr直接体现在partition方法外部
  简化：为什么全局变量arr，作为参数传入fn方法，在该方法内部修改arr之后，不用"return arr;"就能将改变之后的arr直接体现在fn方法外部（即全局中）
  var arr = [1,2,3];
  function fn(arr){
    arr.push(4);
  }
  fn(arr);
  console.log(arr);   //[1,2,3,4]

  -形参arr，相当于quickSort函数中定义的一个内部变量，var arr = [xxx]
   所以将arr传入其他函数并在其他函数中被改变了，那么无需返回该arr，也能够反映到arr身上
   所以将arr传入partition()中后，在partition当中被改变了，即使partition并未返回arr，该arr的改变也是直接反映到了上面声明的变量arr身上
  -根本原因是：参数是按值传递的，当参数是引用数据类型(数组)时，指向的是原来的那个引用，故partition函数内部对arr改变，能够反映到函数外部的arr变量上
   但是如果在partition函数内部重复声明一个arr，应该就会覆盖那个引用了吧？
  
5.注意：意想不到的地方
  并且是if(left<lineIndex-1){quickSort(arr, left, lineIndex-1)}，注意两个"lineIndex-1"，而非"lineIndex"，否则也会导致栈溢出！
  partition方法当中，while(i<=j)的"="很重要！，if(i<=j){...}的"="也很重要，不写等号就会栈溢出！原因不知！
*/

//快速排序
function quickSort(arr, left = 0, right = arr.length - 1) {
  var len = arr.length;
  //递归出口
  if (len <= 1) {
    return arr;
  }
  //复杂二分
  var lineIndex = partition(arr, left, right);
  if (left < lineIndex - 1) {
    quickSort(arr, left, lineIndex - 1);
  }
  if (lineIndex < right) {
    quickSort(arr, lineIndex, right);
  }
  //简单合并
  return arr;
}
function partition(arr, left, right) {
  //取基准数：left~right的中间索引
  var base = Math.floor(left + (right - left) / 2);
  //双指针：一个从当前范围头部开始，一个从当前范围尾部开始    //当前范围指的是left~right
  var i = left,
    j = right;
  while (i <= j) {
    while (arr[i] < arr[base]) {
      i++;
    }
    while (arr[j] > arr[base]) {
      j--;
    }
    //到此，在base左边找到了一个不小于基准值的元素，在base右边找到了一个不大于基准值的元素
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  //console.log("base, i, arr", base, i, arr);
  //返回分界值（一小一大两边的分界）
  return i;
}
console.log(quickSort([4, 2, 1, 8, 0, 13, 5, 6]));

// quickSort的另一种写法
// function quickSort(arr, left = 0, right = arr.length - 1) {
//   if (arr.length > 1) {
//     var lineIndex = partition(arr, left, right);
//     if (left < lineIndex - 1) {
//       quickSort(arr, left, lineIndex - 1);
//     }
//     if (lineIndex < right) {
//       quickSort(arr, lineIndex, right);
//     }
//   }
//   return arr;
// }

// -----------------------------------------------------------------笔记版本1，仅供参考---------------------------------------------------------------------------

// 快速排序入口
// function quickSort(arr, left = 0, right = arr.length - 1) {
//   // 定义递归边界，若数组只有一个元素，则没有排序必要
//   if (arr.length > 1) {
//     // lineIndex表示下一次划分左右子数组的索引位
//     const lineIndex = partition(arr, left, right);
//     // 如果左边子数组的长度不小于1，则递归快排这个子数组
//     if (left < lineIndex - 1) {
//       // 左子数组以 lineIndex-1 为右边界
//       quickSort(arr, left, lineIndex - 1);
//     }
//     // 如果右边子数组的长度不小于1，则递归快排这个子数组
//     if (lineIndex < right) {
//       // 右子数组以 lineIndex 为左边界
//       quickSort(arr, lineIndex, right);
//     }
//   }
//   return arr;
// }
// // 以基准值为轴心，划分左右子数组的过程
// function partition(arr, left, right) {
//   // 基准值默认取中间位置的元素
//   let pivotValue = arr[Math.floor(left + (right - left) / 2)];
//   // 初始化左右指针
//   let i = left;
//   let j = right;
//   // 当左右指针不越界时，循环执行以下逻辑
//   while (i <= j) {
//     // 左指针所指元素若小于基准值，则右移左指针
//     while (arr[i] < pivotValue) {
//       i++;
//     }
//     // 右指针所指元素大于基准值，则左移右指针
//     while (arr[j] > pivotValue) {
//       j--;
//     }

//     // 若i<=j，则意味着基准值左边存在较大元素或右边存在较小元素，交换两个元素确保左右两侧有序
//     if (i <= j) {
//       swap(arr, i, j);
//       i++;
//       j--;
//     }
//   }
//   // 返回左指针索引作为下一次划分左右子数组的依据
//   return i;
// }

// // 快速排序中使用 swap 的地方比较多，我们提取成一个独立的函数
// function swap(arr, i, j) {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
// }

// console.log(quickSort([5, 4, 3, 2, 1]));
