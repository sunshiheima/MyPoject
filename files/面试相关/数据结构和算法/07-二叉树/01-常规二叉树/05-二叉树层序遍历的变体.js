/*
所谓变体，其实不过是在BFS的过程中围绕结果数组的内容做文章

题目：给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
示例：
    输入：二叉树：[3,9,20,null,null,15,7],
    返回其层次遍历结果：
        [
            [3],
            [9,20],
            [15,7]
        ]

分析：
和层次遍历的区别：只是要求我们对层序遍历结果进行【分层】
也就是说只要我们能在BFS的过程中感知到当前层级、同时用不同的数组把不同的层级分开，这道题就得解了！！！
如何做到？
我们在对二叉树进行层序遍历时，每一次 while 循环其实都对应着二叉树的某一层。
。只要我们在进入while循环之初，记录下这一层结点个数。然后将这个数量范围内的元素 push 进同一个数组，就能够实现二叉树的分层。
*/

// const levelOrder = function (root) {

// };
// const root = {
//   val: "A",
//   left: { val: "B", left: { val: "D" }, right: { val: "E" } },
//   right: { val: "C", right: { val: "F" } },
// };
// console.log(levelOrder(root));

// const levelOrder = function (root) {
//   const res = [];
//   // if (!root) {
//   //   return res;
//   // }
//   const queue = [];
//   queue.push(root);
//   while (queue.length) {
//     const level = [];
//     const len = queue.length;
//     //用于将遍历到的当前层元素装入level当中（注意是从队尾放入的，而从对头取出的，所以实则是以怎样的顺序放入队列的，就是以怎样的顺序取出来放入level的）
//     for (var i = 0; i < len; i++) {
//       //取栈顶元素
//       var top = queue.shift();
//       level.push(top.val);
//       //将top能够遍历到的所有元素（即下一层的元素）都放到队列中去。所以下一层的元素个数直接决定了下一次for循环要执行次（相等的关系），这样就能将下一层的元素依次放入level当中了。
//       if (top.left) {
//         queue.push(top.left);
//       }
//       if (top.right) {
//         queue.push(top.right);
//       }
//     }
//     res.push(level);
//   }
//   return res; //[ [ 'A' ], [ 'B', 'C' ], [ 'D', 'E', 'F' ] ]
// };
// const root = {
//   val: "A",
//   left: { val: "B", left: { val: "D" }, right: { val: "E" } },
//   right: { val: "C", right: { val: "F" } },
// };
// console.log(levelOrder(root));

//emmm没看懂，也还没来得及把demo带进去看代码的执行流程（之后再带demo理解吧~~~）
// const levelOrder = function (root) {
//   // 初始化结果数组
//   const res = [];
//   // 处理边界条件
//   if (!root) {
//     return res;
//   }
//   // 初始化队列
//   const queue = [];
//   // 队列第一个元素是根结点
//   queue.push(root);
//   // 当队列不为空时，反复执行以下逻辑
//   while (queue.length) {
//     // level 用来存储当前层的结点
//     const level = [];
//     // 缓存刚进入循环时的队列长度，这一步很关键，因为队列长度后面会发生改变
//     const len = queue.length;
//     // 循环遍历当前层级的结点
//     for (let i = 0; i < len; i++) {
//       // 取出队列的头部元素
//       const top = queue.shift();
//       // 将头部元素的值推入 level 数组
//       level.push(top.val);
//       // 如果当前结点有左孩子，则推入下一层级
//       if (top.left) {
//         queue.push(top.left);
//       }
//       // 如果当前结点有右孩子，则推入下一层级
//       if (top.right) {
//         queue.push(top.right);
//       }
//     }
//     // 将 level 推入结果数组
//     res.push(level);
//   }
//   // 返回结果数组
//   return res;
// };
