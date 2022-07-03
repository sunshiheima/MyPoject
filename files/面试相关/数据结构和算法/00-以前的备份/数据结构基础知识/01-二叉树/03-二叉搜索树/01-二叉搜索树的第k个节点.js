/*
  题目：
    给定一颗二叉搜索树，请找出其中的第k小的节点。
    例如：[5,3,7,2,4,6,8]中，按节点数值大小顺序第三小节点的值为4

  思路：
    二叉搜索树的中序遍历即排序后的节点，本题实际上考察的时二叉树的遍历
*/

/*1.配合-递归实现中序遍历*/
function KthNode(pRoot,k){
  const arr = [];
  loopThrough(pRoot, arr);
  if(k > 0 && k <= arr.length){
    return arr[k-1];
  }
  return null;
}
function loopThrough(node,arr){
  if(node){
    loopThrough(node.left, arr);
    arr.push(node);
    loopThrough(node.right,arr);
  }
}

/*2.配合-非递归实现中序遍历*/
function KthNode(pRoot,k){
  const arr=[];
  loopThrough(pRoot,arr);
  const stack=[];
  let current = pRoot;

  while(stack.length > 0 || current){
    while(current){
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    arr.push(current);
    current = current.right;
  }

  if(k>0 && k<=arr.length){
    return arr[k-1];
  }
  return null;
}
