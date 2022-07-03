/*
【翻转二叉树】是经典的递归应用题
每一棵子树的左孩子和右孩子都发生了交换（每一颗子树则意味着重复，重复就要用到递归）

思路：
    以递归的方式，遍历树中的每一个节点，并将每一个节点的左右孩子进行交换。
*/

// const invertTree = function(root){

// }
// const root = {
//   val: "A",
//   left: { val: "B", left: { val: "D" }, right: { val: "E" } },
//   right: { val: "C", right: { val: "F" } },
// };
// console.log(invertTree(root));

//通过理代码执行流程，我发现这个翻转过程是自底向上的！！！
const invertTree = function (root) {
  if (!root) {
    return;
  }
  var left = invertTree(root.left);
  var right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};
const root = {
  val: "A",
  left: { val: "B", left: { val: "D" }, right: { val: "E" } },
  right: { val: "C", right: { val: "F" } },
};
console.log(invertTree(root)); //结果符合预期

// const invertTree = function (root) {
//   //定义递归边界
//   if (!root) {
//     return root;
//   }

//   //递归，交换右孩子的子节点
//   let right = invertTree(root.right);
//   //递归，交换左孩子的子节点
//   let left = invertTree(root.left);

//   //交换当前遍历到的两个左右孩子节点
//   root.left = right;
//   root.right = left;

//   return root;
// };
