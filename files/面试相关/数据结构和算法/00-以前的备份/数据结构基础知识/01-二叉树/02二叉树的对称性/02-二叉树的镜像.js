/*
  题目：操作给定的二叉树，将其变换为原二叉树的镜像
  思路：递归交换二叉树所有节点左右节点的位置
*/
function Mirror(root){
  if(root){
    const temp = root.right;
    root.right = root.left;
    root.left = temp;
    Mirror(root.right);
    Mirror(root.left);
  }
}
//用此函数时，不应该只传入一个根节点，而是整棵树的对象形式--即{data:xxx, left:{...}, right:{...}}
