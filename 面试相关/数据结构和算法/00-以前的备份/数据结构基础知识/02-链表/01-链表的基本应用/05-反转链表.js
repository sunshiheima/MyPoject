/*
  输入一个链表，反转链表后，输出新链表的表头
  思路：
    以链表的头部节点为基准节点
    将基准节点的下一个节点挪到头部作为头节点
    当基准节点的next为null,则其已经成为最后一个节点，链表已经反转完成

  分析代码的时候，要注意：
    将head当作是一个具体的节点，也就是我们最初选出的基准节点（此处我们选的是原链表的头节点为基准节点）
    对于headNode，不能将其当作是一个具体的节点，而只是特殊位置节点的代号（它是指代表位于当前链表第一个位置的节点，它所代表的节点是会变化的）
*/
var reverseList = function(head){   //传入原链表的头节点
  let currentNode = null;
  let headNode = head;
  //注意：此处的head保存的时原链表的头节点（之后肯定就不再是真正的头节点了），
  //而headNode才一直代表着真正意义上的头节点，且其只是一个代号而已（用于表示一个节点的头节点身份）

  while(head && head.next){   //循环条件--传入的链表存在节点且不止一个节点时
    currentNode = head.next;  //令currentNode = 头节点的下一个节点
    head.next = currentNode.next;   //从链表当中移除currentNode
    currentNode.next = headNode;
    //为什么不直接指向head;而非要指向headNode，又因为headNode是指向head的，所以等同于指向head?
    //因为这是循环啊。。。还有第二圈第三圈啊，head是最开始选的基准节点，是不会再变的，而我循环需要的是身份在变动的节点
    headNode = currentNode;
  }
  return headNode;
}