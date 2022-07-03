/*
  题目：请实现一个函数，用来判断一个二叉树是不是对称的。注意：如果一个二叉树同此二叉树的镜像是相同的，则我们说这个二叉树是对称的

  注意：镜像二叉树——两颗二叉树根节点相同，但它们的左右两个子节点交换了位置

  思路：
    二叉树的右子树是二叉树左子树的镜像树，即：
      两个根节点相等
      左子树的右节点和右子树的左节点相同
      右子树的左节点和左子树的右节点相同
    递归所有节点满足以上三个条件即判定二叉树对称
*/
function isSymmetrical(pRoot){
  return isSymmetricalTree(pRoot,pRoot);
}
function isSymmetricalTree(node1,node2){
  if(!node1 && !node2){
    return true;
  }
  if(!node1 || !node2){
    return false;
  }
  if(node1.val !== node2.val){
    return false;
  }
  return isSymmetricalTree(node1.left, node2.right) && isSymmetricalTree(node1.right, node2.left);
}