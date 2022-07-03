/*
https://juejin.im/book/6844733800300150797/section/6844733800354709511

我们的目标：将原实现中getMin()的时间复杂度O(n)变为O(1)
注意：时间复杂度的提升，从来都不是白嫖，它意味着我们要付出更多的空间占用作为代价。
思路：
  【实则就是把getMin的工作提前到入栈push的时候】【当然出栈pop也添加了相关逻辑，这是因为在出栈之后可能需要更新最小值】【当然实现前面两个目标的前提是我们需要另外一个栈做辅助】
  额外维护一个栈作为辅助，让这个栈去容纳当前的最小值，实则这个栈总是【从栈底到栈顶呈递减趋势的栈】
  1.将min_stack中的元素初始化为第一个入主栈的元素
  2.当push元素时，判断该元素是否小于min_stack的栈顶元素，如果小于则入主栈的同时入min_stack，否则只入主栈不入min_stack
  3.这样min_stack就是【从栈底到栈顶呈递减趋势的栈】，我们的getMin方法总是返回min_stack的栈顶元素即可
  4.当pop元素时，判断该元素是否等于min_stack的栈顶元素相等（即现在要出栈的是当前栈中的最小元素），如果相等则min_stack也需要pop（代表更新栈最小值）
*/

// const MinStack = function(){

// };
// MinStack.prototype.push = function(x){

// };
// MinStack.prototype.pop = function(){

// };
// MinStack.prototype.top = function(){

// };
// MinStack.prototype.getMin = function(){

// };

const MinStack = function () {
  this.stack = [];
  this.min_stack = [];
};
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  if (
    !this.min_stack.length ||
    x <= this.min_stack[this.min_stack.length - 1]
  ) {
    this.min_stack.push(x);
  }
};
MinStack.prototype.pop = function () {
  var top = this.stack.pop();
  if (top === this.min_stack[this.min_stack.length - 1]) {
    this.min_stack.pop();
  }
};
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};
MinStack.prototype.getMin = function () {
  return this.min_stack[this.min_stack.length - 1];
};

//原实现(getMin方法使通过遍历一次栈取得栈中最小值的，时间复杂度为O(n))
const MinStack = function () {
  this.stack = [];
};
MinStack.prototype.push = function (x) {
  this.stack.push(x);
};
MinStack.prototype.pop = function () {
  this.stack.pop();
};
MinStack.prototype.top = function () {
  let stack = this.stack;
  if (!stack || !stack.length) return;
  return stack[stack.length - 1];
};
MinStack.prototype.getMin = function () {
  let minValue = Infinity;
  const stack = this.stack; //或者const {stack} = this
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] < minValue) {
      minValue = stack[i];
    }
  }
  return minValue;
};

//最小栈实现（使得getMin方法的时间复杂度为O(1))
let MinStack = function () {
  this.stack = [];
  this.min_stack = [];
};
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  //初始化 或 当有更小值入栈时，将当前值入最小栈中
  if (
    this.min_stack.length === 0 ||
    this.min_stack[this.min_stack.length - 1] >= x
  ) {
    this.min_stack.push(x);
  }
};
MinStack.prototype.pop = function () {
  //当出栈值 === 当前最小值时，最小栈的值也要删掉，最小栈自然更新为前一步的最小值
  if (this.stack.pop() === this.min_stack[this.min_stack.length - 1]) {
    this.min_stack.pop();
  }
};
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
  //返回与当前基站同步的最小栈的栈顶元素，即为最小值
  return this.min_stack[this.min_stack.length - 1];
};
