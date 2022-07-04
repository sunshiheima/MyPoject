var delateNode = function (head, node) {
  //删除的节点不是尾部节点，将next节点覆盖当前节点
  var current = head;
  //方法一：
  while (current !== node) {
    current = current.next;
  }
  //此时current指针指向node
  current.val = current.next.val;
  current.next = current.next.next;
  //方法二：
  while (current.next !== node) {
    current = current.next;
  }
  current.next = current.next.next;

  //删除的节点是尾部节点且等于头节点（即只剩下一个节点），
};

let xhr = new XMLHttpRequest();
//监听状态
xhr.onreadystatechange = () => {
  if (xhr.readystate === 4) {
    xhr.status === 200 && console.log(xhr.responseText);
  }
};
//打开请求
xhr.open("GET", "http://...");
//发送请求
xhr.send();

//-----------------
let xhr = new XMLHttpRequest();
//监听状态
xhr.onreadystatechange = () => {
  if (xhr.readystate === 4) {
    xhr.status === 200 && console.log(xhr.responseText);
  }
};
//打开请求
xhr.open("GET", "http://...");
//发送请求
xhr.send();

//-----------------
const api = "http://...";
const formData = new FormData();
formData.append("xxx", "xxx");
fetch(api, {
  method: "POST",
  body: formData,
})
  .then((res) => res.json())
  .then((json) => console.log(json));

const api = "http://...";
const formData = new FormData();
formData.append("xxx", "xxx");
fetch(api, {
  method: "POST",
  body: formData,
});

