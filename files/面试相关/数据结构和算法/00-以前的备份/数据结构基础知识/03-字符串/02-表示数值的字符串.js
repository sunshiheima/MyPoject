/*
  请实现一个函数用来判断字符串是否表示数值（包括整数和小数）
  例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。
       但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。

  思路：（考虑完全所有情况）
    1.只能出现数字、符号位(+/-)、小数点、指数位(e/E)
    2.小数点和指数符号：只能出现一次，且不能出现在开头结尾
    3.指数位出现后，小数点不允许再出现
    4.符号位：只能出现在开头和指数位前面
*/
function inNumric(s){
  if(s === undefined){
    return false;
  }
  let hasPoint = false;   //是否有小数点
  let hasExp = false;     //是否有指数位
  for(let i=0; i<s.length; i++){
    const target = s[i];   //把字符串的每一个字符单拿出来
    if(target>=0 && target<=9){   //1.如果字符是0~9之间的数字时，放过去（注意：我才此处有隐式类型转换，因为毕竟是一个string在和一个number比较）
      continue;
    }else if(target === 'e' || target === 'E'){   //2.如果字符是指数位时(e/E)
      if(hasExp || i === 0 || i === s.length-1){    //指数符号只能出现在开头结尾
        return false;
      }else{
        hasExp = true;    //指数符号只能出现一次。
        continue;
      }
    }else if(target === '.'){   //3.如果字符是指小数点时
      if(hasPoint || hasExp || i === 0 || i === s.length-1){    //指数位出现之后小数点不能再出现，小数点不能出现在开头结尾
        return false;
      }else{
        hasPoint = true;    //小数点只能出现一次
        continue;
      }
    }else if(target === '-' || target === '+'){ //4.如果字符是符号位时(+/-)
      if(i === 0 || s[i-1] === 'e' || s[i-1] === 'E'){    //符号位只能出现在开头和指数位前面
        continue;
      }else{
        return false;
      }
    }else{    //5.出现了其他字符时（即除了上面四大字符之外的字符时）
      return false;
    }
  }
  return true;    //如果所有字符经过上面5个筛选之后，依然没有被return false,那么就return true了，考验通过，确定为数值
}