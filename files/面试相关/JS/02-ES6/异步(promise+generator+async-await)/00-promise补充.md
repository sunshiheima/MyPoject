只是写了一部分需要注意的（之前有遗漏的问题），具体见文（文中也指说了一部分，可以看一下，最开始有关异步的描述还是不错的!）
https://juejin.im/post/6844903775329583112#heading-20

# 1 Promise 使用建议：

- 1)工作中建议全面拥抱新的 Promise 语法，其实现在的异步编程基本也都使用的是 Promise
- 2)建议使用 ES7 的 async/await 进一步的优化 Promise 的写法
  async 函数始终返回一个 Promise，await 可以实现一个"等待"的功能，async/await 被成为异步编程的终极解决方案
  即用同步的形式书写异步代码，并且能够更优雅的实现异步代码顺序执行以及在发生异步的错误时提供更精准的错误信息
- 3)只是了解这些 API，却不知道 Promise 内部具体是怎么实现的，遇到复杂的异步代码就无从下手
  非常建议去了解一下 Promise A+的规范，自己实现一个 Promise

---

# 2 注意

- 1)回调函数会有信任问题
  //下面 fn 表示第三方库中的某方法，是异步的
  fn(参数 1，参数 2，我们的回调函数）
  fn 内部的具体实现我们并不清楚，其内部会在合适的时机调用【我们的回调函数】
  故我们的回调函数是交给第三方调用的，调用多少次我们都不知道。

- 2)Promise 解决信任问题

````js
  let promise = new Promise((resolve, reject) => {
  fn(参数 1，参数 2，resolved，reject）
  //fn 是第三方库中的某方法，是异步的
  //我们并未将【我们的回调函数】直接传给第三方库让其调用，而是只给它传入了 resolve 和 reject 两个方法
  //在第三方库中，调用这两个方法，并且将【我们所需要的内容，也是要传给我们的回调函数的内容】作为参数传入 resolve/reject
  //这样（下面注册的）【我们的回调函数】就能够接收到内容了
  })
  promise.then(res => { //我们将【我们的回调函数】放到 then 方法中来了，即回调函数的执行由我们来控制了！
  console.log(res);
  })
	```

重！！！愈发感觉其实 Promise 就是一个装着异步行为的容器而已！！！

错误处理分析同上！

---

现代前端大部分的异步请求都是使用 Promise 实现的，fetch 这个 web api 也是基于 Promise 的。
Promise 并不是回调函数的衍生版本，而是两个概念。
现在 MVVM 框架常用的第三方请求库也是基于 Promise 的，另外 nodejs 中也有 bluebird 和 Q 等。

---

执行了 resolve 函数后不一定会进入 fullfilled 状态！

let promise = new Promise(resolve => {
resolve(Promise.reject('报错了'));
})
//注意这里用一个定时器在下轮事件循环中打印这个 Promise 实例的状态,否则会是 pending 状态
setTimeout(() => {
console.log(promise); //Promise {<rejected>: '报错了'}
})

上面调用了 resolve 函数，仍返回了一个拒绝状态的 Promise
因为如果在一个 promise 的 resolve 函数中又传入了一个 Promise,会展开传入的这个 promise
这里因为传入了一个拒绝状态的 promise,resolve 函数展开这个 promise 后,就会变成一个拒绝状态的 promise,所以把 resolve 理解为决议比较好一点

等同于：
let promise = Promise.reject('报错了');
setTimeout(() => {
console.log(promise); //Promise {<rejected>: '报错了'}
})
````
