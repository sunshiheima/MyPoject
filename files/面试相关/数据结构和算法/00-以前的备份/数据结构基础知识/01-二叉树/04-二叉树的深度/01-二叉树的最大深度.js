/*
  题目：
    给定一个二叉树，找出其最大深度
    说明：二叉树的深度为根节点到最远叶子节点的最长路径上的额节点数
          叶子节点是指没有子节点的节点

  思路：
    深度优先遍历+分治
    一颗而二叉树的最大深度等于[左子树深度和右子树]最大深度的最大值+1
*/
function TreeDepth(pRoot){
  return !pRoot ? 0 : Math.max(TreeDepth(pRoot.left), TreeDepth(pRoot.right))+1
}
let pRoot = {
  data: 7,
  left: {
    data: 4,
    left: {
      data: 2,
      left: {
        data: 1,
        left: undefined,
        right: undefined
      },
      right: {
        data: 3,
        left: undefined,
        right: undefined
      }
    },
    right:{
      data: 6,
      left: {
        data: 5,
        left: undefined,
        right: undefined
      },
      right: undefined
    }
  },
  right:{
    data: 9,
    left: {
      data: 8,
      left: undefined,
      right: undefined
    },
    right: {
      data: 10,
      left: undefined,
      right: {
        data: 11,
        left: undefined,
        right: {
          data: 12,
          left: undefined,
          right: undefined
        },
      }
    }

  }
}
//console.log(pRoot);
TreeDepth(pRoot);     //控制台输出5,符合预期！！！