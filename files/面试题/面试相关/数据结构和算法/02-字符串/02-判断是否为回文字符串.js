/*
【判断是否为回文字符串】也是算法基本技能
有两种办法，都要记住！！！
*/

// function isPalidrome(str){

// }
// console.log("abcba");

function isPalidrome(str) {
  //1
  // var reversedStr = str.split("").reverse().join("");
  // return reversedStr === str;
  //2
  var len = str.length;
  for (i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalidrome("abcba"));

//方法一
// function isPalidrome(str) {
//   //先反转字符串
//   const reversedStr = str.split("").reverse().join("");
//   //判断反转前后是否相等
//   return reversedStr === str;
// }

//方法二（根据回文字符串的另一个特性：如果从中间位置“劈开”，那么两边的两个子串在内容上是完全对称的
// function isPalidrome(str) {
//   const len = str.length;
//   //遍历前半部分，判断和后半部分是否对称
//   for (let i = 0; i < len / 2; i++) {
//     if (str[i] !== str[len - i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }
