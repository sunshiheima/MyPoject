//没看懂，对堆的概念都还尚未了解

/*
  堆排序：
    创建一个大顶堆，大顶堆的堆顶一定是最大的元素
    交换第一个元素和最后一个元素，让剩余的元素继续调整为大顶堆
    从后往前以此和第一个元素交换并重新构建，排序完成
*/
function heapSort(array){
  createHeap(array);    //先将数组传入createHeap函数，此函数的作用是：基于传入的数组构建一个堆
  console.log(array);
  //交换第一个元素和最后一个元素，然后重新调整大顶堆
  for(let i=array.length-1; i>0; i--){
    [array[i], array[0]] = [array[0], array[i]];    //交换第一个元素和最后一个元素
    adjust(array, 0, i);    //将原数组、第一个索引、最后一个索引，传入adjust函数中去，此函数的作用是：重新调整大顶堆
  }
  return array;
}
//构建大顶堆，从第一个非叶子节点开始，进行下沉操作
function createHeap(array){
  const len = array.length;
  const start = parseInt(len/2)-1;
  for(let i=start; i>=0; i--){
    adjust(array, i, len);
  }
}

//......
