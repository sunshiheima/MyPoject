/*
    题目：下面除了queue函数的内容之外，其他都是已经给定的，要求实现queue函数。
    其中并发数为count个（可以看作list为一个待处理的任务队列，现在有两条线程在处理任务。线程每次只处理一个任务，处理完成之后就自动去取任务队列中的第一个任务）

    分析【题目已给定代码】：
    -这每一个异步任务(setTimeout)都是被函数包裹起来的，该函数就相当于是一个容器。函数被调用之后，其装的异步任务才会被触发。
     之所以将异步任务用容器包裹起来，这是因为异步任务之间的输出顺序(完成时机)我们没办法控制，但是我们可以控制容器的执行顺序，进而在一定程度上控制异步任务的输出顺序。
    -每一个函数(容器)都需要接收一个函数cb，并且在当前异步任务执行完毕之后会自动调用该函数
     此cb实则就是待处理的下一个异步任务。应该从对头取出并执行。该函数应由我们在queue函数内部实现
    -queue的参数是list和count,list表示待处理的任务队列，count表示可同时处理任务的线程(可将线程看作人)。
     一个线程某一时刻只能处理一个任务，处理完成之后就自动去【取任务队列头部的那个任务-list.shift() && 执行】
     两个线程可并发处理任务，即同时进行，互不干扰。同一个线程内部，即：
     先调用的任务会阻塞后调用的任务(当前调用的任务执行完才会去调用下一个)；而不同线程中的任务，先调用的不会阻塞后调用的。
    
    -----------------------------------

    综上，queue的实现：
    //版本1.实现并发 —— 但是这两个线程只能处理各自的第一个任务（所以只有任务队列中的前两个任务被执行了）
    function queue(list, count){
        //下面为要求我们写的代码
        var i = 0;
        while(list.length && i<count){
            list.shift()();     
            i++;
        }
    }
    //版本2.让线程在第一个任务执行完毕之后，自动去任务对列头部取出任务并执行 —— 但是，这两个线程也只能各自自动多执行一个任务，至于第五个任务，就没有被线程执行
    function queue(list, count){
        //下面为要求我们写的代码
        function reqNextOne(){
            if(list.length){
                var fn = list.shift();
                fn();
            }
        }
        var i = 0;
        while(list.length && i<count){
            list.shift()(reqNextOne);      //传入的reqNextOne即cb
            i++
        }
    }
    //版本3.让线程【每次在当前任务执行完毕之后】，自动去任务对列头部取出任务并执行 —— 终极版
    function queue(list, count){
        //下面为要求我们写的代码
        function reqNextOne(){
            if(list.length){
                var fn = list.shift();
                fn(reqNextOne);     //和版本2的区别！重点！！！
            }
        }
        var i = 0;
        while(list.length && i<count){
            list.shift()(reqNextOne);      //传入的reqNextOne即cb
            i++
        }
    }
*/
function f1(cb) {
  setTimeout(function () {
    console.log("1");
    cb();
  }, 300);
}
function f2(cb) {
  setTimeout(function () {
    console.log("2");
    cb();
  }, 500);
}
function f3(cb) {
  setTimeout(function () {
    console.log("3");
    cb();
  }, 100);
}
function queue(list, count) {
  /*下面为要求我们写的代码*/
  //2.(程序持续进行)线程在处理完第一个任务之后，自动调用下一个任务，执行完后又会自动调用下一个任务。
  function reqNextOne() {
    if (list.length) {
      var curTask = list.shift();
      curTask(reqNextOne); //和版本2的区别！重点！！！
    }
  }
  //1.(程序入口)程序开始执行时，开启两条线程，并发处理任务队列中的任务。
  let i = 0;
  while (list.length > 0 && i < count) {
    list.shift()(reqNextOne); //传入的reqNextOne即cb
    i++;
  }
}
queue([f1, f2, f3], 2); //1 3 2

/*
并发数为2：
    首先setTimeout   300         
    同时开始setTimeout  500
    300完成之后立即调用剩余事件（list中剩余的函数），此时list只剩下f3了 
    因为f3为100，300+100<500，故当并发数为2时，结果为1 3 2
*/

function queue(list, count) {
  //2.延续请求
  function reqNextOne() {
    if (list.length) {
      var curTask = list.shift();
      curTask(reqNextOne);
    }
  }
  //1.并发开始
  var i = 0;
  while (list.length && i < count) {
    list.shift()(reqNextOne);
    i++;
  }
}
