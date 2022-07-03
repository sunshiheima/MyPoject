/*
  给定一个double类型的浮点数base 和 int类型的整数exponent，求base的exponent次方

  思路：
    这道题逻辑上很简单，但很容易出错
    关键是要考虑全面，考虑到所有情况
    exponent是正，负，0的情况
    base为0的情况               //下面的解法当中并没有体现出 考虑了base为0的情况
*/
function Power(base, exponent){
  if(exponent === 0){
    return 1;
  }else{
    if(exponent>0){
      var result = 1;
      for(let i=0; i<exponent; i++){
        result *= base;
      }
      return result;
    }else if(exponent<0){
      var result = 1;
      for(let i=0; i<Math.abs(exponent); i++){
        result *=base;
      }
      return result ? (1 / result) : false;
    }

  }

}