// --------------------------------------

function EventQueue(delay) {
  this._delay = delay;
  this._queue = [];
}
EventQueue.prototype.add = function (excutor, params) {
  this._queue.push({
    excutor: excutor,
    params: params,
  });
  this.start();
};
EventQueue.prototype.start = function () {
  if (this._delay <= 0) {
    this.process;
  } else {
    var self = this;
    setTimeout(function () {
      self.process();
    }, self._delay);
  }
};
EventQueue.prototype.process = function () {
  var item = this._queue.shift();
  if (item) {
    var self = this;
    item.excutor(item.params, function () {
      self.process();
    });
  }
};

var eventQueue = new EventQueue(1000); //传入1000ms
eventQueue.add(
  //此任务会被添加到queue中，会在1000ms之后调用process方法
  function (params) {
    params.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  },
  [1, 2, 3, 4]
);
eventQueue.add(function (params) {
  //此任务会被添加到queue中，会在1000ms之后调用process方法
  params.reduce((acc, cur) => {
    return acc * cur;
  }, 1);
});

//process方法被调用之后做的事情就是：从任务队列中取出任务
