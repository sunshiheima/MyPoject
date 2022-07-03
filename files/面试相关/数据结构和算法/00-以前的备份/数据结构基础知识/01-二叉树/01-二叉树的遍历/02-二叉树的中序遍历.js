/*中序遍历有两种算法实现：
  1.递归算法
  2.非递归算法-即迭代算法
*/

/*题目：
  给定一个二叉树（注意：给的不是二叉搜索树，而是普通的二叉树！），返回它的后续遍历
  例如：如示意图所示
  要求输出：[1,3,2]

  分析：即按照 左-中-右 的顺序来
*/

/*递归实现*/

var inorderTraversal = function(root,array=[]) {
  if(root){
    inorderTraversal(root.left, array);
    array.push(root.val);
    inorderTraversal(root.right,array);
  }
  return array;
}
inorderTraversal([1,null,2,3]);

/*非递归实现
  取根节点为目标节点，开始遍历
  1.左孩子入栈-->直至左孩子为空的节点
  2.节点出栈-->访问该节点
  3.以右孩子为目标节点
  再依次执行123
*/
//下面这个真的很牛批！！！可以画示意图自己验证一遍！
var inorderTraversal = function(root){
  const result = [];
  const stack = [];
  let current = root;

  while(current || stack.length > 0){
    while(current){   //左孩子入栈直到左孩子为空
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.val);
    current = current.right;
  }
  return result;
}


