//没看懂。。。见文章：(超详细)一文学会链表解题 中部开始

//还递归函数的功能是：翻转某个节点开始的链表（最初当然是以第一个带值节点开始的整条链表啦~）
/*
链表翻转问题用非递归版更好！
    递归版时间复杂度和空间复杂度均为O(n)，且容易造成栈溢出
    非递归版时间复杂度为O(n)，空间复杂度为O(1)
*/

let invertLinkedList = function (node) {
  if (node.next === null) {
    return node;
  }
  //步骤1：先翻转node之后的链表
  let newHead = invertLinkedList(node.next);
  //步骤2：再把原node节点后即节点的后继节点指向node(4)，node的后继节点设置为空（防止形成环）
  node.next.next = node;
  node.next = null;
  //步骤3：返回翻转后的头节点
  return newHead;
};
invertLinkedList(head.next); //此处head是带头节点的链表（即定义了哨兵节点的），若不是带节点的链表，则直接传入head即可！
//翻转后别忘了设置头节点的后继节点！
invertLinkedList.head.next = newHead;
