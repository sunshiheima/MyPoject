/*
题目：
  给定一个单链表，设计一个算法实现链表向右旋转K个位置。
  举例：给定 head->1->2->3->4->5->NULL, K=3,右旋后即为 head->3->4->5->1->2->NULL
思路：
  这道题其实是求倒序第K个位置的一个变形
  1.先找到倒数第k+1个节点，此节点的后继节点即为倒数第k个节点
  2.将倒数第k+1节点的后继节点设置为null
  3.将head的后继节点设置为以上所得的倒数第k个节点，将原尾节点的后继节点设置为原head的后继节点
*/

// function reversedKthToTail(k){

// }

function reversedKthToTail(k) {
  let KPreNode = findKthToTail(k + 1);
  let KNode = KPreNode.next;
  let headNext = head.next;
  let current = KNode;
  while (current.next) {
    current = current.next;
  }
  let tail = current;

  KNode.next = null;
  head.next = kNode;
  tail.next = headNext;
}

function reversedKthToTail(k) {
  //直接调用已实现的，寻找倒序k个节点的方法，这里是k+1
  let kPreNode = findKthToTail(k + 1);
  //先保存：倒数第k个节点 & head的后继节点
  let kNode = KPreNode.next;
  let headNext = head.next;

  kPreNode.next = null;
  head.next = kNode;

  //寻找尾节点
  let current = kNode;
  while (current.next) {
    current = current.next;
  }
  //此时current就为尾节点了。将尾节点的后继节点设置为原head的后继节点
  current.next = headNext;
}

/*
这道题下面的思考题：
  输入一个链表，删除该链表中的倒数第k个节点
思路：
  先用快慢指针找出倒数第k+1个节点
  再利用倒数第K+1个节点删除倒数第k个节点
*/
