/*
  输入一个递增排序的数组和一个数字s,在数组中查找两个数，使得它们的和正好是s,如果有多对数字的和等于s，输出两个数的乘积最小的
  思路：
    此题很像"两数之和"，但是题目中有一个明显不同的条件就是数组是有序的，可以使用大小指针求解，不断比较结果，最后取得最终值

    设定一个小索引left，从0开始
    设定一个大索引right，从array.length开始
    判断arr[left]+array[right]的值s是否符合条件
    符合条件，则返回
    大于sum, right向左移动
    小于sum, left向右移动
    若left=right，则表示没有符合条件的结果
*/
function FndNumberWithSum(array, sum){
  if(array && array.length > 0){  //如果第一个参数存在并且数组不为空
    let left = 0;
    let right = array.length -1;
    while(left < right){    //如果left大于等于right了的话，就结束循环
      const s = array[left] + array[right];
      if(s > sum){
        right--;
      }else if(s < sum){
        left++;
      }else{
        return [array[left], array[right]];
      }
    }
  }
  //如果检测参数有问题，或者当left>=right时仍然没有符合条件的（两数相加等于sum），那么就返回空数组
  return [];
}
