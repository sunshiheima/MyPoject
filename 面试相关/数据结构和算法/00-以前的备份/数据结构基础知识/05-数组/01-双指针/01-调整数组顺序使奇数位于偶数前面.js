/*前面链表中提到的一类题目，主要是利用两个或多个不同位置的指针。通过速度和方向的变换解决问题。注意这种技巧经常在排序数组中使用*/

/*
  输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分
  思路：
    设定两个指针
    第一个指针start从数组第一个元素出发，向尾部前进
    第二个指针end从数组的最后一个元素出发，向头部前进
    start遍历到偶数，end遍历到奇数时，交换两个数的位置
    当start>end时，完成交换
*/
function reOrderArray(array){
  if(Array.isArray(array)){   //检测传入的是否为一个数组
    let start = 0;    //start为一个指针，表示数字类型的索引，从数组的第一个元素开始
    let end = array.length - 1;   //end为另一个指针，也表示数字类型的索引，从数组的最后一个元素开始
    while(start<end){   //当start>end时，就结束循环
      while(array[start] % 2 === 1){  //当start指针遍历到奇数时
        start++;   //将指针向后移动
      }
      while(array[end] % 2 === 0){    //当end指针遍历到偶数时
        end--;  //将指针向前移动
      }
      //上面两种情况都不是的话，那就是start指针遍历到了偶数并且end指针遍历到了奇数
      if(start < end){  //先判断此时start是否还小于end。
        [array[start], array[end]] = [array[end], array[start]]   //如果是的话，则将start和end两个指针的数字值交换
      }
    }
  }
  return array;
}
