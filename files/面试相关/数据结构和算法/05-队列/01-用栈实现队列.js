/*
https://juejin.im/book/6844733800300150797/section/6844733800358871054

用栈实现队列

分析：
    栈和队列的区别在哪里？栈，后进先出；队列，先进先出。即两者的进出顺序其实是反过来的
    用栈实现队列，说白了就是用栈来实现先进先出的效果，再说直接点，就是想办法【让栈底的元素首先被取出，也就是让出栈序列被逆序】

    栈结构决定了栈底元素只能被死死的压在最底下，如何使它首先被取出了？
    【一个栈做不到的事情，我们用两个栈来做】

思路：
    stack1为主栈，stack2为辅助栈
    1.让stack1中的元素按顺序出栈，然后入栈到stack2里去
    2.当stack2为空，stack1不为空时，我们需要继续把stack1中的元素转移到stack2中，然后再从stack2里取元素。
    也就是说，所有的出队操作都只能依赖stack2来完成 —— 只要我们坚持这个原则，就可以确保stack1里的元素都能够按照正确的顺序（逆序）出栈
*/

// const MyQueue = function(){

// }
// MyQueue.prototype.push = function(x){

// }
// MyQueue.prototype.pop = function(){

// }
// MyQueue.prototype.peek = function(){

// }
// MyQueue.prototype.empty = function(){

// }

const MyQueue = function () {
  this.stack = [];
  this.stack2 = [];
};
MyQueue.prototype.push = function (x) {
  this.stack.push(x);
};
MyQueue.prototype.pop = function () {
  if (this.stack2.length <= 0) {
    while (this.stack.length) {
      this.stack2.push(this.stack.pop());
    }
  }
  return this.stack2.pop();
};
MyQueue.prototype.peek = function () {
  if (this.stack2.length <= 0) {
    while (this.stack.length) {
      this.stack2.push(this.stack.pop());
    }
  }
  return this.stack2.length && this.stack2[this.stack2.length - 1];
};
MyQueue.prototype.empty = function () {
  return !this.stack.length && !this.stack2.length;
};

//初始化构造函数
const MyQueue = function () {
  //初始化两个栈
  this.stack1 = [];
  this.stack2 = [];
};

MyQueue.prototype.push = function (x) {
  //直接调用数组的push方法
  this.stack1.push(x);
};

MyQueue.prototype.pop = function () {
  //假如stack2为空，需要将stack1的元素转移进来
  if (this.stack2.length <= 0) {
    //当stack1不为空时出栈，入栈到stack2
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop());
    }
  }
  //为了达到逆序的目的，我们只能从stack2里出栈元素(pop()可以一箭双雕，既会将栈顶元素删除，又会返回被删除的那个元素)
  return this.stack2.pop();
};

//peek和pop唯一的区别就是，没有将定位到的值出栈(peek用arr[arr.length-1]，pop用arr.pop())
MyQueue.prototype.peek = function () {
  if (this.stack2.length <= 0) {
    while (this.stack1.length !== 0) {
      this.stack1.push(this.stack1.pop());
    }
  }
  //缓存stack2的长度
  const stack2Len = this.stack2.length;
  //返回stack2的栈顶元素
  return stack2Len && this.stack2[stack2Len - 1];
};

MyQueue.prototype.empty = function () {
  //若stack1和stack2均为空，那么队列为空
  return !this.stack1.length && !this.stack2.length;
};
