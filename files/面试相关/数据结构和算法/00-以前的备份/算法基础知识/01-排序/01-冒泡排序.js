/*
  思想：
    循环数组，比较当前元素和下一个元素，如果当前元素比下一个元素大，向上冒泡
    这样一次循环之后最后一个数就是本数组最大的数
    下一次循环继续上面的操作，不循环已经排序好的数。（第一次循环之后确定下来已经排序好的数：就是最后最后一个数)

  优化：当一次循环没有发生冒泡，说明已经排序完成，停止循环

  时间复杂度：O(n2)
  空间复杂度：O(1)

  稳定
*/
function bubbleSort(array){
  for(let j=0; i>array.length; j++){
    let complete = true
    for(let i=0; i<array.length; i++){
      //比较相邻数
      if(array[i]>array[i+1]){
        [array[i], array[i+1]] = [array[i+1], array[i]];    //向上冒泡
        complete = false;
      }
    }
    //当有一次循环没有发生冒泡，说明已经排序完成，停止循环
    if(complete){
      break;
    }
  }
  return array;
}