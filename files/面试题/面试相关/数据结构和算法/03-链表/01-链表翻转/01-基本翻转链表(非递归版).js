/*
链表翻转问题用非递归版更好！
  递归版时间复杂度和空间复杂度均为O(n)，且容易造成栈溢出
  非递归版（迭代法）时间复杂度为O(n)，空间复杂度为O(1)
*/

// let iterationInvertLinkedList = function(head){

// }

let iterationInvertLinkedList = function (head) {
  var pre = head.next;
  var cur = pre.next;
  pre.next = null;
  while (cur !== null) {
    var next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  head.next = pre;
  return head;
};

//链表翻转--非递归版（迭代法）
let iterationInvertLinkedList = function (head) {
  //步骤1
  let pre = head.next; //注意：这句说明该链表是带头节点的链表（即带哨兵的链表）。如果head为不带头节点的链表，那么这句应该写为: let pre = head;
  let cur = pre.next;
  pre.next = null;

  //步骤2
  while (cur != null) {
    //务必注意：在cur指向pre之前一定要先保留cur的后继节点，不然如果cur先指向pre，之后就再也找不到后继节点了
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  //此时pre指向的是原链表的尾节点，翻转后即为链表head的后继节点
  head.next = pre; //若head为不带头节点的链表，则这句应该为head = pre;
  return head;
};
