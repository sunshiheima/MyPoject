function getMaxFilmCost(film) {
  // write code here
  var map = {
    A: 10,
    B: 25,
    C: 5,
    D: 15,
    E: 40,
    F: 30,
  };
  var len = film.length;
  var max = 0;
  //求出每一部电影所需成本
  for (var i = 0; i < len; i++) {
    var base = film[i];
    var actorLen = base.length;
    var money = 0;
    //某部电影的成本
    for (var j = 0; j < actorLen; j++) {
      money += map[base[j]];
    }
    console.log(money);
    if (money > max) {
      max = money;
    }
  }
  return max;
}
// console.log(
//   getMaxFilmCost([
//     ["A", "B", "C"],
//     ["B", "E"],
//   ])
// );

function getMinDistance(arrs) {
  // write code here
  var len = arrs.length;
  var min = Infinity;
  for (var i = 0; i < len - 1; i++) {
    var base = arrs[i];
    for (var j = i + 1; j < len; j++) {
      var cur = arrs[j];
      var distance =
        (base[0] - cur[0]) * (base[0] - cur[0]) +
        (base[1] - cur[1]) * (base[1] - cur[1]);
      if (distance < min) {
        min = distance;
      }
    }
  }
  return Math.sqrt(min);
}
console.log(
  getMinDistance([
    [0, 0],
    [0, 4],
    [3, 0],
  ])
);

console.log(Math.round(4.6));

class mypromise {
  constructor(executor) {
    this._resolveQueue = [];
    this._rejectQueue = [];
    let _resolve = (val) => {
      if (this._resolveQueue.length) {
        var fn = this._resolveQueue.shift();
        fn(val);
      }
    };
    let _reject = (val) => {
      if (this._rejectQueue.length) {
        var fn = this._resolveQueue.shift();
        fn(val);
      }
    };
    executor(_resolve, _reject);
  }
  then = (resolveFn, rejectFn) => {
    this._resolveQueue.push(resolveFn);
    this._rejectQueue.push(rejectFn);
  };
}
new mypromise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 1000);
}).then(function (res) {
  console.log(res);
});

class mypromise {
  constructor(executor) {
    this._resolveQueue = [];
    this._rejectQueue = [];
    let _resolve = (val) => {
      if (this._resolveQueue.length) {
        let callback = this._resolveQueue.shift();
        callback(val);
      }
    };
    let _reject = (val) => {
      if (this._rejectQueue.length) {
        let callback = this._rejectQueue.shift();
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
new mypromise(function (resolve, reject) {
  setTimeout(function () {
    console.log(1);
  }, 1000);
}).then((res) => {
  console.log(res);
});

function stringify(obj) {
  let res = Object.keys.map((key) => {
    return key + "=" + obj[key];
  });
  return res.join("&");
}

function stringify(obj) {
  let res = Object.keys(obj).map((prop) => {
    return prop + "=" + obj[prop];
  });
  return res.join("&");
}
var obj = { a: 1, b: 2 };
stringify(obj);

function stringify(obj) {
  var res = Object.keys(obj).map((key) => {
    return key + "=" + obj[key];
  });
  return res.join("&");
}
var obj = { a: 1, b: 2 };
stringify(obj);

function sum(...urls) {
  //urls为一个数组
  let arr = urls.map((url) => {
    return new Promise((resolve, reject) => {
      ajax(url).onload = function (val) {
        resolve(val);
      };
    });
  });
  let res = 0;
  Promise.all(arr).then((vals) => {
    vals.forEach((val) => (res += val));
  });
  return res;
}

function sums(...urls) {
  let arr = urls.map((url) => {
    new Promise(function (resolve, reject) {
      ajax(url).onload = function (val) {
        resolve(val);
      };
    });
  });
  let res = 0;
  Promise.all(arr).then((vals) => {
    vals.forEach((val) => (res += val));
  });
}

//{a:1, b:2} => "a=1&b=2"
function stringify(obj) {
  var res = Object.keys(obj).map((key) => {
    return key + "=" + obj[key];
  });
  return res.join("&");
}
var obj = { a: 1, b: 2 };
stringify(obj);

function sum(...urls) {
  var arr = urls.map((url) => {
    return new Promise((resolve, reject) => {
      Ajax(url).onload = function (val) {
        resolve(val);
      };
    });
  });
  let res = 0;
  Promise.all(arr).then((vals) => {
    vals.forEach((val) => (res += vals));
  });
  return res;
}

function sum(...urls) {
  var arr = urls.map((url) => {
    return new Promise((resolve, reject) => {
      Ajax(url).onload = function (val) {
        resolve(val);
      };
    });
  });
  var res = 0;
  Promise.all(arr).then((vals) => {
    vals.forEach((val) => (res += val));
  });
  return res;
}

//"a=1;b=2;c=true"
const parse = (str) => {
  var res = {};
  var arr = str.split(";");
  //["a=1", "b=2", "c=true"]
  arr.map((item) => {
    var tempArr = item.split("=");
    var key = tempArr[0];
    var value = tempArr[1];
    switch (value) {
      case "true":
        res[key] = true;
        break;
      case "false":
        res[key] = false;
        break;
      default:
        res[key] = value;
        break;
    }
  });
  return res;
};
var str = "a=1;b=2;c=true";
parse("a=1;b=2;c=true");

class EventEmitter {
  constructor() {
    //用于存储事件与回调之间的对应关系
    this.handlers = {};
  }
  //on方法用于安装事件监听器，接收事件名车和回调函数作为参数
  on(eventName, cb) {
    if (!this.handlers[eventName]) {
      this.handlers[eventName] = [];
    }
    this.handlers[eventName].push(cb);
  }
  //emit方法用于触发事件
  emit(eventName, ...args) {
    if (this.handlers[eventName].length) {
      this.handlers[eventName].map((callback) => {
        callback(...args);
      });
    }
  }
  //移除某个事件回调队列里的指定回调函数
  off(eventName, cb) {
    const callbacks = this.handlers[eventName];
    const index = callbacks.indexOf(cb);
    if (cb !== -1) {
      callback.splice(index, 1);
    }
  }
  //为事件注册单次事件监听器
  once(eventName, cb) {
    //对回调函数进行包装，使其执行完毕自动被移除
    const wrapper = (...args) => {
      cb.apply(...args);
      this.off(eventName, wrapper);
    };
    this.on(eventName, wrapper);
  }
}

class EventEmitter {
  constructor() {
    this.handlers = {};
  }
  //注册事件，接收事件名称和回调函数
  on = (eventName, cb) => {
    if (!this.handlers[eventName]) {
      this.handlers[eventName] = [];
    }
    this.handlers[eventName].push(cb);
  };
  //触发事件，接收事件名称
  emit = (eventName, ...args) => {
    if (this.handlers[eventName].length) {
      this.handlers[eventName].map((callback) => {
        callback(...args);
      });
    }
  };
  //移除某事件的某回调函数
  off = (eventName, cb) => {
    var callbacks = this.handlers[eventName];
    var index = callbacks.indexOf(cb);
    if (index !== -1) {
      callbacks.splice(index, 1);
    }
  };
}
