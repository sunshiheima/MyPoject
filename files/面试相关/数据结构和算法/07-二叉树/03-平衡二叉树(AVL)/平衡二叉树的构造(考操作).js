/*
平衡二叉树的构造（考操作）

题目：
    给你一棵二叉搜索树，请你返回一棵平衡后的二叉搜索树，新生成的树应该与原来的树有着相同的节点值。
    如果一棵二叉搜索树中，每个节点的两棵子树高度差不超过 1 ，我们就称这棵二叉搜索树是平衡的。
    如果有多种构造方法，请你返回任意一种。
分析：
    和二叉搜索树部分的最后一题相似，两道题是有联系的
    两题的唯一区别在于输入：那道题输入【有序数组】，而此题输入【二叉搜索树】
    重点！！！
        【二叉搜索树的中序遍历序列是有序的！！！】
        所谓有序数组，完全可以理解为二叉搜索树的中序遍历序列
思路：
    1.中序遍历求出有序数组
    2.逐个将二分出来的数组子序列“提”起来变成二叉搜索树
*/

const balanceBST = function (root) {
  // 初始化中序遍历序列数组
  const nums = [];
  // 定义中序遍历二叉树，得到有序数组
  function inorder(root) {
    if (!root) {
      return;
    }
    inorder(root.left);
    nums.push(root.val);
    inorder(root.right);
  }

  // 这坨代码的逻辑和上一节最后一题的代码一模一样
  function buildAVL(low, high) {
    // 若 low > high，则越界，说明当前索引范围对应的子树已经构建完毕
    if (low > high) {
      return null;
    }
    // 取数组的中间值作为根结点值
    const mid = Math.floor(low + (high - low) / 2);
    // 创造当前树的根结点
    const cur = new TreeNode(nums[mid]);
    // 构建左子树
    cur.left = buildAVL(low, mid - 1);
    // 构建右子树
    cur.right = buildAVL(mid + 1, high);
    // 返回当前树的根结点
    return cur;
  }
  // 调用中序遍历方法，求出 nums
  inorder(root);
  // 基于 nums，构造平衡二叉树
  return buildAVL(0, nums.length - 1);
};
