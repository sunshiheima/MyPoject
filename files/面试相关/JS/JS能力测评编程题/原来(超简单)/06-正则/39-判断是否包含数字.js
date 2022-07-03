/*
题目：
  给定字符串 str，检查其是否包含数字，包含返回 true，否则返回 false
示例：
  输入'abc123' ； 输出true
*/

//不是自己想出来的是参考的别人的，是一种投机取巧的做法！题目本意是想让我用正则！
function containsNumber(str) {
  for(var i=0; i<10;i++){
    console.log(i);
    if(str.indexOf(i) !== -1) return true;
  }
  return false;
}
console.log(containsNumber('abc123'));

//用正则
function containsNumber(str) {
  var regex = /\d/;
  return regex.test(str);
}

