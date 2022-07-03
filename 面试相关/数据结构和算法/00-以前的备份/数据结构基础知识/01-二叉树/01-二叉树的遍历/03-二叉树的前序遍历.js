/*中序遍历有两种算法实现：
  1.递归算法
  2.非递归算法-即迭代算法
*/

/*题目：
  给定一个二叉树（注意：给的不是二叉搜索树，而是普通的二叉树！），返回它的后续遍历
  例如：如示意图所示
  要求输出：[1,2,3]

  分析：即按照 中-左-右 的顺序来
*/

//递归实现
var preorderTraversal = function(root,array=[]){
  if(root){
    array.push(root.val);
    preorderTraversal(root.left,array);
    preorderTraversal(root.right,array);
  }
  return array;
}


/*非递归实现
  取根节点为目标节点，开始遍历
  1.访问目标节点
  2.左孩子入栈-->直至左孩子为空的节点
  3.节点出栈，以右孩子为目标节点
  在依次执行123
*/
var preorderTraversal = function(root){
  const result = [];
  const stack = [];
  let current = root;
  while(current || stack.length > 0){
    while(current){
      result.push(current.val);   //1.先放入当前节点
      stack.push(current);    //2.左孩子入栈直到左孩子为空
      current = current.left;
    }
    current = stack.pop();  //节点出栈
    current = current.right;    //以右孩子为目标节点（当前节点）
  }
  return result;
}