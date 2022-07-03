/*
将字符串转换为数字
题目：（题目太长，下面为自己对题意的理解）
    1.丢弃开头空格字符，以下“开头”代表“第一个非空字符”
    2.开头为正/负号时，将该符号与之后尽可能多的连续数字组合起来，返回带有正/负号的整数
    3.开头为数字，则直接将其与之后连续的数字字符组合起来，返回
    4.忽略其余字符
    5.开头 不为正/负号或数字、字符串为空、字符串仅包括空白字符串时，无需进行转换，返回0
    6.数值范围为[-2^31, 2^31-1]，超过了就返回INT_MAX(2^31-1)或INT_MIN(-2^31)
简述：
    1.拿到字符串先去空格
    2.识别开头的"+"字符和"-"字符
    3.见到非整数字符就刹车
    4.把两个边界值算出来，摆在那做卡口
思路：
    123我们用一个正则表达式（可能存在的空格+正负号+数字字符串+其他字符内容），来实现“匹配”和“提取”的双重目的！！
    //具体见文中，正则表达式讲的很好很清晰！！！
*/

// const myAtio = function(str){

// }
// console.log(myAtio('   -125abdh34nkjd8'));

const myAtio = function (str) {
  var reg = /\s*([-\+]?[0-9]*).*/;
  var groups = str.match(reg);
  var targetNum = 0;
  if (groups) {
    targetNum = +groups[1];
    if (isNaN(targetNum)) {
      targetNum = 0;
    }
  }
  var max = Math.pow(2, 32) - 1;
  var min = -max - 1;
  if (targetNum > max) {
    return max;
  }
  if (targetNum < min) {
    return min;
  }
  return targetNum;
};
console.log(myAtio("   -125abdh34nkjd8"));

// // 入参是一个字符串
// const myAtoi = function (str) {
//   // 编写正则表达式
//   const reg = /\s*([-\+]?[0-9]*).*/;
//   // 得到捕获组
//   const groups = str.match(reg);
//   // targetNum 用于存储转化出来的数字
//   let targetNum = 0;
//   // 如果匹配成功
//   if (groups) {
//     // 尝试转化捕获到的结构
//     targetNum = +groups[1];
//     // 注意，即便成功，也可能出现非数字的情况，比如单一个'+'。不能进行有效的转换时，请返回 0
//     if (isNaN(targetNum)) {
//       targetNum = 0;
//     }
//   }
//   // 计算卡口以及卡口判断
//   const max = Math.pow(2, 31) - 1;
//   const min = -max - 1;
//   if (targetNum > max) {
//     return max;
//   } else if (targetNum < min) {
//     return min;
//   }
//   // 返回转换结果
//   return targetNum;
// };

// //1.计算卡口
// const max = Math.pow(2, 31) - 1;
// const min = -max - 1;

//解析字符串（字符串操作 + 正则表达式）
//摘空格（trim()或手写匹配空格）

//字符串的第一个有效字符为"+"或"-"时，不要摘它出去

//匹配的时候，连续整数之外的部分都应该被摘除
