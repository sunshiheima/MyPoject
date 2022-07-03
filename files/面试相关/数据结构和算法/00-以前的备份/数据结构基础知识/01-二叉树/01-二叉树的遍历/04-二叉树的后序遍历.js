/*中序遍历有两种算法实现：
  1.递归算法
  2.非递归算法-即迭代算法
*/

/*题目：
  给定一个二叉树（注意：给的不是二叉搜索树，而是普通的二叉树！），返回它的后续遍历
  例如：如示意图所示
  要求输出：[3,2,1]

  分析：即按照 左-右-中 的顺序来
*/

//递归实现
var postorderTraversal = function(root, array=[]){
  if(root){
    postorderTraversal(root.left,array);
    postorderTraversal(root.right,array);
    array.push(root.val);
  }
  return array;
}

/*非递归实现
  取根节点为目标节点，开始遍历
  1.左孩子入栈-->直至左孩子为空的节点
  2.栈顶节点的右节点为空或右节点被访问过-->节点出栈并访问它，将节点标记为已访问
  3.栈顶节点的右节点不为空且未被访问，以右孩子为目标节点
  再依次执行123
*/
//感觉非递归版有点难理解！
var postorderTraversal = function(root){
  const result = [];
  const stack = [];
  let last = null;  //标记上一个访问的节点
  let current = root;
  while(current || stack.length>0){
    while(current){
      stack.push(current);    //左孩子入栈直到左孩子为空
      current = current.left;
    }
    current = stack[stack.length - 1];
    if(!current.right || current.right == last){
      current = stack.pop();
      result.push(current.val);
      last = current;
      current = null;   //继续弹栈
    }else{
      current = current.right;
    }
  }
  return result;
}