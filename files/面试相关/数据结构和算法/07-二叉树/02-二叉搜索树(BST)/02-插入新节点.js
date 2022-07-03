/*
插入节点的思路其实和寻找节点非常类似

分析：
    在上面寻找结点的时候，为什么我们会在判定当前结点为空时，就认为查找失败了呢？
    二叉搜索树的查找路线是一个非常明确的路径：
        我们会根据当前结点值的大小，决定路线应该是向左走还是向右走。
        如果最后走到了一个空结点处，这就意味着我们没有办法再往深处去搜索了，也就没有了找到目标结点的可能性。
    如果这个空结点所在的位置恰好有一个值为 n 的结点，是不是就可以查找成功了？
    那么如果我把 n 值塞到这个空结点所在的位置，是不是刚好符合二叉搜索树的排序规则？

思路：
    从根结点开始，把我们希望插入的数据值和每一个结点作比较。
    若大于当前结点，则向右子树探索；若小于当前结点，则向左子树探索。
    最后找到的那个空位，就是它合理的栖身之所。
*/
// function insert(root, n){

// }

// function insert(root, n) {}

function TreeNode(n) {
  this.val = n;
  this.left = undefined;
  this.right = undefined;
}

function insert(root, n) {
  // 若 root 为空，说明当前是一个可以插入的空位
  if (!root) {
    // 用一个值为n的结点占据这个空位
    root = new TreeNode(n);
    return;
  }
  // 查找成功，说明值为n的结点已经存在，不再重复创建，直接返回
  if (root.val === n) {
    return;
  } else if (root.val > n) {
    // 当前结点数据域大于n，向左查找
    insert(root.left, n);
  } else {
    // 当前结点数据域小于n，向右查找
    insert(root.right, n);
  }
}
const root = {
  val: 4,
  left: { val: 2, left: { val: 1 }, right: { val: 3 } },
  right: { val: 5, right: { val: 7 } },
};
console.log(insert(root, 6));
