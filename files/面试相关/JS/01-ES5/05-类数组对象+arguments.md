# 1【类数组对象】

## 1.1 定义：

拥有一个 length 属性和若干个索引属性的对象

```js
var array = ["name", "age", "sex"]; //数组
var arrayLike = {
  //类数组
  0: "name",
  1: "age",
  2: "sex",
  length: 3,
};
```

## 1.2 特点：

类数组对象在读写、获取长度、遍历三个方面都和数组差不多
但是类数组对象不能直接使用数组的方法

## 1.3 常见的类数组对象：

1)函数特有的 Arguments 对象
2）一些 DOM 方法(document.getElementsByTagName())也返回类数组对象。

如何让类数组调用数组的方法：
即：数组方法.call(类数组, 数组方法所需要的参数);

```js
//示例
var arrayLike = { 0: "name", 1: "age", 2: "sex", length: 3 };
Array.prototype.join.call(arrayLike, "&"); // name&age&sex
Array.prototype.slice.call(arrayLike, 1); // ["age", "sex"]
Array.prototype.map.call(arrayLike, function (item) {
  return item.toUpperCase();
}); // ["NAME", "AGE", "SEX"]
```

## 1.4 类数组转数组：

```js
//1.slice+call
Array.prototype.slice.call(arrayLike);
//1.splice+call
Array.prototype.splice.call(arrayLike, 0);
//1.concat+apply
Array.prototype.concat.apply([], arrayLike);
//2.ES6 Array.from
Array.from(arrayLike);
//3.ES6 拓展运算符
[...arrayLike];
//结果都是["name", "age", "sex"]
```

# 2 Arguments 和形参的绑定：

传入的参数，实参和 arguments 的值会共享；当没有传入时，实参与 arguments 值不会共享。
当然，以上是在非严格模式下；如果是在严格模式下，实参和 arguments 是不会共享的

----------------------------------------------------------------下面仅供了解-------------------------------------------------------------------------

【Arguments 对象/arguments】

定义:（是一个类数组对象）
只定义在函数体中(用 auguments 来指代)，包括了函数的参数(实参)和其他属性(例如 callee、Symbol)。

属性：
1.arguments.length，表示实参的长度 //func.length 表示形参的长度
2.arguments.callee，通过它可以调用函数自身

arguments 和形参的绑定：
传入的参数，实参和 arguments 的值会共享；当没有传入时，实参与 arguments 值不会共享。
当然，以上是在非严格模式下；如果是在严格模式下，实参和 arguments 是不会共享的

【arguments+闭包】经典面试题：
var data = [];
for(var i=0; i<3; i++){
(data[i] = function(){
console.log(arguments.callee.i)
}).i = i;
}
data[0](); //0
data[1](); //1
data[2](); //2

【arguments+apply】经典应用：
//将某函数(foo)的参数传给另一个函数(bar)
function foo(){
bar.apply(this, arguments);
}
function bar(a, b, c){
console.log(a, b, c); //1 2 3
}
foo(1, 2, 3);

【拓展运算符 轻松实现 arguments 转数组】 //当然还有别的方式，见上【类数组转数组】
function func(...arguments){
console.log(arguments); //[1,2,3]
}
func(1, 2, 3);
