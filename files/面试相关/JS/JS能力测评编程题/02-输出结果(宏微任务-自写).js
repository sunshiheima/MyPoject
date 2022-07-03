setTimeout(function () {
  console.log("1");
}, 0);
new Promise(function (resolve, reject) {
  console.log("2");
  setTimeout(function () {
    console.log("3"); //不调用resolve会怎样？则不会执行后面的then回调！手写promise时：就是在调用了resolve/reject()之后，才会从成功或失败中取出回调并执行！
    resolve("11");
  }, 0);
  console.log("4");
})
  .then(function (val) {
    console.log(val);
    console.log("5");
    //会去下一个事件循环
    setTimeout(function () {
      console.log("6");
    });
    //当前事件循环
    new Promise(function (resolve, reject) {
      console.log("7");
      //会去下一个事件循环
      setTimeout(function () {
        console.log("8");
        resolve();
      }, 0);
    }).then(function (val) {
      console.log(val);
      console.log("9");
    });
    return "yes";
  })
  .then(function (val) {
    console.log(val);
  });
console.log("10");

/*
分析：
  excutor中的同步代码   2 4
  全局中的同步代码      10
  目前添加的两个宏任务  1 3
  //在第二个setTimeout中，调用了resolve/reject后，才会从成功或失败队列中取出回调并执行！！！
  此时才会执行then中注册的回调  5
  第一个then内部一个单独的promise，的excutor    7
  继续执行第二个then回调    yes
  之后的宏任务    6 8 undefined 9
*/

/*
所以58同城面试官问的，在then中又注册了一个setTimeout和新的Promise，那么执行顺序是什么？
-setTimeout会到下一个事件循环中 6
-而新的Promise会在本轮事件循环中  7
*/
