/*
https://juejin.im/book/6844733800300150797/section/6844733800354709511

栈问题进阶：每日温度问题
题目描述：根据每日气温列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。
例如：给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。
提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。

代码：
写法一：暴力法，两层遍历，时间复杂度为O(n^2)
写法二：改进之后，自己按照文章思路写的，时间复杂度为O(n)
写法三：改进之后，文中的实现

其中写法二和写法三差不多，只是文中写的代码比我自己的规范一些，重点掌握写法三！

*/
// const dailyTemperatures = function (T) {

// };
// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

const dailyTemperatures = function (T) {
  var len = T.length;
  var res = new Array(len).fill(0);
  var stack = [];
  for (var i = 0; i < len; i++) {
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      var top = stack.pop();
      res[top] = i - top;
    }
    stack.push(i);
  }
  return res;
};
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

//写法三：文中写的改进版
// 入参是温度数组
// const dailyTemperatures = function (T) {
//   const len = T.length; // 缓存数组的长度
//   const stack = []; // 初始化一个栈
//   const res = new Array(len).fill(0); //  初始化结果数组，注意数组定长，占位为0
//   //正式开始遍历温度数组
//   for (let i = 0; i < len; i++) {
//     // 若栈不为0，且存在打破递减趋势的温度值
//     while (stack.length && T[i] > T[stack[stack.length - 1]]) {
//       // 将栈顶温度值对应的索引出栈
//       const top = stack.pop();
//       // 计算 当前栈顶温度值与第一个高于它的温度值 的索引差值
//       res[top] = i - top;
//     }
//     // 注意栈里存的不是温度值，而是索引值，这是为了后面方便计算
//     stack.push(i);
//   }
//   // 返回结果数组
//   return res;
// };

//写法一：暴力法，两层遍历
// function dailyTemperatures(arr) {
//   let res = [];
//   const len = arr.length;
//   for (let i = 0; i < len; i++) {
//     let count = 0;
//     let flag = false;
//     for (let j = i; j < len; j++) {
//       if (arr[j] > arr[i]) {
//         res.push(count);
//         flag = true;
//         break;
//       }
//       count++;
//     }
//     if (!flag) {
//       res.push(0);
//     }
//   }
//   return res;
// }
// dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);

//写法二：自己按照文中思路写的改进版
// const dailyTemperatures = function (arr) {
//   let len = arr.length;
//   let stack = [0];
//   //初始化结果数组，使长度为温度数组的长度，每位都初始化为0
//   let res = [];
//   for (let i = 0; i < len; i++) {
//     res[i] = 0;
//   }
//   //正式开始遍历温度数组
//   for (let i = 1; i < len; i++) {
//     while (arr[i] > arr[stack[stack.length - 1]]) {
//       let topIndex = stack.pop();
//       res[topIndex] = i - topIndex;
//     }
//     stack.push(i);
//   }
//   return res;
// };
// dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
