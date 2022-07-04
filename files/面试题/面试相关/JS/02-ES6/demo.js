//iterator实际上就是一个含有next()的对象，每次调用next()都会生成一个对象{ value: x, done: x}
// const createIterator = function(arr){
//     var len = arr.length;
//     var i = 0;
//     return {
//         next: function(){
//             var done = !(i < len);
//             var value = !done ? arr[i++] : undefined;
//             return {
//                 value,
//                 done
//             }
//         }
//     }
// }
// var arr = [1,2,3];
// var iterator = createIterator(arr);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

//for-of的原理
// var arr = [1,2,3];
// for(item of arr){
//     console.log(item);
// }
// 
// var iterator = arr[Symbol.iterator]();
// var res = iterator.next();
// while(!res.done){
//     console.log(res.value);
//     res = iterator.next();
// }

//es5和es6实现继承
// function Parent(childName){
//     this.name = childName;
// }
// Parent.prototype.sayName = function(){
//     console.log(this.name);
// }
// function Child(childName){
//     this.age = 22;
//     Parent.call(this, childName);
// }
// Child.prototype = Object.create(Parent.prototype);
// var child = new Child("child-yf");
// console.log(child.age);
// child.sayName();

// class Parent {
//     constructor(childName){
//         this.name = childName;
//     }
//     sayName(){
//         console.log(this.name);
//     }
// }
// class Child extends Parent {
//     constructor(childName){
//         super(childName);
//         this.age = 22;
//     }
// }
// var child = new Child("child-yf");
// console.log(child.age);
// child.sayName();
