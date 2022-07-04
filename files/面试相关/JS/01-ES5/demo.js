//创建对象的方式-----------------------------------------------------------

//1.创建对象-- 组合模式
// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     this.friends = ["Mary"];
// }
// // Person.prototype.sayName = function(){
// //     alert(this.name);
// // }
// Person.prototype = {
//     constructor: Person,
//     sayName: function(){
//         console.log(this.name);
//     }
// }
// var person1 = new Person("yf", 22);
// var person2 = new Person("wyl", 23);
// person1.friends.push("lxy");
// console.log(person2.friends);       //["Mary"]
// person1.sayName();                  //"yf"

//2.创建对象 -- 动态原型模式
// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     this.friends = ["Mary"];
//     if(typeof this.sayName !== "function"){
//         this.sayName = function(){
//             console.log(this.name);
//         }
//     }
// }
// var person1 = new Person("yf", 22);
// var person2 = new Person("wyl", 23);
// person1.friends.push("lxy");
// console.log(person2.friends);       //["Mary"]
// person1.sayName();                  //"yf"

//继承-----------------------------------------------------------------

//1.原型链继承
// //现在组成了一条原型链：child(有属性age=22) -> Child.prototype(有属性name=[]) -> Parent.prototype(有方法sayName)
// function Parent(){
//     this.name = [];
// }
// Parent.prototype.sayName = function(){
//     console.log(this.name);
// }
// function Child(){
//     this.age = 22;
// }
// Child.prototype = new Parent();
// Child.prototype.constructor = Child;
// //测试
// const child1 = new Child();
// const child2 = new Child();
// child1.name.push("child1");
// child2.sayName();            //["child1"]; 

//2.构造函数继承
// //现在不会组成一条原型链：child(有属性age=22, 有属性name-值在调用Child时传入) -> Child.prototype
// function Parent(name){
//     this.name = name;
// }
// Parent.prototype.sayName = function(){
//     console.log(this.name);
// }
// function Child(name){
//     //此处this将指向child实例
//     this.age = 22;
//     Parent.call(this, name);        //让Parent构造函数内部的this指向child实例
// }
// //测试
// const child1 = new Child("yf");
// const child2 = new Child("wyl");
// console.log(child1.name);           //"yf"
// console.log(child2.name);           //"wyl"
// child1.sayName();                   //报错，找不到sayName方法

//3.组合式继承
// //现在形成了一条原型链：child(有属性age为22, 有属性name-值在调用Child时传入) -> Child.prototype(有属性name-值在new Parent时传入) -> Parent.protoype(有方法sayName)
// function Parent(name){
//     this.name = name;
// }
// Parent.prototype.sayName = function(){
//     console.log(this.name);
// }
// function Child(name){
//     //此处this将指向child实例
//     this.age = 22;
//     Parent.call(this, name);        //让Parent构造函数内部的this指向child实例
// }
// Child.prototype = new Parent("该值将在new Child()时被覆盖掉");
// Child.prototype.constructor = Child;
// //测试
// console.log(Child.prototype.name); 
// const child = new Child("yf");
// child.sayName();

//4.寄生组合式继承
//现在形成了一条伪原型链：child(有属性age=22, 有属性name-值为调用Child()时传入) -> Child.prototype(为Parent.prototype的浅拷贝，因此包含着Parent.prototype.sayName方法的引用)
// function Parent(name){
//     this.name = name;
// }
// Parent.prototype.sayName = function(){
//     console.log(this.name);
// }
// function Child(name){
//     //此处this将指向child实例
//     this.age = 22;
//     Parent.call(this, name);        //让Parent构造函数内部的this指向child实例
// }
// Child.prototype = Object.create(Parent.prototype);      //浅拷贝 
// //测试   
// const child = new Child("yf");
// child.sayName();

//闭包的经典示例-------------------------------------------------------------------

//1.
// var arr = [];
// for(var i=0; i<3; i++){
//     arr[i] = function(){
//         console.log(i);
//     }
// };
// arr[0]();
// arr[1]();
// arr[2]();       //全是3

//2.
// var arr = [];
// for(var i=0; i<3; i++){
//     arr[i] = (function(i){
//         //此时在该作用域当中会加入形参i
//         return function(){
//             console.log(i);     //查找到的就是其外部作用域中的i
//         }
//     })(i);
// }
// arr[0]();       //0
// arr[1]();       //1
// arr[2]();       //2

//闭包的应用场景--------------------------------------------------------------------

//1.模块化代码=自执行函数+闭包
// var demo = (function(){
//     var name = "yf";
//     var age = 22;
//     var job = "coding";
//     return {
//         getName: function(){
//             console.log(name);
//         },
//         getJob: function(){
//             console.log(job);
//         }
//     }
// })()
// demo.getName();     //yf
// demo.getJob();      //coding
// console.log(age);   //报错

//2.创建全局唯一的变量
// var getSingleModel = function(){
//     var instance = null;
//     return function(){
//         if(!instance){
//             instance = new createModel()
//         }
//         return instance;
//     }
// }

//3.柯里化
function outter(a){
    return function inner(b){
        return a+b;
    }
}
var fn = outter(1);
var res = fn(2);
console.log(res);       //3

//4.有些函数并不是由我们来调用的，我们可以在其外层再包裹一层函数，实现传参

