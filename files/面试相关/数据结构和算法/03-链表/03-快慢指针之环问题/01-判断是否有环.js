/*
环问题是快慢指针最常见的用法。
题目：
  判断链表是否有环，如果有，找到环的入口位置，要求空间复杂度为O(1)
*/

//判断是否有环，返回快慢指针相遇节点，否则返回空指针
function detectCrossNode() {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === null) {
      return null;
    }
    if (slow === fast) {
      return slow; //此时slow就是快慢指针相遇的点
    }
  }
  return null;
}

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

/*
思考题：
  知道了环的入口节点，怎么求环的长度？
  不知道。。。
*/
