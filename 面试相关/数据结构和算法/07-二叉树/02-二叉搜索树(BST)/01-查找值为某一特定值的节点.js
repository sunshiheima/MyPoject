/*
假设要求查找值为n的节点

思路：
    1.递归遍历二叉树，若当前遍历到的结点为空，就意味着没找到目标结点，直接返回。
    2.若当前遍历到的结点对应的数据域值刚好等于n，则查找成功，返回。
    3.若当前遍历到的结点对应的数据域值大于目标值n，则应该在左子树里进一步查找，设置下一步的遍历范围为 root.left 后，继续递归。
    4.若当前遍历到的结点对应的数据域值小于目标值n，则应该在右子树里进一步查找，设置下一步的遍历范围为 root.right 后，继续递归。
*/
// function search(root, n){

// }
// const root = {
//   val: 4,
//   left: { val: 2, left: { val: 1 }, right: { val: 3 } },
//   right: { val: 5, right: { val: 6 } },
// };
// console.log(search(root, 3));

function search(root, n) {
  if (!root) {
    return "查找失败，该树中无此节点";
  }
  if (n === root.val) {
    console.log(root); //为{val: 3}
    return root; //结果为undefined???
  } else if (n < root.val) {
    search(root.left, n);
  } else {
    search(root.right, n);
  }
}
const root = {
  val: 4,
  left: { val: 2, left: { val: 1 }, right: { val: 3 } },
  right: { val: 5, right: { val: 6 } },
};
console.log(search(root, 3));

// function search(root, n) {
//   //若root为空，查找失败，直接返回
//   if (!root) {
//     return;
//   }
//   //找到目标节点，输出节点对象
//   if (root.val === n) {
//     console.log("目标节点是", root);
//   } else if (root.val > n) {
//     //当前节点数据域大于n，向左查找
//     search(root.left, n);
//   } else {
//     // 当前结点数据域小于n，向右查找
//     search(root.right, n);
//   }
// }
