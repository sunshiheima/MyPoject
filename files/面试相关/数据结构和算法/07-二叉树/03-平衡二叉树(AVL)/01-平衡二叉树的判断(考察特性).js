/*
平衡二叉树的判定（考定义）
    平衡二叉树是【任意结点】的【左右子树高度差绝对值都不大于1】的     【二叉搜索树】

题目:
    给定一个二叉树，判断它是否是高度平衡的二叉树。
    本题中，一棵高度平衡二叉树定义为： 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
示例：
    输入一颗树（重点看图）
    输出true/false
分析（定义的关键字）
    1.任意节点（递归！！！）
    2.左右子树高度差绝对值都不大于1（递归的递归式）
    3.二叉搜索树（本题中不必对二叉搜索树的特性进行校验）
思路：
    从下往上递归遍历树中的每一个节点，计算其左右子树的高度并进行对比，只要有一个高度差的绝对值大于1，那么整颗树都会被判为不平衡！
*/

const isBalanced = function (root) {
  // 立一个flag，只要有一个高度差绝对值大于1，这个flag就会被置为false
  let flag = true;
  // 定义递归逻辑
  function dfs(root) {
    // 如果是空树，高度记为0；如果flag已经false了，那么就没必要往下走了，直接return
    if (!root || !flag) {
      return 0;
    }
    // 计算左子树的高度
    const left = dfs(root.left);
    // 计算右子树的高度
    const right = dfs(root.right);
    // 如果左右子树的高度差绝对值大于1，flag就破功了
    if (Math.abs(left - right) > 1) {
      flag = false;
      // 后面再发生什么已经不重要了，返回一个不影响回溯计算的值
      return 0;
    }
    // 返回当前子树的高度
    return Math.max(left, right) + 1;
  }

  // 递归入口
  dfs(root);
  // 返回flag的值
  return flag;
};
