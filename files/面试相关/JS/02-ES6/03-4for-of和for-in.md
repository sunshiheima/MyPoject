# 1【ES6 的 for-of 循环】和【ES5 的 for-in 循环】的区别：

## 1.1 for-of:

只能用在可迭代对象(即含有 iterator 接口的数据结构)上,获取的是迭代器返回的 value 值（所以是值！）。
只遍历当前对象，而不会遍历它的原型链
对于数组的遍历，for-of 只返回数组的下标对应的属性值（即数组每个元素值）

## 1.2 for-in:

可用于所有对象。会遍历对象的整个原型链，获取所有可枚举属性的键名（是键名！）。 //遍历性能非常差不推荐使用
对于数组的遍历,for-in 会返回数组中所有可枚举的属性(包括原型链上可枚举的属性)

## 1.3 for-of 循环原理：

其实也是利用了可迭代对象内部部署的 iterator 接口。

```js
//将 for-of 循环分解成最原始的 for 循环
let arr = [1, 2, 3, 4, 5];
let iterator = arr[Symbol.iterator]();
//写法一
var res = iterator.next();
while (!res.done) {
  console.log(res.value);
  res = iterator.next();
}
//写法二
for (let value, res; (res = iterator.next()) && !res.done; ) {
  value = res.value;
}

//for-of 循环同时支持 break/continue/return（在函数中调用的话），并且可以和对象解构赋值一起使用
let arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
let obj = {};
//可以将下面 obj.a 看作一个整体 xxx，方面理解
for ({ a: obj.a } of arr) {
  obj.a; //1 => 2 => 3
}
```
