/*
1.宏任务补充：
    setImeout、setInterval、setImmediate
    requestAnimation！、I/O、UI rendering

2.new Promise()中，即使是立即resolve()，then当中注册的回调也不会立即执行，而是微任务，会被添加到当前宏任务的微任务队列中。
    new Promise(function(resolve){
        resolve();
    }).then(function(){
        console.log('promise2')
    })

3.Promise.resolve()中，实验结果表明，then中注册的回调函数仍然是作为微任务执行的
    Promise.resolve(p).then(()=>{
        console.log(1)
    })

4.async/await（成对出现）
    async function async1(){
        console.log('async1 start')
        await async2()      //await后面的async2函数会同步执行
        console.log('async1 end')   //await下面的语句会被当成【微任务】，添加到当前宏任务的微任务队列中
    }
    //node
*/

async function async1() {
  console.log("async1 start"); //2
  await async2();
  console.log("async1 end"); //6！
}
async function async2() {
  console.log("async2"); //3！
}
console.log("script start"); //1
setTimeout(function () {
  console.log("setTimeout"); //8
}, 0);
async1();
new Promise(function (resolve) {
  console.log("promise1"); //4
  resolve();
}).then(function () {
  console.log("promise2"); //7！
});
console.log("script end"); //5
