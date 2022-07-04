/*
  快速排序：
  通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比比另一个部分的所有数据要小。
  再按这种方法对这部分数据进行快速排序。
  整个排序过程可以进行递归进行，使整个数据变成有序序列。

  实现步骤：
  1.选择一个基准元素target（一般选择第一个数）
  2.将比target小的元素移动到数组左边，比target大的元素移到数组右边
  3.分别对target左侧和右侧的元素进行快速排序

  从上面的步骤中我们可以看出，快速排序也利用了分治的思想（将问题分解成一些小问题递归求解）

  时间复杂度：平均O(nlogn)，最坏O(n2)，实际上大多数情况下小于O(nlogn)
  空间复杂度：O(logn)  递归调用消耗
*/


/*
解法一：
  单独开辟两个空间left和right来存储每次递归比target小和大的序列
  每次递归直接返回left、target、right拼接后的数组
  （此解法：会浪费大量存储空间，但是写法简单）
*/
function quickSort(array){
  if(array.length < 2){
    return array;
  }
  const target = array[0];   //选择一个基准元素target(通常选择第一个数)
  const left =[];
  const right = [];
  for(let i=1; i<array.length; i++){
    if(array[i]<target){
      left.push(array[i]);
    }else{
      right.push(array[i]);
    }
  }
  return quickSort(left).concat([target], quickSort(right));
}

/*
解法二：
  1.记录一个索引l从数组最左侧开始，记录一个索引r从数组右侧开始
  2.l<r的条件下，找到右侧小于target的值array[r],并将其赋值到array[l]
  3.l<r的条件下，找到左侧大于target的值array[l],并将其赋值到array[r]
  4.这样让l=r时，左侧的值全部小于target，右侧的值全部小于target，将target放到该位置

此解法：不需要额外存储空间，但是写法思路稍微复杂（有能力推荐这种写法）
*/
function quickSort(array, start, end){
  if(end-start<1){    //那么传入的数组只有一个元素，就没有排序的必要了
    return;
  }
  const target = array[start];
  let l = start;    //注意：l和r是数组索引，而非数组当中某一项的值
  let r = end;
  while(l<r){   //循环继续的条件
    while(l<r && array[r]>=target){
      r--;
    }
    array[l] = array[r];    //上面结束循环时，就代表找到了array[r]<target的r值，此时将此索引对应的值赋值给array[l]
    while(l<r && array[l]<target){
      l++;
    }
    array[r] = array[l];    //上面结束循环时，就代表找到了array[l]>target的l值，此时此索引对应的值赋值给array[r]
  }
  array[l] = target;
  quickSort(array, start, l-1);
  quickSort(array, l+1, end);
  return array;
}

