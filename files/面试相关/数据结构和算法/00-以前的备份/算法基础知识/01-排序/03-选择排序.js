/*
  每次循环选取一个最小的数字放在前面的有序序列中

  时间复杂度：O(n2)
  空间复杂度：O(1)

  不稳定
*/
function selectionSort(array){
  for(let i=0; i<array.length-1; i++){
    let minIndex = i;
    for(let j=i+1; j<array.length; j++){
      if(array[j]<array[minIndex]){
        minIndex = j;
      }
    }
    [array[minIndex], array[i]] = [array[i], array[minIndex]];
  }
}