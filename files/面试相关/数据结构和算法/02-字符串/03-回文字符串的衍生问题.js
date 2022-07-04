/*
回文字符串的衍生问题 —— 对称性和双指针
题目：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
示例：
    输入："abca"
    输出：True
注意: 字符串只包含从 a-z 的 小写字母。字符串的最大长度是50000。
思路：
方法一：
    若字符串本身不回文，则直接遍历整个字符串。遍历到哪个字符就删除哪个字符
    同时对删除该字符后的字符串进行是否回文的判断，看看存不存在删掉某个字符后、字符串能够满足回文的这种情况。
方法二：
    首先初始化两个指针，一个指向字符串头部，另一个指向尾部
    如果两个指针所指的字符串恰好相等，那么这两个字符就符合了回文字符串对对称性的要求，跳过它们往下走即可。
    如果两个指针所指的字符串不等，那么就意味着不对称发生了，意味着这是一个可以“删掉试试看”的操作点。
    我们可以分别对左指针字符和右指针字符尝试进行“跳过”，看看区间在 [left+1, right] 或 [left, right-1] 的字符串是否回文。
    如果是的话，那么就意味着如果删掉被“跳过”那个字符，整个字符串都将回文，返回true
*/
// const validPalindrome = function(s){

// }
// const isPalidrome = function(start, end){

// }
// console.log(validPalindrome("abca"));

const validPalindrome = function (s) {
  var len = s.length;
  var left = 0;
  var right = len - 1;
  while (left < right && s[left] === s[right]) {
    left++;
    right--;
  }
  //内部方法，用于判断原字符串某个区间内的字符是否回文
  const isPalidrome = function (start, end) {
    while (start < end) {
      if (s[start] === s[end]) {
        start++;
        end--;
      } else {
        return false;
      }
    }
    return true;
  };
  //到此处了，表示遇到了不相等的字符
  if (isPalidrome(left + 1, right)) {
    return true;
  }
  if (isPalidrome(left, right - 1)) {
    return true;
  }
  return false;
};
console.log(validPalindrome("abca"));

//方法二（文中的写法，推荐，对称性和双指针 —— 没有用那么多API，执行时间为遍历一半字符串的时间！nice!）
// const validPalindrome = function (s) {
//   const len = s.length;
//   let left = 0,
//     right = len - 1;
//   //相等，则左右指针同步跳过，一起向中间前进
//   while (left < right && s[left] === s[right]) {
//     left++;
//     right--;
//   }
//   //尝试判断跳过左指针元素后字符串是否回文
//   if (isPalidrome(left + 1, right)) {
//     return true;
//   }
//   //尝试判断跳过右指针元素后字符串是否回文
//   if (isPalidrome(left, right - 1)) {
//     return true;
//   }

//   //工具方法，用于判断字符串是否回文
//   function isPalidrome(start, end) {
//     while (start < end) {
//       if (s[start] !== s[end]) {
//         return false;
//       }
//       start++;
//       end--;
//     }
//     return true;
//   }
//   //函数默认返回false
//   return false;
// };

//方法一（低效）
// function validPalindrome(s) {
//   let len = s.length;
//   for (let i = 0; i < len; i++) {
//     let arr = s.split("");
//     let newStr = arr.splice(i, 1).join("");
//     let reversedStr = newStr.split("").reverse().join("");
//     if (newStr === reversedStr) {
//       return true;
//     }
//   }
//   return false;
// }
// validPalindrome("abca");

//方法二（自己根据文中所给思路写的）
// function validPalindrome(s) {
//   let left = 0;
//   let right = s.length - 1;
//   while (left < right) {
//     //相等，则双指针同步跳过
//     if (s[left] === s[right]) {
//       left++;
//       right--;
//     } else {
//       //不相等，看[left+1,right]区间或[left,right-1]区间内是否为回文
//       let newStr1 = s.slice(left + 1, right + 1);
//       let reversedStr1 = newStr1.split("").reverse().join("");
//       let newStr2 = s.slice(left, right);
//       let reversedStr2 = newStr2.split("").reverse().join("");
//       return newStr1 === reversedStr1 || newStr2 === reversedStr2;
//     }
//   }
//   return true;
// }
// validPalindrome("abca");
