/*
  输入一个正数s，打印出所有和为s的连续整数序列
  例如：输入15,有序1+2+3+4+5 = 4+5+6 = 7+8 = 15,所以打印出3个连续序列1-5，5-6和7-8
  思路：
    创建一个容器child，用于表示当前的子序列，初始元素为1,2
    记录子序列的开头元素small和末尾元素big
    big指针向右移动时，子序列末尾会增加一个数；small指针向右移动时，子序列开头会减少一个数
    当子序列的和大于目标值，则将small指针向右移动；子序列的和小于目标值，则将big指针向右移动
*/
function FindContinueSequence(sum){
  const result = [];
  const child = [1,2];    //容器child
  let small = 1;
  let big = 2;
  let currentSum = 3;
  while(big<sum){   //当较大的那个数都比sum大了，那么后面再也不会有符合条件的序列了，那么结束循环
    while(currentSum < sum && big < sum){   //当子序列的和小于目标值时，（应该将big指针向右移动）
      child.push(++big);
      currentSum += big;
    }
    while(currentSum > sum && small < big){
      child.shift();
      currentSum -= small++;
    }
    if(currentSum === sum && child.length > 1){
      result.push(child.slice());   //注意slice不会改变原数组，所以结果是:相当于是将child数组复制了一份并且添加给了result，但是child数组本身并没有变化
      child.push(++big);      //因为可能有多组符合条件的数组，所以还需要继续
      currentSum += big;
    }
  }
  return result;
}