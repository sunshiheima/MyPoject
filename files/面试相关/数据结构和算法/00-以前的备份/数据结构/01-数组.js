// var daysOfWeek = new Array();
// var daysOfWeek = new Array(7);
// var daysOfWeek = new Array('Sunday','Monday');
//
//
// var daysOfWeek = [];
// var daysOfWeek = ['Sunday','Monday'];
//
// console.log(daysOfWeek.length);
//
// for(var i=0;i<dayOfWeek.length;i++){
//   console.log(daysOfWeek[i]);
// }

// var fibo = [];
// fibo[0] = 1;
// fibo[1] = 2;
// for(var i = 2; i<10; i++){
//   fibo[i] = fibo[i-1] + fibo[i-2];
// }
//console.log(fibo);
//fibo[fibo.length]=11223344;
//console.log(fibo);
// for(var i = 1; i<fibo.length; i++){
//   console.log(fibo[i]);
// }

//console.log(fibo);

// for(var i=fibo.length; i>0; i--){
//   fibo[i]=fibo[i-1];
// }
// console.log(fibo);
// fibo[0] = 112233;
// console.log(fibo);

//!!!
var array = [];
array[0]=0;
array[1]=1;
for(var i=2;i<11;i++){
  array[i]=i;
}
console.log(array);   //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(var i=array.length;i>=0;i--){
  array[i]=array[i-1];
}
console.log(array);   //[undefined, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array[0]=-1;
console.log(array);   //[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//!!!
var array = [];
array[1]=1;
array[2]=2;
for(var i=3;i<=10;i++){
  array[i]=i;
}
console.log(array);   //[empty, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(var i=array.length;i>=0;i--){
  array[i]=array[i-1];
}
console.log(array);   //[undefined, undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array[0]=-1;
console.log(array);   //[-1, undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//!!!
var array = [];
array[0]=0;
array[1]=1;
for(var i=2;i<=10;i++){
  array[i]=i;
}
//console.log(array);   //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array.unshift(-1);
//console.log(array);   //[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array.pop();
//console.log(array);   //[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
array.shift();
console.log(array);   //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// for(i=0;i<array.length;i++){
//   array[i]=array[i+1];
// }
// console.log(array);   //[1, 2, 3, 4, 5, 6, 7, 8, 9, undefined]
// for(i=0;i<array.length-1;i++){
//   array[i]=array[i+1];
// }
// console.log(array);   //[1, 2, 3, 4, 5, 6, 7, 8, 9, 9]

array.splice(4,2);
console.log(array);   //[0, 1, 2, 3, 6, 7, 8, 9]
// array.splice(3,0,4,5);
// console.log(array);   //[0, 1, 2, 4, 5, 3, 6, 7, 8, 9]
array.splice(4,0,4,5);
console.log(array);   //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


var matrix = [];
for(var i=0; i<3; i++){
  matrix[i] = [];
  for(var j=0; j<3; j++){
    matrix[i][j] = [];
    for(var z=0; z<3; z++){
      matrix[i][j][z] = i+j+z;
    }
  }
}
console.log(matrix);

//concat
var zero = 0;
var a = [-3,-2,-1];
var b = [1,2,3];
var result = a.concat(zero,b);      //concat方式接收的参数可以是：数组、对象、元素，数组会按照该方法传入参数顺序连接指定数组
console.log(result);   //[-3, -2, -1, 0, 1, 2, 3]

//迭代器函数
var isEven = function(x){
console.log(x);     //1
return (x%2==0);        //也可写为return (x%2==0) ? true : false
};
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//var result = numbers.every(isEven);   //1 false
//var result = numbers.some(isEven);    //1 2 true
//var result = numbers.map(isEven);     //结果为一个数组[false, true, false, true, ...false, true, false, true, false]
var result = numbers.filter(isEven);    //[2, 4, 6, 8, 10, 12, 14]
console.log(result);


var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// numbers.forEach(function(x){
//   console.log(x%2==0);    //false true false true ...
// });

// var result = numbers.reduce(function(previous,current,index,array){
//   return previous+current;
// })
// console.log(result);      //120

// numbers.sort(function(a, b){
//   return a-b;
// })    //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],结果为负则不交换a和b的顺序

// numbers.sort(function(a, b){
//   return b-a;
// });    //[15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]，结果为正则交换a和b的顺序

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
function compare(a,b){
  if(a<b){
    return -1;
  }
  if(a>b){
    return 1;
  }
  return 0;
}
numbers.sort(compare);      //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
//可以自己指定比较规则，sort本身只认返回值是正还是负

var obj = [
  {name:'yf',age:21},
  {name:'rxy',age:20},
  {name:'wyl',age:22}
];
function compareAge(a,b){
  if(a.age>b.age){
    return -1
  }
  if(a.age<b.age){
    return 1
  }
  return 0
}
obj.sort(compareAge);     //结果为年龄按年龄降序排列

var names = ['Ana','ana','john','John'];
//names.sort();   //["Ana", "John", "ana", "john"]    //ASCII值分别是：65,75,97,106  表明sort默认为升序排列
var result = names.sort(function(first,second){
  if(first.toLowerCase()>second.toLowerCase()){
    return -1;
  }
  if(first.toLowerCase()<second.toLowerCase()){
    return 1;
  }
  return 0;
});
console.log(result);    //["john", "John", "Ana", "ana"]  为降序


//带有重音
var names2 = ['...','...'];
names2.sort(function(a,b){
  return a.localeCompare(b);    //localeCompare()方法尚不清楚
})

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,2,15];
// console.log(numbers.indexOf(2));     //1
// console.log(numbers.indexOf(100));    //-1
// console.log(numbers.lastIndexOf(2));  //13
console.log(numbers.toString());    //1,2,3,4,5,6,7,8,9,10,11,12,13,2,15
console.log(numbers.valueOf());     //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 2, 15]
console.log(numbers.join('-'));     //1-2-3-4-5-6-7-8-9-10-11-12-13-2-15
var numberString = '1,2,3,4,5,6';
console.log(numberString.toString());   //1,2,3,4,5,6   toString()方法是将数组转化为字符串，并且用逗号将每一个值隔开，而字符串调用此方法，保持不变
console.log(numberString.valueOf());    //1,2,3,4,5,6  证明valueOf()只是返回原值
console.log(numberString.join(' '));    //报错numberString.join is not function，即只有数组有join方法，字符串没有join方法

var String = '12345';
console.log(String.toString());   //12345
console.log(String.valueOf());    //12345
console.log(String.join(' '));

/*
  对数组:
    valueOf()   返回原数组，即不变
    toString()  将数组的转化为字符串，并且用逗号将每一个值隔开

  对字符串：
    valueOf()   返回原字符串，即不变
    toString()  返回原字符串
*/


















