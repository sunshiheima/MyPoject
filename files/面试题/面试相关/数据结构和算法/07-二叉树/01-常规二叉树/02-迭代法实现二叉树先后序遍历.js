/*
---------------------以下为先序-----------------------

分析：
迭代法进行【二叉树先序遍历】的根本思路：就是通过合理安排入栈和出栈的时机、使栈的出栈序列符合二叉树的前序遍历原则
先序遍历的规则是：先遍历根节点、然后遍历左孩子、最后遍历右孩子 —— 这正是我们所期望的出栈序列。
按道理，入栈序列和出栈序列相反，我们似乎应该按照“右->左->根”这样的顺序将节点入栈。
但是需要注意的是，我们遍历的起点就是根节点，难道我们要假装没看到这个根节点，一鼓作气找到最右侧节点之后才开始进行入栈操作吗？—— 不是！！！
实际的出入栈顺序：
1.将根节点入栈
2.取出栈顶节点，将节点值push进结果数组
3.若栈顶节点有右孩子，则将右孩子入栈
4.若栈顶节点有左孩子，则将左孩子入栈。

【简言之】：
要求res为[根, 左, 右]，则栈应为[右，左，根?]。 —— 栈中顺序应该与先序遍历结果反过来！
巧妙地转换一下：让res[根]，栈为[右，左]，最终res就为[根，左，右]了！！！
将当前子树的根节点入栈、出栈，随后再将其对应右子树入栈、将左子树入栈，然后出栈push到结果数组。最后结果数组中就是【根, 左子树, 右子树】

---------------------以下为后序--------------------
迭代法先序和后序的区别：
先序代码：根进栈出栈进res，右左分别进栈（所以出栈是左右，注意出栈顺序即进res的顺序！）；又因为是按顺序push进res的，所以res为根、左、右
后序代码：根进栈出栈进res，左右分别进栈（所以出栈是右左，注意出栈顺序即进res的顺序！）；又因为是按顺序unshift进res的，所以res为左、右、根

注意：
当连续多个数字进栈，然后再连续多个出栈时，出栈顺序一定和入栈顺序相反
但是只有在push进res的时候，res中的顺序才会和出栈顺序看起来一样；
当unshift进res的时候，res中的顺序和出栈顺序看起来会相反

--------------------为什么先序和后序差不多？而中序不能这样？-----------
先序遍历和后序遍历之所以可以用同一套代码框架来实现，本质上是因为两者的出栈、入栈逻辑差别不大——【都是先处理根结点，然后处理孩子结点】。

而中序遍历中，根结点不再出现在遍历序列的边界、而是出现在遍历序列的中间。
这就意味着无论如何我们不能再将根结点作为第一个被 pop 出来的元素来处理了——出栈的时机被改变了，这意味着入栈的逻辑也需要调整。

*/

// const preorderTraversal = function(root){

// }
// const postorderTraversal = function(root){

// }
// const root = {
//   val: "A",
//   left: { val: "B", left: { val: "D" }, right: { val: "E" } },
//   right: { val: "C", right: { val: "F" } },
// };
// console.log(xxx(root));

const preorderTraversal = function (root) {
  var res = [];
  if (!root) {
    return res;
  }
  var stack = [];
  stack.push(root);
  while (stack.length) {
    //将根节点从栈顶取出来，且立即push进结果数组
    var cur = stack.pop();
    res.push(cur.val);
    //右孩子
    if (cur.right) {
      stack.push(cur.right);
    }
    //左孩子
    if (cur.left) {
      stack.push(cur.left);
    }
  }
  return res; //[ 'A', 'B', 'D', 'E', 'C', 'F' ]
};
const postorderTraversal = function (root) {
  var res = [];
  if (!root) {
    return res;
  }
  var stack = [];
  stack.push(root);
  while (stack.length) {
    //将根节点从栈顶取出，并立即push入结果数组中
    var cur = stack.pop();
    res.unshift(cur.val);
    //左孩子
    if (cur.left) {
      stack.push(cur.left);
    }
    //右孩子
    if (cur.right) {
      stack.push(cur.right);
    }
  }
  return res; //[ 'D', 'E', 'B', 'F', 'C', 'A' ]
};

//迭代法先序遍历
// const preorderTraversal = function (root) {
//   const res = [];
//   if (!root) {
//     return res;
//   }
//   const stack = [];
//   //首先将根节点入栈
//   stack.push(root);
//   //若栈不为空，则重复出栈、入栈操作
//   while (stack.length) {
//     //取出栈顶节点，并将栈顶节点记为当前节点？
//     const cur = stack.pop();
//     //当前节点就是当前子树的根节点，把这个节点放在结果数组的尾部
//     res.push(cur.val);

//     //若当前子树根节点有右孩子，则将右孩子入栈
//     if (cur.right) {
//       stack.push(cur.right);
//     }
//     //若当前子树根节点有左孩子，则将左孩子入栈
//     if (cur.left) {
//       stack.push(cur.left);
//     }
//   }
//   return res;
// };

//迭代法后序遍历
// const postorderTraversal = function (root) {
//   const res = [];
//   if (!root) {
//     return res;
//   }
//   const stack = [];
//   //首先将根节点入栈
//   stack.push(root);
//   //若栈不为空，则重复出栈、入栈操作
//   while (stack.length) {
//     //取出栈顶节点，并将栈顶节点记为当前节点？
//     const cur = stack.pop();
//     //当前节点就是当前子树的根节点，将其把这个结点放在结果数组的头部
//     res.push(cur.val);

//     //若当前子树根节点有左孩子，则将左孩子入栈
//     if (cur.left) {
//       stack.push(cur.left);
//     }
//     //若当前子树根节点有右孩子，则将右孩子入栈
//     if (cur.right) {
//       stack.push(cur.right);
//     }
//   }
//   return res;
// };

const root = {
  val: "A",
  left: { val: "B", left: { val: "D" }, right: { val: "E" } },
  right: { val: "C", right: { val: "F" } },
};
console.log(postorderTraversal(root));
