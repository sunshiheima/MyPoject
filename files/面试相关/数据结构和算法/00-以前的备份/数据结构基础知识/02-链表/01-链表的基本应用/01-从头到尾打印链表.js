/*
  题目：
    输入一个链表，按链表值从尾到头的顺序返回一个ArrayList

  注意：因为是从尾到头的顺序，使用一个队列来存储打印结果，每次从队列头部插入
*/

/*
function ListNode(x){
  this.val = x;
  this.next = null;
}
*/
function printListFromTailToHead(head){
  const array = [];
  while(head){
    array.unshift(head.val);
    head = head.next;
  }
  return array;
}

