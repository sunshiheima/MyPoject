/*
  集合、字典和散列表可以存储不重复的值。
  在集合中，我们用【值,值】的形式来存储数据
  而在字典和散列表中，是用【键,值】的形式来存储数据

  字典也称作映射
  与Set类相似，ES6当中也包含一个Map类的实现，即我们所说的字典
  接下来我们要实现的类就是以ES6中Map类的实现为基础的
*/

//创建一个字典
function Dictionary(){
  var items = {};   //和Set类类似，我们将在一个Object实例而非数组中存储元素

  //判断某个键值是否存在于这个字典中
  this.has = function(key){
    return key in items;      //不应该用items.hasOwnProperty(key)吗？
  };

  //向字典中添加新元素
  this.set = function(key,value){
    items[key] = value;   //1
  };

  //通过使用键值来从字典中移除键值对应的数据值
  this.remove = function(key){
    if(this.has(key)){
      delete items[key];
      return true;
    }
    return false;
  };

  //通过键值查找特定的数值并返回
  this.get = function(key){
    return this.has(key) ? items[key] : undefined;      //undefined是不存在，null是存在但为空
  };

  //将字典所包含的所有键名以数组形式返回
  this.keys = function(){
    var keys = [];
    for(var k in items){
      if(this.has(k)){
        keys.push(k);
      }
    }
    return keys;
  };

  //将字典中包含的所有数值以数组形式返回
  this.values = function(){
    var values = [];
    for(var k in items){     //用for-in循环来迭代对象items,获取其每个键值对的 键
      if(this.has(k)){
        values.push(items[k]);
      }
    }
    return values;
  };
  /*
    for和for-in循环的区别：
      1.当两个用来遍历数组时：
        for循环遍历得到的每一项是数字
        而for-in循环遍历得到的每一项被隐式转为了字符串

      2.当两个用来遍历对象时：
        for循环遍历得到的结果是空的，并且打印i值也是空的？因此不能用for循环遍历对象，因为无法获取obj.length，所以for循环只能用于数组操作
        for-in循环遍历数组，k是指对象当中存储的键值对的 键

      for循环的性能高于for-in循环
      for-in循环的效率是最低的，因为for-in循环有一些特殊的要求：
        1.遍历所有属性，不仅是ownproperties，也包括原型链上的所有属性
        2.忽略enumerable为false的属性
        3.必须按特定顺序遍历，先遍历所有数字键，然后按照创建属性的顺序遍历剩下的
  */


  //clear、size、getItems方法 略
  this.size = function(){
    return Object.keys(items).length;
  }

}

//使用Dictionary类
var dictionary = new Dictionary();
dictionary.set('John','grandef@email.com');
dictionary.set('Mary','johnsnowf@email.com');
dictionary.set('Mark','Tyrin@email.com');
console.log(dictionary.has('John'));    //true
console.log(dictionary.size());   //3
console.log(dictionary.keys());   //["John", "Mary", "Mark"]
console.log(dictionary.values());   //["grandef@email.com", "johnsnowf@email.com", "Tyrin@email.com"]
console.log(dictionary.get('Mary'));    //johnsnowf@email.com
dictionary.remove('John');
console.log(dictionary.size());   //2
console.log(dictionary.keys());   //johnsnowf@email.com
console.log(dictionary.values());   //["johnsnowf@email.com", "Tyrin@email.com"]
console.log(dictionary.get('Mary'));  //johnsnowf@email.com

