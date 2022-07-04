/*
  将左侧序列（最开始：所谓的左侧序列即数组第一个元素）看成一个有序序列，每次将一个数字插入该有序序列
  插入时，从有序序列最右侧开始比较，若比较的数较大，后移一位

  时间复杂度：O(n2)
  空间复杂度：O(1)

  稳定
*/
function insertSort(array){
  for(let i=1; i<array.length; i++){
    let target = i;     //首先将数组第一个元素视作左侧序列
    for(let j=i-1; j>=0; j--){    //从有序序列最右侧开始比较
      if(array[target]<array[j]){   //注意：target为将要待插入的值，j索引之前的所有元素即 有序的左侧序列
        [array[target], array[j]] = [array[j], array[target]];
        target = j;
      }else{
        break;      //是什么意思？这就结束循环啦？
      }
    }
  }
  return array;
}