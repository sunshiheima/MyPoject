/*
定位环的起点：
    给定一个链表，返回链表开始入环的第一个结点。 如果链表无环，则返回 null。
*/

//要找到入口节点，只需定义两个指针：一个指针指向head，一个指针指向快慢指针的相遇点
//然后这两个指针不断遍历（同时走一步），当它们指向同一个节点时即是环的入口节点。
function getRingEntryNode() {
  //获取快慢指针相遇节点
  let crossNode = detectCrossNode();
  //如果没有相遇节点，则没有环
  if (crossNode === null) {
    return null;
  }
  //分别定义两个指针：一个指向头节点，一个指向相交节点
  let temp1 = head;
  let temp2 = crossNode;
  //两者相遇点即为环的入口节点
  while (temp1.data !== temp2.data) {
    temp1 = temp1.next;
    temp2 = temp2.next;
  }
  return temp1;
}
