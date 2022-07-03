//这种算法的思想精髓尚未理解透彻！！！
/*
  该算法是采用分治法(Divide and Conquer)的一个非常典型的应用。
  分治法：
    将问题分成一些小的问题然后递归求解，而治的阶段则将分的阶段得到的答案“修补”在一起，即分而治之
    1.先使每个子序列有序，再使子序列段间有序
    2.将已有序的子序列合并，得到完全有序的序列
    3.若将两个有序表合并成一个有序表，称为二路归并

  分割：
    1.将数组从中点进行分割，分为左、右两个数组
    2.递归分割左、右数组吗，直到数组长度小于2

  归并：
    1.到达了合并这一步，就表明左右两数组已经有序了
    2.创建一个临时存储数组temp，比较两数组第一个元素，将较小的元素加入临时数组
    3.

  归并排序：稳定
  时间复杂度：O(nlogn)  空间复杂度：O(n)
*/

/*
解法一：
  分割数组时直接将数组分割成两个数组，合并时直接合并数组

此解法：
  优点：思路清晰，写法简单
  缺点：空间复杂度略高，需要复制多个数组
*/
function mergeSort(array){
  if(array.length<2){   //很重要！这是递归的结束条件！
    return array;
  }
  const mid = Math.floor(array.length/2);   //取传进来的数组的中点
  const front = array.slice(0, mid);        //将数组的前半段保存在数组front中
  const end = array.slice(mid);             //将数组的后半段保存再数组end中
  return merge(mergeSort(front), mergeSort(end));   //将数组的前半段和后半段各自再经过分割之后 作为参数传进 函数marge当中（此函数的作用就是把排序好的各段归并起来）
}

//合并函数
function merge(front, end){
  const temp = [];
  while(front.length && end.length){
    if(front[0]<end(0)){
      temp.push(front.shift());
    }else{
      temp.push(end.shift());
    }
  }
  while(front.length){
    temp.push(front.shift());
  }
  while(end.length){
    temp.push(end.shift());
  }
  return temp;
}

/*
解法二：
  记录数组的索引，使用left、right两个索引来限定当前分割的数组。

此解法：
  优点：空间复杂度低，只需一个temp存储空间，不需要拷贝数组
  缺点：写法复杂
*/
function merge(array, left, right, temp){
  const mid = Math.floor((left+right)/2);
  let leftIndex = left;
  let rightIndex = mid+1;
  let tempIndex = 0;

  while(leftIndex<=mid && rightIndex<=right){
    if(array[leftIndex] < array[rightIndex]){
      temp[tempIndex++] = array[leftIndex++]
    }



  }

}