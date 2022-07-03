/*
题目：
    将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
    本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
示例：
    给定有序数组: [-10,-3,0,5,9],
    一个可能的答案是：[0,-3,9,-10,null,5]
分析：
    题目中指明了目标树是一棵二叉搜索树，二叉搜索树的中序遍历序列是有序的，题中所给的数组也是有序的，
    【因此我们可以认为题目中给出的数组就是目标二叉树的中序遍历序列】
    中序遍历序列的顺序规则是 左 -> 根 -> 右，因此数组中间位置的元素一定对应着目标二叉树的根结点。
    以根结点为抓手，把这个数组“拎”起来，得到的二叉树一定是符合二叉搜索树的排序规则的。
    ---
    当我们以有序数组的中间元素为根结点，“提”出一个二叉树时，有两种可能的情况：
    1.数组中元素为奇数个，此时以数组的中间元素为界，两侧元素个数相同
    2.数组中元素为偶数个。。。
    最终我们发现“以中间元素为根结点，将数组提成树”这种操作，可以保证根结点左右两侧的子树高度绝对值不大于1。
    ---
    要想保证每一棵子树都满足这个条件，我们只需要对有序数组的每一个对半分出来的子序列都递归地执行这个操作即可。
*/

// const sortedArrayToBST = function (nums) {
//   function buildBST(low, high) {
//     //...
//   }
//   const root = buildBST(0, nums.length - 1);
//   return root;
// };

const sortedArrayToBST = function (nums) {
  function buildBST(low, high) {
    var mid = Math.floor(low + (high - low) / 2);
    var cur = new TreeNode(nums[mid]);
    cur.left = buildBST(low, mid - 1);
    cur.right = buildBST(mid + 1, high);
    return cur;
  }
  const root = buildBST(0, nums.length - 1);
  return root;
};

const sortedArrayToBST = function (nums) {
  // 处理边界条件
  if (!nums.length) {
    return null;
  }

  // root 结点是递归“提”起数组的结果
  const root = buildBST(0, nums.length - 1);

  // 定义二叉树构建函数，入参是子序列的索引范围
  function buildBST(low, high) {
    // 当 low > high 时，意味着当前范围的数字已经被递归处理完全了
    if (low > high) {
      return null;
    }
    // 二分一下，取出当前子序列的中间元素
    const mid = Math.floor(low + (high - low) / 2);
    // 将中间元素的值作为当前子树的根结点值
    const cur = new TreeNode(nums[mid]);
    // 递归构建左子树，范围二分为[low,mid)
    cur.left = buildBST(low, mid - 1);
    // 递归构建左子树，范围二分为为(mid,high]
    cur.right = buildBST(mid + 1, high);
    // 返回当前结点
    return cur;
  }
  // 返回根结点
  return root;
};
