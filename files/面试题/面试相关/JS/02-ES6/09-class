/*
从下面代码可以看出:
-ES6【子类constructor中的super(xxx)】 => ES5【子类构造函数中的Parent.apply(this, xxx)】
-ES6【Child extends Parent】 => ES5【Child.prototype = Object.create(Parent.prototype)】
*/

function Parent(childName) {
  this.name = "parent";
  this.age = 46;
  this.childName = childName;
}
Parent.prototype.show = function () {
  console.log(this.childName);
};
function Child() {
  //为了向父元素传参，模拟super()
  Parent.apply(this, arguments);
  //his.name = "child";
  this.age = 22;
}
//组合式继承的写法（为了让子类能访问到父类上的属性和方法）
// Child.prototype = new Parent();
//寄生组合式继承的写法（为了减少一个父类构造函数的调用）
Child.prototype = Object.create(Parent.prototype);
var child = new Child("yf");
console.log(child.age); //22
child.show(); //yf

// -----------------------------------

// es6的class和extends的写法;
class Parent {
  constructor(childName) {
    this.name = "parent";
    this.age = 46;
    this.childName = childName;
  }
  show() {
    console.log(this.childName);
  }
}
class Child extends Parent {
  constructor(childName) {
    super(childName);
    this.age = 22;
  }
}
var child = new Child("yf");
console.log(child.age); //22
child.show(); //yf
