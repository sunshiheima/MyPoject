/*
https://juejin.im/book/6844733800300150797/section/6844733800354709511（注意文中思路描述有点儿问题，以我下面写法一描述为准）

题目：
  给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
要求：
  1.左括号必须用相同类型的右括号闭合。
  2.左括号必须以正确的顺序闭合。
  空字符串可被认为是有效字符串
  
写法一思路：
  在遍历字符串的过程中，往栈里push括号对应的配对字符。比如如果遍历到了(，就往栈里push)

  在左括号全部入栈结束时，栈顶的那个左括号，就是第一个需要被配对的左括号。
  此时我们需要判断此时遇到的非左括号是否和此时栈顶的左括号配对，如果配对成功，那么这一对括号就是有效的，【否则直接return false】
  当栈顶的左括号被成功配对之后，就需要将其丢弃（即出栈，用stack.pop()即可）

  如果我们出栈到最后：
  1.栈不为空，那么意味着还有未配对的左括号，说明字符串中并非所有的括号都有效，return false
  2.栈为空，则说明所有左括号都配对成功了，return true

写法一（着重掌握这一种）
  在某些情况下，可以在遍历途中就判断字符串不符合条件，那么直接return false，无需遍历完整个字符串
  思路：
    1.我们用栈来保存未匹配的左括号（只会保存左括号，不会保存右括号），从左到右依次扫描字符串
    2.当扫描到左括号时，则将其压入栈中；当扫描到右括号时，从栈顶取出一个左括号
    3.看是否能够匹配，比如(和)匹配，若匹配则将栈顶括号弹出，若不匹配则该次不匹配足以能够证明字符串无效，直接return false
    4.看在字符串遍历完之后，若栈中无剩下的（左）括号了，则字符串有效，反之无效
写法二
  无论什么情况下都需要遍历完整个字符串
  思路：
  1.我们用栈来保存未匹配的左括号（也可能会保存右括号），从左到右依次扫描字符串
  2.当扫描到左括号时，则将其压入栈中；当扫描到右括号时，从栈顶取出一个左括号
  3.看是否能够匹配，比如(和)匹配，若匹配则将栈顶括号弹出，若不匹配则将当前括号压入栈中！
  4.看在字符串遍历完之后，若栈中无剩下的括号了（可能有左括号也可能有右括号），则字符串有效，反之无效

*/
// let isValid = function(s){

// }
// console.log(isValid("({[]})(){}[]{{}}"));

let isValid = function (s) {
  var len = s.length;
  if (!s) return true;
  if (len % 2 === 1 || [")", "]", "}"].indexOf(s[0]) !== -1) {
    return false;
  }
  //
  var stack = [];
  var leftToRight = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (var i = 0; i < len; i++) {
    //为左括号则压入栈
    var now = s[i];
    if (now === "(" || now === "[" || now === "{") {
      stack.push(leftToRight[now]);
    } else {
      //为右括号
      if (!stack.length || now !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
console.log(isValid("({[]})(){}[]{{}}"));

//写法一
// 用一个 map 来维护左括号和右括号的对应关系
// const leftToRight = {
//   "(": ")",
//   "[": "]",
//   "{": "}",
// };
// const isValid = function (s) {
//   // 结合题意，空字符串无条件判断为 true
//   if (!s) {
//     return true;
//   }
//   // 初始化 stack 数组
//   const stack = [];
//   // 缓存字符串长度
//   const len = s.length;
//   // 遍历字符串
//   for (let i = 0; i < len; i++) {
//     // 缓存单个字符
//     const ch = s[i];
//     // 判断是否是左括号，这里我为了实现加速，没有用数组的 includes 方法，直接手写判断逻辑
//     if (ch === "(" || ch === "{" || ch === "[") stack.push(leftToRight[ch]);
//     // 若不是左括号，则必须是和栈顶的左括号相配对的右括号
//     else {
//       // console.log("s[i]和stack.pop()", ch, stack.pop());
//       // console.log("比较", stack.pop() !== ch);
//       // 若栈不为空，且栈顶的左括号没有和当前字符匹配上，那么判为无效
//       if (!stack.length || stack.pop() !== ch) {
//         return false;
//       }
//     }
//   }
//   // 若所有的括号都能配对成功，那么最后栈应该是空的
//   return !stack.length;
// };
// console.log(isValid("({[]})(){}[]{{}}"));

//写法二
// let isValid = function (s) {
//   let len = s.length;
//   //如果是空字符串符合，若长度为奇数||右括号开头肯定不符合
//   if (!s) return true;
//   if (len % 2 !== 0 || [")", "]", "}"].indexOf(s[0]) !== -1) {
//     return false;
//   }
//   //创建一个栈
//   const stack = [s[0]]; //区别！
//   const leftToRight = {
//     ")": "(",
//     "]": "[",
//     "}": "{",
//   };
//   //区别！
//   for (let i = 1; i < len; i++) {
//     //取出栈顶元素
//     let length = stack.length;
//     let top = length > 0 ? stack[length - 1] : null;
//     //当前遍历到的括号
//     let now = s[i];
//     //看当前括号与栈顶括号是否匹配，若匹配则将栈顶括号弹出，若不匹配则将当前括号压入栈中！
//     if (leftToRight[now] === top) {
//       stack.pop();
//     } else {
//       stack.push(now);
//     }
//   }
//   return stack.length === 0;
// };