const api = "http://xxx";
fetch(api, {
  method: "POST",
  body: JSON.stringify({
    xxx: "xxx",
    xxx: "xxx",
  }),
  headers: new Headers({
    "Content-Type": "application/json",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

const api = "http://...";
fetch(api, {
  method: "POST",
  body: {
    xxx: "xxx",
    xxx: "xxx",
  },
  headers: new Headers({
    "Content-Type": "application/json",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

//------------------

//定义回调函数
const handleResponse = (data) => {
  console.log(data);
};
//构造script标签
let script = document.createElement("script");
script.src = "http://.../search?q=javascript&count=1&callback=handleResponse";
//向document中添加script标签，并且发送GET请求
document.body.appendChild(script);

//---------------------
const handleResponse = (data) => {
  console.log(data);
};
let script = document.createElement("script");
script.src = "http://.../q=javascript&count=1&callback=handleResponse";
document.body.appendChild(script);
document.body.appendChild(script);

class MyPromise {
  constructor(executor) {
    this._resolveQueue = [];
    this._rejectQueue = [];
    let _resolve = (val) => {
      if (this._resolveQueue.length) {
        const callback = this._resolveQueue.shift();
        callback(val);
      }
    };
    let _reject = (val) => {
      if (this._rejectQueue.length) {
        const callback = this._rejectQueue.shift();
        callback(val);
      }
    };
    executor(_resolve, _reject);
  }
  then = (resolveFn, rejectFn) => {
    this._resolveQueue.push(resolveFn);
    this._rejectQueue.push(rejectFn);
  };
}

const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("result");
  }, 1000);
});
p1.then((res) => console.log(res)); //已测试，一秒后输出"result"

/*
bind和call/apply：本质都是改变this的指向
不同点是：bind是返回一个新的函数，而call/apply是直接调用函数（call跟apply就只有参数上的不同）

bind实现注意：
  函数作为构造函数用new关键字调用时，不应该改变其this指向，因为【new绑定】的优先级高于【显式绑定】和【硬绑定】
  从bind源码中可以发现，bind实则是用call实现的
call实现注意：
  调用时：func1.call(obj, 1, 2, 3)，所以如果call只是一个普通方法，call内部的this原本是指向fun1的
  现在我们的目的是将fun1内部的this指向obj
  1.obj = {
    xxx: xxx,
    func1: ...
  }
  2.通过obj.func1()的形式来调用fun1，func1内部的this就指向obj了
apply：
  同call
*/

//func1.call(obj, 1, 2, 3) //所以mybind内部的this原本是指向fun1的；现在我们的目的是将fun1内部的this指向obj
Function.prototype.mycall = function (thisArg) {
  if (typeof this !== "function") {
    throw new TypeError("Call must be called on a function!");
  }
  //声明一个symbol属性，防止fn名称被占用
  const fn = Symbol("fn");
  const args = [...arguments].slice(1);
};

class MyPromise {
  constructor(executor) {
    this._resolveQueue = [];
    this._rejectQueue = [];

    _resolve = (val) => {
      if (this._resolveQueue.length) {
        const callback = this._resolveQueue.shift();
        callback(val);
      }
    };

    _reject = (val) => {
      if (this._rejectQueue.length) {
        const callback = this._rejectQueue.shift();
        callback(val);
      }
    };

    executor(_resolve, _reject);
  }

  then(resolveFn, rejectFn) {
    this._resolveQueue.push(resolveFn);
    this._rejectQueue.push(rejectFn);
  }
}

//func1.bind(obj, 1, 2, 3) 原本bind内部的this是指向func1的，但是现在我们的目标是让func1内部的this指向obj
Function.prototype.mybind = function (thisArg) {
  //此处this是func1
  if (typeof this !== "function") {
    throw TypeError("bind must be called on a function");
  }
  //取得其他参数1,2,3
  let args = Array.prototype.slice.call(arguments, 1);
  //保存原型
  let nop = function () {};
  if (this.prototype) {
    nop.prototype = this.prototype;
  }
  //保存this，返回bound
  let self = this;
  let bound = function () {
    //func1.call(obj,...)
    return self.apply(
      this instanceof nop ? this : thisArg,
      args.concat(Array.prototype.slice.call(arguments))
    );
  };
  //修正原型
  bound.prototype = new nop();
  //返回bound
  return bound;
};

//检测
const func1 = function () {
  console.log(this.name, arguments);
};
func1.prototype.name = "func1";
obj = {
  name: "obj",
};
let bound = func1.mybind(obj, 1, 2, 3);
new bound(4, 5);
bound(4, 5);

//func1.mycall(obj, 1, 2, 3) 原本mycall内的this是指向func1的，现在目标是将func1内部的this指向obj
Function.prototype.mycall = function (thisArg) {
  //this为func1
  if (typeof this !== "function") {
    throw TypeError("mycall must be called on Function");
  }
  //取得参数
  let args = Array.prototype.slice.call(arguments, 1);
  //let args = [...arguments].slice(1);
  //令obj[fn] = func1
  thisArg = thisArg || window;
  let fn = Symbol("fn");
  thisArg[fn] = this;
  //通过obj调用方法
  let result = thisArg[fn](...args);
  delete thisArg[fn];
  return result;
};

//检测
const func1 = function () {
  console.log(this.name, arguments);
};
let obj = {
  name: "obj",
};
func1.mycall(obj, 1, 2, 3);

//func1.apply(obj, [1,2,3]) 原本myapply内部的this指向func1，目标是将func1内部的this指向obj(即obj.func1())
Function.prototype.myapply = function (thisArg) {
  //this为func1
  if (typeof this !== "function") {
    throw TypeError("myapply must be called on Function");
  }
  //取得其他参数
  let args = arguments[1];
  //令obj[fn] = func1
  thisArg = thisArg || window;
  let fn = Symbol("fn");
  thisArg[fn] = this;
  //通过obj来调用该方法，得到结果，删除方法，返回结果
  let result = thisArg[fn](...args);
  delete thisArg[fn];
  return result;
};

//检测
const func1 = function () {
  console.log(this.name, arguments);
};
let obj = {
  name: "obj",
};
func1.myapply(obj, [1, 2, 3]); //已通过，结果为obj arguments[1,2,3]

function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1; j++) {
      var cur = arr[j];
      var next = arr[j + 1];
      if (cur > next) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
bubbleSort([5, 3, 2, 4, 1]);

function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let flag = false;
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }
    if (flag === false) {
      return arr;
    }
  }
  return arr;
}
bubbleSort([5, 3, 2, 4, 1]);

function selectSort(arr) {
  const len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    let from = i;
    let to = len;
    let minIndex = i; //最初我们将arr[i]（即范围当中的第一个数）定位最小值
    for (let j = from; j < to; j++) {
      if (arr[j] < arr[i]) {
        minIndex = j;
      }
    }
    [arr[from], arr[minIndex]] = [arr[minIndex], arr[from]];
  }
  return arr;
}
selectSort([5, 4, 3, 2, 1]);

function insertSort(arr) {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    let base = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > base) {
        arr[j + 1] = arr[j];
      } else {
        arr[j + 1] = base;
      }
    }
  }
  return arr;
}
insertSort([5, 4, 3, 2, 1]);

