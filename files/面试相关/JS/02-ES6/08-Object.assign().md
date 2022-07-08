# 1 合并对象的方式：

- 1)Object.assign(target, source1, source2, ...)
- 2)ES9 的“扩展运算符解构对象”{...obj1,...obj2}
  可以在传参的时候可以将多个数据合并为一个对象传给后端！

# 2 两者对比：

## 2.1【ES6-Object.assign(target, source)】

- 1)会合并两个对象，触发 source 对象的 getter 函数 && target 对象的 setter 函数
- 2)target 对象的 getter 函数和 setter 函数不会被替换为 source 对象的，所以最终属性的值是 target 对象 getter 函数的返回值

## 2.2 【ES9-在对象上使用扩展运算符-{...obj, ...obj2}】

- 1)会合并 2 个对象，并且只触发两个对象属性的 getter 函数
- 2)前一个对象的 getter 函数和 setter 函数会被替换为第二个对象的, 所以最终属性的值是第二个对象 getter 函数的返回值//TODO:没懂

同：除去对象属性有 getter/setter 的情况，Object.assign 和对象扩展元素符功能是相同的，两者都是浅拷贝，使用 ES9 的方法相对简介一点。

---

# 3 Object.assign()的特点：

会遍历一个或多个 source 对象，将其中【自身可枚举属性(包括 Symbol 属性)】，复制到 target 对象（此处用的是【等号】）。最后返回目标对象。 - 1)此处复制是浅拷贝，对于值是引用类型的属性，拷贝的是它的引用

- 2)Object.assign()保证 target 是一个对象，如果传入一个基本类型，则会将其转为基本包装类型。null/undefined 没有基本包装类型，所以传入会报错。
- 3)source 如果是不可枚举的数据类型则会忽略合并（注意字符串类型被认为是可枚举的,因为内部有 iterator 接口）
- 3.1)因为是用【等号】进行赋值的，所以会触发 source 对象的对应属性的 getter 函数 && 会触发 target 对象的对应属性的 setter 函数。
  所以 Object.assign()无法合并对象属性的访问器
- 3.2)ES6 的 Object.assign()默认开启了严格模式，所以不会静默处理，而会直接报错。

拓展： -如果需要合并对象属性的访问器，可以使用 ES7 提供的 Object.getOwnPropertyDescriptors 和 Object.defineProperties 这 2 个 API 实现

```js
let target = {};
let source = {
//ES6 新增的 getter/setter 简写形式
get a(){
console.log('get');
return 1;
},
set a(val){
console.log('set);
}
}

Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
target //{a: 1, get a, set a} //成功赋值了 source 对象中 a 属性的 getter 和 setter
source //{a: 1, get a, set a} -当 target 参数传入一个字符串，内部会转为基本包装类型，而需注意：字符串基本包装类型的属性是只读的(属性描述符的 writable 属性为 false)，即不能再次赋值
Object.assign("abc", "def"); //会报错 Cannot assign to read only property ...
//如果是非严格模式下会静默处理，而不会报错；而 ES6 的 Object.assign 默认开启了严格模式

模拟实现 Object.assign()：
"use strict" //启用严格模式，使得在尝试给基本包装类型已定义的下标赋值时报错？
const isComplexDataType = (obj) => (typeof obj === "object" || typeof obj === "function") && obj !== null;
//简单实现 ES6 的 Object.assign(target, source)
const myassign = function (target, ...source) {
if (taret == null) throw new TypeError("目标对象不能为 null/undefiend");
return source.reduce((pre, cur) => {
isComplexDataType(pre) || (pre = new Object(pre)); //变成一个基本包装类型
if (cur == null) return pre; //source 为 null/undefined 时忽略
//遍历出可枚举属性和 Symbol 属性
[...Object.keys(cur), ...Object.getOwnPropertySymbols(cur)].forEach(
(key) => {
pre[key] = cur[key];
}
);
return pre;
}, target);
};
```
