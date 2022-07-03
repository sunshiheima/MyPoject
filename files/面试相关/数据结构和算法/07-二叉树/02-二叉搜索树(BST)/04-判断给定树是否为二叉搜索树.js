/*
判断给定树是否为二叉搜索树：
这是在对二叉搜索树的定义进行考察

题目：
    给定一个二叉树，判断其是否是一个有效的二叉搜索树。
    假设一个二叉搜索树具有如下特征：
    节点的左子树只包含小于当前节点的数。
    节点的右子树只包含大于当前节点的数。
    所有左子树和右子树自身必须也是二叉搜索树。
输出：
    返回true或false
*/

// const isValidBST = function(root){

// }

const isValidBST = function (root) {
  function bfs(root, minValue, maxValue) {
    if (!root) {
      return true;
    }
    if (root.val <= minValue || root.val >= maxValue) {
      return false;
    }
    return (
      dfs(root.left, minValue, root.val) && dfs(root.right, root.val, maxValue)
    );
  }
  return dfs(root, -Infinity, Infinity);
};

// const isValidBST = function (root) {
//   // 定义递归函数
//   function dfs(root, minValue, maxValue) {
//     // 若是空树，则合法
//     if (!root) {
//       return true;
//     }
//     // 若右孩子不大于根结点值，或者左孩子不小于根结点值，则不合法
//     if (root.val <= minValue || root.val >= maxValue) return false;
//     // 左右子树必须都符合二叉搜索树的数据域大小关系
//     return (
//       dfs(root.left, minValue, root.val) && dfs(root.right, root.val, maxValue)
//     );
//   }
//   // 初始化最小值和最大值为极小或极大
//   return dfs(root, -Infinity, Infinity);
// };
