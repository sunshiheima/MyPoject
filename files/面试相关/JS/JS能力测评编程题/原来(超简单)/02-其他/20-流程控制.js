/*
题目：
  实现 fizzBuzz 函数，参数 num 与返回值的关系如下：
  1、如果 num 能同时被 3 和 5 整除，返回字符串 fizzbuzz
  2、如果 num 能被 3 整除，返回字符串 fizz
  3、如果 num 能被 5 整除，返回字符串 buzz
  4、如果参数为空或者不是 Number 类型，返回 false
  5、其余情况，返回参数 num
示例：
  输入15，输出fizzbuzz
*/

//我的写法（已过）
function fizzBuzz(num) {
  if(!num || typeof(num)!=='number'){
    return false;
  }else{
    if(num%3===0 && num%5===0){
      return 'fizzbuzz';
    }else if(num%3===0){
      return 'fizz';
    }else if(num%5===0){
      return 'buzz';
    }else{
      return num;
    }
  }
}