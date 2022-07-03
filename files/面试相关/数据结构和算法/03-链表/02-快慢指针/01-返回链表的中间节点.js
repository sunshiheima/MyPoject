/*
通常用快慢指针解决两类问题：
1.寻找/删除第K个节点
2.有关链表环问题的相关解法
*/
/*
题目一：(LeetCode 876)
  给定一个带有头结点 head 的非空单链表，返回链表的中间结点。如果有两个中间结点，则返回第二个中间结点。
思路：
  解法一：前面说过哨兵节点可以保存链表的长度，那么只需一次遍历，便可找到中间节点。
  解法二：如果哨兵节点没有保存链表的长度，那么就需要两次遍历：
         第一次遍历---得出链表的长度
         第二次遍历---找到中间节点
  解法三：解法二由于要遍历两次链表，显得不那么高效。
         我们可以用快慢指针可以只遍历一次就拿到中间节点，我们让快指针和慢指针同时从第一个节点出发，慢指针每次走一步，快指针每次走两步。
         这样，当快指针走到头时，慢指针就刚好到了链表的中间节点
*/

// function findMiddleNodeWithSlowFastPointer(){

// }

function findMiddleNodeWithSlowFastPointer() {
  let slow = head.next;
  let fast = head.next;
  while (fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

//解法二
function findMiddleNode() {
  let current = head.next;
  let length = 1;
  //先遍历一遍拿到链表长度
  while (current.next) {
    current = current.next;
    length++;
  }
  //再遍历一遍拿到链表中间节点
  current = head.next;
  let middleLength = length / 2;
  while (middleLength > 0) {
    current = current.next;
    middleLength--;
  }
  return current;
}

//解法三
function findMiddleNodeWithSlowFastPointer() {
  let slow = head.next;
  let fast = head.next;
  while (fast && fast.next) {
    //快指针走两步
    fast = fast.next.next;
    //慢指针走一步
    slow = slow.next;
  }
  //此时的slow节点即为中间节点
  return slow;
}
