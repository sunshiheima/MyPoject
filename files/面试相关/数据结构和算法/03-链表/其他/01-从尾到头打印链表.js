/*
题目：
  输入一个链表，按链表值从尾到头的顺序返回一个ArrayList
思路：
  构造链表节点：val属性存储当前的值，next属性存储下一个节点的引用
  要遍历链表就是不断找到当前节点地next节点，当next节点是null时，说明是最后一个节点，停止遍历。
  使用一个数组来存储打印结果，因为是从尾到头的顺序，每次插入到数组头部。
*/

// function ListNode(x){
//   this.val = x;
//   this.next = null;
// }
function printListFromTailToHead(pHead){
  const array = [];
  let current = pHead;
  while(current){
    array.unshift(current.val);
    current = current.next;
  }
  return array;
}

//注意：上面的head是头节点，实际上可以延申出一整个链表

