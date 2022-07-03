/*
双指针法：
  时间复杂度：O(a+b)，因为循环比较两个子问题的次数是a+b，a+b为两个子问题的长度。
  空间复杂度：O(1)，只用了双指针，故为常数级别复杂度
*/
/*
  @param {ListNode} l1
  @param {ListNode} l2
  @return {ListNode}
*/

// let mergeTwoLists = function(l1, l2){

// }

let mergeTwoLists = function (l1, l2) {
  let head = new listNode(-1);
  let node = head;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      node.next = l1;
      l1 = l1.next;
    } else {
      node.next = l2;
      l2 = l2.next;
    }
  }
  node.next = l1 ? l1 : l2;
  return node;
};

//非递归版
let mergeTwoLists = function (l1, l2) {
  let head = new ListNode(-1); //定义哨兵节点
  let node = head;
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      node.next = l1;
      l1 = l1.next;
    } else {
      node.next = l2;
      l2 = l2.next;
    }
    node = node.next;
  }
  //当一个链表已经被遍历完了之后，只需要把没有遍历完的那个链表的剩余部分，直接拼接到后面即可。
  node.next = l1 ? l1 : l2;
  return node;
};
