//栈和队列都是具有特殊行为的数组
//它们在添加和删除元素时更为可控

//栈：先进后出
//栈也被用在编程语言的编译器和内存中保存变量、方法调用等

//栈的全部实现
function Stack(){
  var items = [];
  this.push = function(element){
    items.push(element);
  };
  this.pop = function(){
    return items.pop();
  };
  this.peek = function(){
    return items[items.length-1];
  };
  this.isEmpty = function(){
    return items.length == 0;
  };
  this.size = function(){
    return items.length;
  };
  this.clear = function(){
    items = [];
  };
  this.print = function(){
    console.log(items.toString());
  }
}
var stack = new Stack();
console.log(stack.isEmpty());    //true
stack.push(5);
stack.push(8);
console.log(stack.peek());    //8
stack.push(11);
console.log(stack.size());    //3
console.log(stack.isEmpty()); //false
stack.push(15);
stack.pop();
stack.pop();
console.log(stack.size());  //2
stack.print();              //5,8


//从十进制到二进制
/*
  计算机里的所有内容都是用二进制数字表示的（0和1）
  没有十进制和二进制的相互转化的能力，与计算机交流就很困难

  要把十进制转化为二进制，我们可以将该十进制数字和2整除（二进制满二进十），直到结果为0为止
*/

//将十进制转化为二进制
function divideBy2(decNumber){
  var remStack = new Stack(),
    rem,
    binaryString = '';
  while(decNumber>0){
    rem = Math.floor(decNumber%2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber/2);
  }
  while(!remStack.isEmpty()){
    binaryString += remStack.pop().toString();   //注意这一句！！！
  }
  return binaryString;
}
console.log(divideBy2(233));    //11101001
console.log(divideBy2(10));     //1010
console.log(divideBy2(1000));   //1111101000

//将十进制转化为任意进制的数，第一个参数时十进制数，第二个参数时基数（十进制/二进制/八进制/十六进制）
function baseConverter(decNumber,base){
  var remStack = new Stack(),
    rem,
    baseString='',
    digits = '0123456789ABCDEF';
  while(decNumber>0){
    rem = Math.floor(decNumber%base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber/base);
  }
  while(!remStack.isEmpty()){
    baseString += digits[remStack.pop()];
  }
  return baseString;
}
console.log(baseConverter(100345,2));   //结果同书上
console.log(baseConverter(100345,8));   //结果同书上
console.log(baseConverter(100345,16));  //结果同书上



