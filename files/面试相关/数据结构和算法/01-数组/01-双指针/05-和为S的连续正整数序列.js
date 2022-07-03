/*
注意：这个双指针和前面不一样的是，前面的都是头尾指针，而这个的两个指针都是从头开始的指针。
      因为是连续整数，所以此处指针不再是单纯的指针，而是具体的数！ 

题目：（和为S的连续正整数序列）
  输入一个正数s,打印出所有和为s的连续正数序列
  例如：输入15，有序1+2+3+4+5 = 4+5+6 = 7+8 = 15。所以打印出3个连续序列1-5，5-6和7-8。
思路：
  创建一个容器child,用于表示当前的子序列，初始元素为1,2
  记录子序列的开头元素small和末尾元素big
  big向右移动时子序列末尾增加一个数；small向右移动时子序列开头减少一个数
  当子序列的和大于目标值，small向右移动；当子序列的和小于目标值时，big向右移动
*/
/*
  注意：1.每次循环需要关注三个数据：child currentSum small&big自己的值
        2.下面标注的四个条件判断
*/

// function FindContinuousSequence(s){
//
// }
// console.log(FindContinuousSequence(15));

function FindContinuousSequence(s) {
  var result = [];
  var small = 1;
  var big = 2;
  var child = [1, 2];
  var sum = 3;
  var mid = Math.ceil(s / 2) + 1;
  while (big < mid && small < big) {
    while (sum < s) {
      big++;
      child.push(big);
      sum += big;
    }
    while (sum > s) {
      child.shift(small);
      sum -= small;
      small++;
    }
    if (sum === s) {
      result.push(child.slice());
      big++;
      child.push(big);
      sum += big;
    }
  }
  return result;
}
console.log(FindContinuousSequence(15));

// function FindContinuousSequence(s) {
//   var result = [];
//   //重点关注下面三个值：child sum small&big
//   var small = 1;
//   var big = 2;
//   var child = [1, 2];
//   var sum = 3;
//   while (big < s && small < big) {
//     // ！！！注意：关于下面是用if还是while的问题 -- 看两点：1.是否需要连续移动 2.sum是否为自己所控制的
//     while (sum < s) {
//       big++; //big指针先向右移动一位
//       child.push(big); //将数big添加到child当中，child中数的总和sum值也要变化
//       sum += big;
//     }
//     while (sum > s) {
//       child.shift(small); //先将数small从child中减去，child中数的总和sum值也要变化
//       sum -= small;
//       small++; //再将small指针向右移动一位
//     }
//     if (sum === s) {
//       result.push(child.slice());
//       big++;
//       child.push(big);
//       sum += big;
//     }
//   }
//   return result;
// }
// console.log(FindContinuousSequence(15));

//完全是自己想的！
// function FindContinuousSequence(s) {
//   let result = []; //结果数组
//   let child = [1, 2]; //容器
//   let small = 1; //此处small是数，而非索引（指针）
//   let big = 2; //此处big是数，而非索引（指针）
//   while (big < s) {
//     //得到child当中所有元素的和
//     var sum = 0;
//     for (var i = 0; i < child.length; i++) {
//       sum = sum + child[i];
//     }
//     //判断sum与目标值的关系，以决定指针移动
//     if (sum < s) {
//       big++;
//       child.push(big);
//     }
//     if (sum > s) {
//       child.shift("small", small);
//       small++;
//     }
//     if (sum === s) {
//       // result.push(child);      //注意：如果是直接push一个child的话，则是child的引用，之后child改变了，result当中相应的也会改变
//       result.push(child.slice());
//       big++;
//       child.push(big);
//     }
//   }
//   return result;
// }
// console.log(FindContinuousSequence(15));

// function FindContinuousSequence(s) {
//   let result = [];
//   let child = [1, 2];
//   let small = 1;
//   let big = 2;
//   let currentSum = 3;
//   while (big < s) {
//     //注意此处条件！是big<s
//     while (currentSum < s && big < s) {
//       //注意此处第二个条件！因为这个过程中big会增，因此需定big的上限
//       child.push(++big);
//       currentSum += big;
//     }
//     while (currentSum > s && small < big) {
//       //注意此处第二个条件！因为这个过程中small会增，因此需定small的上限
//       child.shift();
//       currentSum -= small++;
//     }
//     if (s === currentSum && child.length > 1) {
//       //注意此处第二个条件！
//       result.push(child.slice());
//       child.push(++big);
//       currentSum += big;
//     }
//   }
//   return result;
// }
// FindContinuousSequence(15);
