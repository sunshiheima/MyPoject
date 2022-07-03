/*
  数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
  例如输入一个长度为9的数组，由于数字2再数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0
*/
/*
解法1：
    开辟一个额外空间存储每个值出现的次数，时间复杂度最大为O(n)，逻辑简单
*/
function MoreThanHalfNum_Solution(numbers){   //传入一个数组
  if(numbers && numbers.length > 0){
    var length = numbers.length;    //先取得数组的长度
    var temp = {};  //temp就是用来 存储每个值出现的次数 的额外空间，就是一个普通对象
    for(var i=0; i<length; i++){
      if(temp['s' + numbers[i]]){   //为了记下出现的次数，我们用对象中键值对的：键--数组当中有的数字；值--数组当中对应数字出现的次数
        temp['s' + numbers[i]]++;
      }else{
        temp['s' + numbers[i]] = 1;   //如果试图去找键，没找到的话，那么就将值初始化为1（这表示该数字第一次出现）
      }
      if(temp['s' + numbers[i]] > length/2){
        return numbers[i];
      }
    }
    return 0;
  }
}

/*
注意：如果目标值的个数大于整个数组的一半的话，那么此目标值在数组当中肯定是存在两个是连续的！！！这一点是这个解法的核心思想（突破点）
这个解法主要是关注了这种 存在某个数的个数大于整个数组的一半  的这种数组的特点。
注意：作者给的思路，写的特别特别特别模糊，根本没把思想表述出来！！！在看代码之前不要看这个思路，因为反而会误导你让你感觉混乱！！！


时间复杂度O(n)，不需要开辟新的空间，逻辑稍复杂
*/
function MoreThanHalfNum_Solution(numbers){   //传入一个数组
  if(numbers && numbers.length > 0){
    var target = numbers[0];    //我们首先将数组的第一个元素 作为target
    var count = 1;
    for(var i=1; i<numbers.length; i++){
      if(numbers[i]===target){
        count++;
      }else{
        count--;
      }
      if(count === 0){      //也就是说当前数字和target不相等时：我们就将target换掉，换成当前值；并且将count的值重置为1
        target = numbers[i];
        count = 1;
      }
    }   //循环结束之后，我们排除了不可能符合条件的（即个数大于整个数组的一半），接下来就要看剩下是否真的符合条件了
    count = 0;
    for(var i=0; i<numbers.length; i++){      //重新将数组遍历一次，统计能过上面考验的target的具体数量
      if(numbers[i] === target) count++;
    }
    return count>numbers.length / 2 ? target : 0


  }
}
























