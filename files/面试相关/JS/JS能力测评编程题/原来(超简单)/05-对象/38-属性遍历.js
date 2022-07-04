/*
题目：
  找出对象 obj 不在原型链上的属性(注意这题测试例子的冒号后面也有一个空格~)
  1、返回数组，格式为 key: value
  2、结果数组不要求顺序
*/

//查阅资料之后自己的写法（已过）
function iterate(obj) {
  var result = [];
  Object.getOwnPropertyNames(obj).forEach(function(key){
    result.push(key+": "+obj[key])
  })
  return result;
}

var C = function() {
  this.foo = 'bar'; this.baz = 'bim';
};
C.prototype.bop = 'bip';
console.log(iterate(new C()));