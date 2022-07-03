/*
题目：
  输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
  如果是则输出Yes，否则输出No，假设输入的数组的任意两个数字都互不相同

思路：
  1.后序遍历特点：分成三部分——最后一个节点为根节点，第二部分为左子树的值比根节点小，第三部分为右子树的值比根节点大
  2.先检测左子树，左侧比根节点小的值都判定为左子树
  3.除最后一个节点外和左子树外的其他值为右子树，右子树有一个比根节点小，则返回false
  4.若存在左右子树，递归检测左、右子树，看是否符合上面规范(重复23)
*/
function VerifySquenceOfBST(sequence){
  if(sequence && sequence.length > 0){
    var root = sequence[sequence.length - 1];   //取出根节点-即数组的最后一个元素
    for(var i=0; i<sequence.length-1; i++){   //遍历数组中的其他项，只要遇到比root大的，就退出该循环;目的只是为了提取i值，给下面使用（即找出右子树）
      if(sequence[i] > root){
        break;
      }
    }
    for(let j=i; i<sequence.length-1; j++){   //从索引值为i的元素开始遍历（即遍历右子树），即进行第三步，即看右子树是否都比根节点小
      if(sequence[i] < root){
        return false;   //break-跳出循环；return-结束函数(VerifySquenceOfBST)内部代码的执行
      }
    }
    //下面开始遍历
    var left = true;
    if(i>0){
      left = VerifySquenceOfBST(sequence.slice(0,i));   //检测左子树是否符合3
    }
    var right = true;
    if(i < sequence.length-1){
      right = VerifySquenceOfBST(sequence.slice(i, sequence.length-1));   //检测右子树是否符合3
    }
    return left && right;
  }
}
VerifySquenceOfBST([,,,]);
