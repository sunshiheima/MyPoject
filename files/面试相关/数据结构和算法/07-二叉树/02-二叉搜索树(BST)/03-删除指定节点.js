/*
删除指定节点

思路：
1.结点不存在，定位到了空结点。直接返回即可。
2.需要删除的目标结点没有左孩子也没有右孩子——它是一个叶子结点，删掉它不会对其它结点造成任何影响，直接删除即可。
3.需要删除的目标结点存在左子树，那么就去左子树里寻找小于目标结点值的最大结点（即左子树中右侧最深），用这个结点覆盖掉目标结点
4.需要删除的目标结点存在右子树，那么就去右子树里寻找大于目标结点值的最小结点（即右子树中左侧最深），用这个结点覆盖掉目标结点
5.需要删除的目标结点既有左子树、又有右子树，这时就有两种做法了：
  要么取左子树中值最大的结点，要么取右子树中取值最小的结点。
  两个结点中任取一个覆盖掉目标结点，都可以维持二叉搜索树的数据有序性
*/

// function deleteNode(root, n){

// }
// function findMax(root){

// }
// function findMin(root){

// }

function deleteNode(root, n) {
  if (!root) {
    return;
  }
  if (n === root.val) {
    //为叶子节点时，直接删除
    if (!root.left && !root.right) {
      root = null;
    } else if (root.left) {
      //存在左子节点时，需要在其左子树当中找最大值
      var maxLeft = findMax(root.left);
      root.val = maxLeft.val;
      deleteNode(root.left, maxLeft.val);
    } else {
      //存在右子节点时，需要在其右子树当中找最小值
      var minRight = findMin(root.right);
      root.val = minRight.val;
      deleteNode(root.right, minRight.val);
    }
  } else if (n < root.val) {
    deleteNode(root.left, n);
  } else {
    deleteNode(root.right, n);
  }
}
function findMax(root) {
  while (root.right) {
    root = root.right;
  }
  return root;
}
function findMin(root) {
  while (root.left) {
    root = root.left;
  }
  return root;
}

// function deleteNode(root, n) {
//   // 如果没找到目标结点，则直接返回
//   if (!root) {
//     return;
//   }
//   // 定位到目标结点，开始分情况处理删除动作
//   if (root.val === n) {
//     // 若是叶子结点，则不需要想太多，直接删除
//     if (!root.left && !root.right) {
//       root = null;
//     } else if (root.left) {
//       // 寻找左子树里值最大的结点
//       const maxLeft = findMax(root.left);
//       // 用这个 maxLeft 覆盖掉需要删除的当前结点
//       root.val = maxLeft.val;
//       // 删除原有的 maxLeft 结点
//       deleteNode(root.left, maxLeft.val);
//     } else {
//       // 寻找右子树里值最小的结点
//       const minRight = findMin(root.right);
//       // 用这个 minRight 覆盖掉需要删除的当前结点
//       root.val = minRight.val;
//       // 删除原有的 minRight 结点
//       deleteNode(root.right, minRight.val);
//     }
//   } else if (root.val > n) {
//     // 若当前结点的值比 n 大，则在左子树中继续寻找目标结点
//     deleteNode(root.left, n);
//   } else {
//     // 若当前结点的值比 n 小，则在右子树中继续寻找目标结点
//     deleteNode(root.right, n);
//   }
// }

// // 寻找左子树最大值
// function findMax(root) {
//   while (root.right) {
//     root = root.right;
//   }
//   return root;
// }

// // 寻找右子树的最小值
// function findMin(root) {
//   while (root.left) {
//     root = root.left;
//   }
//   return root;
// }
