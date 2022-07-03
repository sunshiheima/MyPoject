/*
题目：
  给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false
示例：
  输入'rattler'，输出true
*/

//下面利用了正则当中的分组！即()括起来的！
function containsRepeatingLetter(str) {
  var regex = /([a-zA-Z])\1/;
  return regex.test(str);
}