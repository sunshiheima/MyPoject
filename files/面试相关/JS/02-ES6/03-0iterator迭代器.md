# 1.iterator 迭代器：

是另外四个 ES6 常用特性的实现基础：解构赋值、剩余/扩展运算符、生成器、for/of 循环。
ES6 新增的 Map、Set 数据结构也有使用到它。

# 2.迭代过程

可迭代的数据结构会有一个[Symbol.iterator]方法。 //又叫 iterator 接口
[Symbol.iterator]执行后会返回一个 iterator 对象 //又叫迭代器
iterator 对象有一个 next 方法  
执行一次 next 方法（消耗一次迭代器）会返回一个有 value、done 属性的对象
//value 即每次迭代之后返回的值，而 done 表示是否还需要再次循环。当 value 为 undefined，done 为 true 时表示循环终止。

[例如]：

```js
let arr = [1, 2, 3];
let iterator = arr[Symbol.iterator](); //需要使用键名的形式访问 Symbol.iterator
iterator.next(); //{value: 1, done: false}
iterator.next(); //{value: 2, done: false}
iterator.next(); //{value: 3, done: false}
iterator.next(); //{value: undefined, done: true}
```

# 3.可迭代的数据结构

不是所有的数据结构都是可迭代的，只有内部部署了一个[Symbol.iterator]属性的数据结构才是可迭代的。
默认部署了 iterator 接口的数据结构有：Array / TypedArray(类数组，包含函数的 arguments 对象、NodeList 对象) / Map / Set / String
[!注意]数组的 iterator 接口(Symbol.iterator 方法)默认部署在数组原型上
[!注意]注意普通对象默认是没有 iterator 接口的（可以自己创建 iterator 接口让普通对象实现迭代）

# 4.迭代器

其实就是一个具有 next()方法的对象，每次调用 next()都会返回一个结果对象，该结果对象有两个属性：value 表示当前的值，done 表示遍历是否结束。

//使用 ES5 的语法创建一个【迭代器】生成器

```js
function createIterator(items) {
  var i = 0;
  return {
    next: function () {
      var done = i >= items.length;
      var value = !done ? items[i++] : undefined;
      return {
        done: done,
        value: value,
      };
    },
  };
}
//返回的 iterator 就是一个迭代器对象
var iterator = createIterator([1, 2, 3]);
console.log(iterator.next()); //{done: false, value: 1}
console.log(iterator.next()); //{done: false, value: 2}
console.log(iterator.next()); //{done: false, value: 3}
console.log(iterator.next()); //{done: true, value: undefined}
```
