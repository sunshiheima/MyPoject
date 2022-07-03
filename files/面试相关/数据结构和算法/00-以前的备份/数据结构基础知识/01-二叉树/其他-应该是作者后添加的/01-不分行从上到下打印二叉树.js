/*
题目：
  从上往下打印除二叉树的每个节点，同层节点从左至右打印

思路：
  在打印第一行时，将左孩子节点和右孩子节点存入一个队列里
  队列元素出队列时打印，同时分别将左孩子节点和右孩子节点存入队列
  这样打印二叉树的顺序就是每行从左到右打印
*/
function PrintFromTopToButtom(root){
  const result = [];
  const queue = [];
  if(root){
    queue.push(root);
    while(queue.length>0){
      const current = queue.shift();
      if(current.left){
        queue.push(current.left);
      }
      if(current.right){
        queue.push(current.val);
      }
      result.push(current.val);
    }
  }
  return result;
}
