/*
es5实现let: 
    -let的核心就是生成了一个块级作用域
es5实现const: 
    -const不仅能生成一个块级作用域
    -并且const声明的变量是只读的（不可改变的） —— 使用Object.defineProperty()
    //但是下面的实现中，只实现了【只读】这个特点！
*/

//1.let
(function () {
  var a = 1;
  console.log(a);
})();
// console.log(a);      //会报错，a is not defined

//2.const
function _const(prop, value) {
  window.prop = value;
  //写法一：
  var descriptor = {
    configurable: false,
    enumerable: false,
    value,
    writable: false,
  };
  //写法二
  var descriptor = {
    configurable: false,
    enumerable: false,
    get: function () {
      return value;
    },
    set: function (newValue) {
      new TypeError("Assignment to constant variable");
    },
  };

  Object.defineProperty(window, prop, descriptor);
}
_const("obj", { a: 1 });
obj.b = 2;
obj = {}; //不会报错，window.obj也不会被修改
