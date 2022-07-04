/*
题目：
  将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。
示例：
  输入65，输出"01000001"
*/

//我的写法（已过）
function convertToBinary(num){
  var str = num.toString(2);
  if(str.length<8){
    var dif = 8 - str.length;
    str = '0' + str;
  }
  return str;
}