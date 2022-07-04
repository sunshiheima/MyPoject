/*
https://juejin.im/book/6844733800300150797/section/6844733800358871048

题目：
    给定一个没有重复数字的序列，返回其所有可能的全排列。
示例：
    输入[1,2,3]
    输出[[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]

递归式做的事情（即在“填坑”过程中重复做的事情）
1.检查手里剩下的数字有哪些
2.选取其中一个填进当前的坑里

递归边界（重复的终点）的选择：
1.这个重复递归式的动作一直持续到了最后一个数字也被填进坑里为止
或2.因为坑的数量是一定的，所以把第一个坑的索引设置为0，那么索引为n的坑是不存在的，就到达递归边界了

全排列问题真的不是人能够创造出来的递归代码。。。记忆即可！！！
我已经在大脑中模拟了一遍代码的执行流程（即递归过程中函数的入栈、出栈过程）
（开始没有模拟清楚，可以先将permute函数执行结果中的数组结合着看，就发现了执行顺序了）
这个理解很重要的就是，知道【什么时候函数该压入栈中，尤其注意此时函数作用域(尤其注意变量)也一同被保存了】
最终发现这个执行过程真的就和“二叉树先序遍历”的回退顺序差不多，图中画的那个图可以看作是三叉树，模拟“二叉树先序遍历过程”，想一下“三叉树先序遍历过程”
这个“三叉树先序遍历过程”就是该代码的执行过程！！！

*/

//全排列
const permute = function (nums) {
  const len = nums.length;
  const curr = [];
  const res = [];
  const visited = {};
  function dfs(nth) {
    if (nth === len) {
      res.push(curr.slice());
      return;
    }
    for (let i = 0; i < len; i++) {
      if (!visited[nums[i]]) {
        visited[nums[i]] = 1;
        curr.push(nums[i]);
        dfs(nth + 1);
        curr.pop();
        visited[nums[i]] = 0;
      }
    }
  }
  dfs(0);
  return res;
};
console.log(permute([1, 2, 3]));

// 入参是一个数组
// const permute = function (nums) {
//   // 缓存数组的长度
//   const len = nums.length;
//   // curr 变量用来记录当前的排列内容
//   const curr = [];
//   // res 用来记录所有的排列顺序
//   const res = [];
//   // visited 用来避免重复使用同一个数字
//   const visited = {};
//   // 定义 dfs 函数，入参是坑位的索引（从 0 计数）
//   function dfs(nth) {
//     // 若遍历到了不存在的坑位（第 len+1 个），则触碰递归边界返回
//     if (nth === len) {
//       // 此时前 len 个坑位已经填满，将对应的排列记录下来
//       res.push(curr.slice());
//       return;
//     }
//     // 检查手里剩下的数字有哪些
//     for (let i = 0; i < len; i++) {
//       // 若 nums[i] 之前没被其它坑位用过，则可以理解为“这个数字剩下了”
//       if (!visited[nums[i]]) {
//         // 给 nums[i] 打个“已用过”的标
//         visited[nums[i]] = 1;
//         // 将nums[i]推入当前排列
//         curr.push(nums[i]);
//         // 基于这个排列继续往下一个坑走去
//         dfs(nth + 1);
//         // nums[i]让出当前坑位
//         curr.pop();
//         // 下掉“已用过”标识
//         visited[nums[i]] = 0;
//       }
//     }
//   }
//   // 从索引为 0 的坑位（也就是第一个坑位）开始 dfs
//   dfs(0);
//   return res;
// };
// permute([1, 2, 3]);