function dailyTemperatures(arr) {
  let res = [];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let count = 0;
    let flag = false;
    for (let j = i; j < len; j++) {
      if (arr[j] > arr[i]) {
        res.push(count);
        flag = true;
        break;
      }
      count++;
    }
    if (!flag) {
      res.push(0);
    }
  }
  return res;
}
dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);

const dailyTemperatures = function (arr) {
  let len = arr.length;
  let stack = [0];
  //初始化结果数组，使长度为温度数组的长度，每位都初始化为0
  let res = [];
  for (let i = 0; i < len; i++) {
    res[i] = 0;
  }
  for (let i = 1; i < len; i++) {
    while (arr[i] > arr[stack[stack.length - 1]]) {
      let topIndex = stack.pop();
      res[topIndex] = i - topIndex;
    }
    stack.push(i);
  }
  return res;
};
dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);

function maxSlidingWindow(nums, k) {
  let res = [];
  let deque = [];
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    //比较当前元素与队尾元素，维护递减队列
    while (nums[i] > deque[deque.length - 1]) {
      deque.pop();
    }
    deque.push(nums[i]);
    //从遍历到了第三个元素开始，每遍历一个元素都要：将最大值取出放进结果数组；
    //从遍历到第四个元素开始，每遍历一个元素都要：更新递减队列
    if (i >= k - 1) {
      res.push(deque[0]);
      if (i > k - 1 && nums[i - k] === deque[0]) {
        deque.shift();
      }
    }
  }
  return res;
}
maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);

function TreeBFS(root) {
  var queue = [];
  queue.push(root);
  while (queue.length) {
    var top = queue.shift();
    //中->左->右
    console.log(top.val);
    if (top.left) {
      queue.push(top.left);
    }
    if (top.right) {
      queue.push(top.right);
    }
  }
}
const root = {
  val: "A",
  left: { val: "B", left: { val: "D" }, right: { val: "E" } },
  right: { val: "C", right: { val: "F" } },
};
console.log(TreeBFS(root));

function bubbleSort(arr) {
  var len = arr.length;
  //外层循环：规定循环多少次
  for (var i = 0; i < len; i++) {
    var flag = false;
    //内层循环，比较相邻的两个元素
    for (var j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }
    if (flag === false) {
      return arr;
    }
  }
  return arr;
}
bubbleSort([4, 3, 2, 1]);

function bubbleSort(arr) {
  var len = arr.length;
  //外层循环，决定进行多少轮操作
  for (var i = 0; i < len; i++) {
    var flag = false;
    //内层循环，彼此比较两个相邻的元素
    for (var j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }
    if (flag === false) {
      return arr;
    }
  }
  return arr;
}
bubbleSort([4, 3, 2, 1]);

function selectSort(arr) {
  var len = arr.length;
  //外层循环，决定进行多少轮操作
  for (var i = 0; i < len - 1; i++) {
    var minIndex = i;
    //内层循环，在当前范围内找出最小值
    for (var j = i; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}
selectSort([4, 3, 2, 1]);

function selectSort(arr) {
  var len = arr.length;
  //外层循环，决定进行多少轮操作
  for (var i = 0; i < len; i++) {
    var minIndex = i;
    //内层循环，确定当前范围，并找出最小值，放到当前范围的头部
    for (var j = i; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}
selectSort([4, 3, 2, 1]);

function insertSort(arr) {
  var len = arr.length;
  //外层循环：确定待插入的元素
  for (var i = 1; i < len; i++) {
    var base = arr[i];
    //内层循环，从后往前查找正确的位置(循环让位)
    var j = i;
    while (j > 0 && arr[j - 1] > base) {
      arr[j] = arr[j - 1];
      j--;
    }
    //到此就j就是正确的位置了
    arr[j] = base;
  }
  return arr;
}
insertSort([4, 3, 2, 1]);

function insertSort(arr) {
  var len = arr.length;
  //外层循环：确定待插入的元素
  for (var i = 1; i < len; i++) {
    var base = arr[i]; //待插入的元素
    //内层循环：在其前面那个序列中找到正确的插入位置(循环让位)
    var j = i;
    while (j > 0 && arr[j - 1] > base) {
      arr[j] = arr[j - 1];
      j--;
    }
    //到此，j就为正确的插入位置
    arr[j] = base;
  }
  return arr;
}
insertSort([4, 3, 2, 1]);
