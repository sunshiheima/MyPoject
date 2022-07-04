/*
  给定一个二叉树，找出其最小深度
  说明：最小深度是从根节点到最近叶子节点的最短路径上的节点数量
  思路：
    左右子树都不为空：左子树深度和右子树最小深度的最小值+1
    左子树为空：右子树最小深度的最小值+1
    右子树为空：左子树最小深度的最小值+1
*/
var minDepth = function(root){
  if(!root){
    return 0;
  }
  if(!root.left){
    return 1+minDepth(root.right);
  }
  if(!root.right){
    return 1+minDepth(root.left);
  }
  return Math.min(minDepth(root.left), minDepth(root.right))+1
}