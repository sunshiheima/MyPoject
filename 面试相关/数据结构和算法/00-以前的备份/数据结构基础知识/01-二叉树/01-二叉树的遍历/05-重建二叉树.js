/*注意：这里面涉及的是普通的二叉树，而并非二叉搜索树，因为左子树不一定都比根节点小，右子树不一定都比根节点大*/
/*
输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
例如: 输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，
      则重建二叉树并返回。
思路：略，具体见文章
*/
// function Node(data,left,right){
//   this.data = data;
//   this.left = left;
//   this.right = right;
// }
function reConstructBinaryTree(pre,vin){    //pre为前序遍历结果，vin为中序遍历结果
  if(pre.length === 0){   //因为前序遍历结果的第一个元素一定为根元素，故如果根元素不存在，则该树为空
    return null;
  }
  if(pre.length === 1){   //因为前序遍历结果的第一个元素一定为根元素，故如果只有一个元素，那么这个元素就是根元素。这棵树也只由一个元素构成
    return new Node(pre[0]);
  }

  //下面为当不止有一个元素时
  const root = pre[0];   //取得根元素
  const index = vin.indexOf(value);   //取得根元素在中序遍历结果当中的索引值
  const vinLeft = vin.slice(0, index);    //(根据前面取得的根元素索引值)确定左子树中序遍历
  const vinRight = vin.slice(index+1);    //(...)确定右子树中序遍历
  const preLeft = pre.slice(1,index+1);   //(...)确定左子树前序遍历
  const preRight = pre.slice(index+1);    //(...)确定右子树前序遍历

  const node = new Node(root);   //将取得的根元素传给TreeNode，构建出一个二叉树（暂时只包含根节点）
  node.left = reConstructBinaryTree(preLeft, vinLeft);
  node.right = reConstructBinaryTree(preRight, vinRight);
  return node;
}
reConstructBinaryTree([1,2,4,7,3,5,6,8],[4,7,2,1,5,3,8,6]);     //已在控制台测试过，结果符合预期
//暂时先不要纠结这个代码是如何实现结果的，关键是观察这种递归代码的特点和规律——什么时候才能用递归？当每一层都具有想通过的特点和目的的时候；怎样写递归？将相同的部分写出来，再在合适的地方写递归代码


/*
求二叉树的遍历
给定一棵二叉树的前序遍历和中序遍历，求其后序遍历

输入描述:
两个字符串，其长度n均小于等于26。 第一行为前序遍历，第二行为中序遍历。 二叉树中的结点名称以大写字母表示：A，B，C....最多26个结点。
输出描述:
输入样例可能有多组，对于每组测试样例， 输出一行，为后序遍历的字符串。

思路：略，具体见文章，实际上和前面重建二叉树思路一样；只是最后一步：递归重建二叉树-->递归拼接二叉树
*/

//下面注释部分应该是为了配合题目的一些额外要求
// let pre;   //第一行：前序遍历结果
// let vin;   //第二行：中序遍历结果
// while((pre = readline())!=null){   //不知道这是干什么用的
//   vin = readline();
//   print(getHRD(pre,vin));
// }
function getHRD(pre,vin){
  if(!pre){
    return '';
  }
  if(pre.length === 1){
    return pre;
  }

  //下面为不止一个字符时（即不止一个元素时）
  const root = pre[0];
  const index = vin.indexOf(root);
  const vinLeft = vin.substring(0, index);
  const vinRight = vin.substring(index+1);
  const preLeft = pre.substring(1, index+1);
  const preRight = pre.substring(index+1);

  return getHRD(preLeft,vinLeft)+getHRD(preRight,vinRight)+root;
}
getHRD('12473568','74215386');    //结果为"74258631"

