注意有关【setTimeout 回调函数中的 this 指向】问题，有两种说法：

# 1.说法一

setTimeout 会将一个匿名的回调函数推入异步队列，而【回调函数是具有全局性】的！！！
所以在非严格模式下，传入 setTimeout 的匿名函数内部的 this 会指向 window。

# 2.说法二

其实仍然是遵循"函数内部的 this 指向最后调用它的那个对象"（感觉更靠谱）

```js
var x = 1;
var obj = {
  x: 2,
  y: function () {
    console.log(this.x);
  },
};
setTimeout(obj.y, 1000); // 1
```

-----下面为解析----

//最后一句等价于（注意 obj.y 和 obj.y()是不一样的，所谓的最后调用是后面这种写法，前面这种写法仅为一种引用而已）

```js
setTimeout(function(){
console.log(this.x)
}, 1000);
//1.因为在 setTimeout 函数内部，将调用 fn 时 fn 内部的 this 指向 setTimeout 函数自身的 this。
function setTimeout(fn, delay){
if(delay...){
fn.apply(this);
}
}
//2.又因为 setTimeout 是被 window 调用的，故 setTimeout 内部的 this 是指向 window 的
window.setTimeout(fn, delay);
//3.故最终 fn 执行时其内部 this 是指向 window 的
```

# 3 关于 setTimeout 和 setInterval 的区别：

- 前者执行一次、后者执行无限次
- 都是浏览器计时器到时后，就将其放入任务队列中
- setInterval 可能会有累积的问题（累积了之后，就不会有间隔时间了，而是一个接一个的立即执行）

# 4 案例

## 4.1【普通函数】内部 setTimeout + 回调函数为【普通函数】

```js
var a = 1;
var obj = {
a: 2,
fn: function(){
setTimeout(function(){
console.log(this.a); //1
})
}
//等价于
fn: function(){
var temp = function(){
console.log(this.a);
}
setTimeout(temp);
}
}
obj.fn()
//1.同理，setTimeout 内部使用 apply，使得回调函数内部的 this，等于 setTimeout 函数内部的 this
//2.而 setTimeout 函数是被 window 调用的，所以其内部 this 指向 window
//3.故 setTimeout 回调函数内部的 this 指向 window
```

---

## 4.2 【普通函数】内部 setTimeout + 回调函数为【箭头函数】

```js
var a = 1;
var obj = {
a: 2,
fn: function(){
setTimeout(() => {
console.log(this.a); //2
})
}
//等价于
fn: function(){
var temp = () => {
console.log(this.a);
}
setTimeout(temp);
}
}
obj.fn()

//1.（重！）回调函数 temp 内部的 this，等于其外层函数，即 fn 函数的 this
//2.setTimeout 函数内部试图通过 apply，改变回调函数内部 this 的指向（但是 apply 无法改变箭头函数的 this）。所以回调函数内部的 this 仍然指向 fn 函数的 this
//3.最后调用 fn 函数的是 obj 对象，故 fn 函数内部的 this 指向 obj。故回调函数内部的 this 指向 obj
//setTimeout 函数是被 window 调用的，所以 setTimeout 函数内部 this 指向 window.
```

## 4.3【箭头函数】内部 setTimeout + 回调函数为【箭头函数】

```js
var a = 1;
var obj = {
a: 2,
fn: () => {
setTimeout(() => {
console.log(this.a); //1
})
}
//等价于
fn: function(){
var temp = () => {
console.log(this.a);
}
setTimeout(temp);
}
}
obj.fn()

//1.同上理
//2.同上理。。。所以回调函数内部的 this 仍然指向 fn 函数的 this
//3.因为 fn 为箭头函数，其内部 this 指向外层，即全局作用域的 this（window）。故回调函数内部的 this 指向 window
```
