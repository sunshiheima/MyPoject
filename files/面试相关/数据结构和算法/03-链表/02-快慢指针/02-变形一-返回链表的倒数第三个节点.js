/*
题目：
  输入一个链表，输出该链表中的倒数第 k 个结点。
思路：
  1.首先让快慢指针同时指向head的后继节点
  2.快指针向前走k-1步，先走到第k个节点
  3.快慢指针同时往后走一步，不断重复此步骤，知道快指针走到为节点，此时的slow节点即为我们要找的倒数第k个节点。
*/
// function findKthToTail(k){

// }

function findKthToTail(k) {
  let slow = head.next;
  let fast = head.next;

  let step = k - 1;
  while (step > 0 && fast !== null) {
    fast = fast.next;
    step--;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
}

function findKthToTail(k) {
  let slow = head.next;
  let fast = head.next;

  //快指针先移到第k个节点
  let step = k - 1;
  while (step > 0 && fast !== null) {
    fast = fast.next;
    step--;
  }
  //临界条件,k大于链表长度
  // if(fast === null){
  //   throw new Error("k节点存在异常");
  // }
  //slow和fast同时往后移，知道fast走到尾节点
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  //此时快指针已经到达了最后一个节点，此时slow指针就是倒数第k个节点！
  return slow;
}
