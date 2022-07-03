/*
  集合是由一组无序且唯一（即不能重复）的项组成的
  这个数据结构使用了与有限集合相同的数学概念，但应用在计算机科学的数据结构中

  例如：N={0,1,2,3,4,5,...}，集合中的对象用{}（大括号）包围
  还有一个就是空集，空集就是不包含任何元素的集合。用"{}"表示

  可以把集合想象成一个既没有重复元素也没有顺序概念的数组
  在数学中，集合也有并集、交集、差集等基本操作，在这一章中也会介绍这些操作

  ES5中，包括了我们在之前章节已经提到过的Array类的实现
  ES6中，则包括了Set类的实现（即集合）
*/


//创建一个集合
/*
  需要注意的一点是：我们使用对象而不是数组来表示集合。（但也可以用数组实现）
  JS的对象不允许一个键指向两个不同的属性，也保证了集合里的元素是唯一的
  接下来声明的集合的一些方法，是尝试模拟与ES6相同的Set类
*/
function Set(){
  var items = {};

  this.has = function(value){
    //return value in items;      //in操作符可以用于检测对象中是否含有什么
    return items.hasOwnProperty(value);
  };

  this.add = function(value){
    if(!this.has(value)){
      items[value] = value;   //1 添加一个值的时候，把它同时作为键和值保存，因为这样有利于查找这个值
      return true
    }
    return false;
  };

  this.remove = function(value){
    if(this.has(value)){
      delete items[value];    //2
      return true;
    }
    return false;
  };

  this.clear = function(){
    items = {};   //3 除此之外，我们还可以迭代集合，用remove方法依次移除所有的值
  };

  //size()返回集合中有多少项
  /*
    有三种实现方式：
      1.使用一个length变量，每当使用add或remove方法时控制它
      2.第二种方法，使用JS内建的Object类的keys方法，它返回一个包含给定对象所有属性的数组，则可以用返回的这个数组的length属性来得到items对象的属性个数
      3.手动获取items对象的每一个属性，记录属性的个数并返回这个数字
  */
  this.size = function(){
    return Object.keys(items).length;   //4
  };
  // this.sizeLegacy = function(){
  //   var count = 0;
  //   for(var prop in items){   //5
  //     if(items.hasOwnProperty(prop)){
  //       ++count;    //7
  //     }
  //     return count;
  //   }
  // };

  //values方法也应用了相同的逻辑，提取items对象的所有属性，以数组的形式返回
  this.values = function(){
    return Object.keys(items);
  };
  // this.valuesLegacy = function(){
  //   var keys = [];
  //   for(var key in items){    //7
  //     keys.push(key);
  //   }
  //   return keys;
  // };


  // this.sayItems = function(){
  //   console.log(items);
  // }

  //集合操作
  /*
    并集：对于给定的两个集合，返回一个包含两个集合中所有元素的新集合
    交集：对于给定的两个集合，返回一个包含两个集合中共有元素的新集合
    差集：对于给定的两个集合，返回一个包含所有存在与第一个集合且不存在于第二个集合中的元素的新集合
    子集：验证一个给定集合是否是另一集合的子集
  */
  //并集
  this.union = function(otherSet){
    var unionSet = new Set();   //1 注意：现在在Set类内部，也可以使用new关键字实例化！！！不对，此处用的应该不是我们自己写的这个Set，而是JS内置的Set？？？
    var values = this.values();   //2
    for(var i=0; i<values.length; i++){
      unionSet.add(values[i]);
    }
    values = otherSet.values();   //3
    for(var i=0; i<values.length; i++){
      unionSet.add(values[i]);
    }
    return unionSet;
  };

  //交集
  this.intersection = function(otherSet){
    var intersectionSet = new Set();
    var values = this.values();
    for(var i=0; i<values.length; i++){
      if(otherSet.has(values[i])){
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  };

  //差集
  this.difference = function(otherSet){
    var differenceSet = new Set();    //1
    var values = this.values();
    for(var i=0; i<values.length; i++){   //2
      if(!otherSet.has(values[i])){
        differenceSet.add(values[i]);   //3
      }
    }
    return differenceSet;
  }

  //子集
  this.subset = function(otherSet){
    if(this.size() > otherSet.size()){
      return false;
    }else{
      var values = this.values();
      for(var i=0; i<values.length; i++){
        if(!otherSet.has(values[i])){
          return false;
        }
      }
      return true;
    }
  };



}

//测基础方法
var set = new Set();
set.add(1);
console.log(set.values());    //["1"]
console.log(set.has(1));      //true    //此处has方法里面的hasOwnProperty函数应该是将1隐式转换成了"1"
console.log(set.size());      //1
set.add(2);
console.log(set.values());    //["1","2"]
console.log(set.has(2));      //true
console.log(set.size());      //2
set.remove(1);
console.log(set.values());    //["2"]
set.remove(2);
console.log(set.values());    //[]

//测并集
var setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
var setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
var unionAB = setA.union(setB);
console.log(unionAB.values());    //["1","2","3","4","5"]

//测交集
var setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
var setB = new Set();
setB.add(2);
setB.add(3);
setB.add(5);
var intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values());    //["2", "3"]

//测差集
var setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
var setB = new Set();
setB.add(2);
setB.add(3);
setB.add(5);
var intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values());    //["1"]

//测子集
var setA = new Set();
setA.add(1);
setA.add(2);
var setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);
var setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);
console.log(setA.subset(setB));   //true
console.log(setA.subset(setC));   //false

