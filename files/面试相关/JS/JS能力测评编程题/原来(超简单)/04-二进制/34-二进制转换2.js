/*
题目：
  给定二进制字符串，将其换算成对应的十进制数字
示例：
  输入'11000000'，输出192
*/

//我的写法（已过）
function base10(str) {
  var arr = str.split('');
  var length = arr.length;
  var index = length-1;
  var result = 0;
  var number;
  for(var i=0; i<length; i++){
    number = Number(arr[i]);
    console.log('number', number);
    console.log('index', index)
    result += number * Math.pow(2, index);
    console.log('result', result);
    index--;
  }
  return result;
}
console.log(base10('11000000'));

//别人的写法（更简单）
function base10(str){
  /*
    其他进制转十进制
    parseInt(str, 2)
    parseInt(str, 8)
    parseInt(str, 16)
  */
  return parseInt(str, 2);
}