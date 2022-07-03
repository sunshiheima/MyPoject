//数组的扁平化--------------------------------------------------------

// function myFlat(arr){
//   //1.arr.toString()
//   // return arr.toString().split(",").map(item => Number(item))
//   // var str = arr.toString();
//   // return JSON.parse(`[${str}]`);

//   //2.ES7的arr.flat()
//   // return arr.flat(Infinity);

//   //3.先序列化后正则
//   // var str = JSON.stringify(arr).replace(/\[|\]/g, "");
//   // return JSON.parse(`[${str}]`);

//   //4.for-of循环+递归（自己做出来的哈哈哈，是递归哦~我总算分析清除啦~）
//   // var res = [];
//   // for(item of arr){
//   //   if(Array.isArray(item)){
//   //     var temp = myFlat(item);
//   //     res = res.concat(temp);
//   //   }else{
//   //     res.push(item);
//   //   }
//   // }
//   // return res;

//   //5.reduce+concat
//   // return arr.reduce((acc, cur) => {
//   //   //最初acc为[]，最后会返回acc
//   //   if(Array.isArray(cur)){
//   //     acc = acc.concat(...cur);
//   //   }else{
//   //     acc.push(cur)
//   //   }
//   //   return acc;
//   // }, []);
// } 
// const arr = [1, [2,3], [4,[5,6]]];
// console.log(myFlat(arr));

//数组去重------------------------------------------------

// function unique(arr){
//   //1.Array.from()+Set特性
//   // return Array.from(new Set(arr));

//   //2.先sort排序，再比较相邻元素
//   // var res = [];
//   // arr.sort((a,b) => a-b); 
//   // for(var i=0; i<arr.length; i++){
//   //   if(arr[i]===arr[i+1]){
//   //     continue;
//   //   }
//   //   res.push(arr[i]);
//   // }
//   // return res;

//   //3.indexOf()
//   // var res = [];
//   // for(var i=0; i<arr.length; i++){
//   //   if(res.indexOf(arr[i]) === -1){
//   //     res.push(arr[i]);
//   //   }
//   // }
//   // return res;
// }
// var arr = [1,4,3,4,5,7,3,4,1,8,0,8,3];
// console.log(unique(arr));

//es5实现let--------------------------------------------------------

//1.babel的做法：添加下划线
//原来
// for(var i=0; i<5; i++){
//     console.log(i);
// }
// console.log(i)
//现在
// for(var _i=0; _i<5; _i++){
//     console.log(_i);
// }
// console.log(i);     //报错，i is not defined

//2.立即执行函数，模块化实现私有变量
// (function(){
//     for(var i=0; i<5; i++){
//         console.log(i);
//     }
// })()
// console.log(i);     //报错，i is not defined

//es5实现const，主要就是让变量不能变更，使用Object.defineProperty()来实现
// var myConst = function(prop, value){
//     window.prop = value;
//     var descriptor = {
//         value: value,
//         writable: false,
//         enumerable: true,
//         configurable: true
//     };
//     // var descriptor = {
//     //     get: function(){
//     //         return value
//     //     },
//     //     set: function(newValue){
//     //         // return new TypeError("a variable declared by const cannot be modified")
//     //         return newValue;
//     //     },
//     //     enumerable: true,
//     //     configurable: true
//     // };
//     Object.defineProperty(window, prop, descriptor);
// }
// myConst("name", "yf");
// window.name = "yjh";

//手写bind----------------------------------------------------------------------
//myfunc.bind(obj, xxx)；原本bind内部的this指向myfunc，我们希望myfunc内部的this指向obj
//但是如果我们是用new关键字调用myfunc()，因为优先级更高，我们应该返回一个对象。该对象是mybind的实例，该实例能够访问mybind原型上的属性和方法！
Function.prototype.mybind = function(thisArg){
    //this指向myfunc
    if(typeof this !== "function"){
        return new TypeError("bind only can be called by a function")
    }
    //取出其余参数
    var args = Array.prototype.slice.call(arguments, 1);
    //保存原型
    var nop = function(){};
    if(this.prototype){
        nop.prototype = this.prototype;
    }

    //最终返回一个函数，该函数执行时，this要指向thisArg
    var self = this;
    var bound = function(){
        self.apply(this instanceof nop ? this: thisArg, args.concat([...arguments]));
    }
    //修正原型
    bound.prototype = new nop();
    return bound;
}
var obj = {
    name: "obj中的name属性"
}
var func1 = function(){
    console.log(this.name)
}
func1.prototype.name = "原型上的name属性"
var bound = func1.bind(obj, 1,2,3);
// bound();
var temp = new bound();





