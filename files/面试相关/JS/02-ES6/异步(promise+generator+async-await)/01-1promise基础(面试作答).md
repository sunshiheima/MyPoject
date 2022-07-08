# 1.Promise 的常用 API

## 1.1 Promise.resolve(value) - 类方法

该方法接收一个参数 value，返回将 value 值解析后的 Promise 对象

- 1)如果传入的 value 是个 thenable 对象(简单理解为带有 then 方法的对象)，返回的 Promise 对象会“跟随”这个 thenabl 的对象，采用它的最终状态(指 resolve/rejected/pending/settled)
  (thenable 非常类似于 Promise，但是并不是只要实现了 then 方法就一定能作为 Promise 对象来使用)
- 2)如果传入的 value 是个 Promise 对象，则 value 作为 Promise.resolve 方法的返回值返回
- 3)其他情况以该值为成功状态返回一个 Promise 对象

## 1.2 Promise.reject - 类方法

类方法，与 resolve 唯一的不同是，返回的 promise 对象的状态为 rejected

## 1.3 Promise.prototype.then - 实例方法

用于为 Promise 注册回调函数，then 方法接收一个函数作为参数。该函数参数又接收一个 value 作为参数。(即该函数的形式：fn(value){})
此 value 就是上一个任务返回的结果，then 中的函数一定要 return 一个结果或者一个新的 Promise 对象，才可以让之后的 then 回调接收。

## 1.4 Promise.prototype.catch - 实例方法

用于捕获异常，和 then 方法类 似，接受一个函数作为参数。该函数参数又接收一个参数 err(即函数形式：fn(err){})
此 err 是 catch 注册之前的回调当中抛出的异常信息。

## 1.5.Promise.race - 类方法

功能是：多个 Promise 任务同时执行时，返回最先执行结束的 Promise 任务的结果，不管这个 Promise 结果是成功还是失败。

## 1.6.Promise.all - 类方法

功能是：多个 Promise 任务同时执行时，如果全部成功执行，则以数组的方式返回所有 Promise 任务的执行结果；如果有一个 Promise 任务 rejected，则只返回该 Promise 任务的结果

## 2 promise 需要注意的地方

- 1)如果我们后续的任务是异步任务的话，必须 return 一个新的 promise 对象；如果后续任务是同步任务，只需 return 一个结果即可
  另：promise 的 then 方法中的回调函数也可以不显性的返回值（这不意味着函数没有返回值，所有函数都会默认返回 undefined）

- 2)一个 Promise 对象有三个状态，并且状态一旦改变，便不能再被更改为其他状态
  pending 异步任务正在进行
  resolved(也可以叫 fulfilled) 异步任务执行成功
  rejected 异步任务执行失败

## 3 promise 与事件循环

Promise 在初始化时，传入的函数是同步执行的，然后注册 then 回调。
注册完之后，继续往下执行同步代码，在这之前，then 中回调不会执行。
只有同步代码块执行完毕后，才会在事件循环中检测是否有可用的 promise 回调。如果有，那么执行；如果没有，继续下一个事件循环。

关于 Promise 在事件循环中还有一个微任务的概念(micromask)

## 4promise 的一般用法

- 1)首先初始化一个 Promise 对象，可以通过两种方式创建(这两种方式都会返回一个 Promise 对象)
  -new Promise(fn)
  -Promise.resolve(fn)

- 2)然后调用上一步返回的 promise 对象的 then 方法，注册回调函数
  传给 then 方法的回调函数可以有一个参数，也可以不带参数。如果 then 中的回调函数依赖上一步的返回结果，那么要带上参数。

```js
new Promise(fn)
.then(fn1(value){
//处理 value
})
```

- 3)最后注册 catch 异常处理函数，处理前面回调中可能抛出的异常

```js
new Promise(fn)
.then(fn1(value){
//处理 value
})
.catch((err) => {
console.log(err);
})
```

# [重点！]宏任务与微任务的执行顺序

- 1)宏任务：setTimeout setInterval Ajax DOM 事件
- 2)微任务：Promise async/await

主线程=>主线程上的微任务=>宏任务

```js
console.log("1");
new Promise((resolve) => {
  console.log("2");
  //微任务
  resolve();
  console.log("3");
}).then(() => {
  console.log("6");
});
console.log("4");
//宏任务最后执行
setTimeout(() => {
  console.log("7");
});
console.log("5");
```
