/*
题目：
  给定字符串 str，检查其是否符合如下格式
  1、XXX-XXX-XXXX
  2、其中 X 为 Number 类型
示例：
  输出'800-555-1212' ； 输出true
*/

//我的写法（已过）
function matchesPattern(str) {
  var regex = /^\d{3}-\d{3}-\d{4}$/;
  return regex.test(str);
}