/*
变形题二:(k个一组进行翻转)
  给出一个链表，每k个节点一组进行翻转，并返回翻转后的链表。
  k是一个正整数，它的值小于或等于链表的长度。
  如果节点总数不是k的整数倍，那么将最后剩余节点保持原有顺序。

示例：
  给定这个链表：head->1->2->3->4->5
  当k=2时应当返回：head->2->1->4->3->5
  当k=3时应当返回：head->3->2->1->4->5

说明：
  你的算法只能使用常数的额外空间
  你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换

只要我们能找到翻一组k个节点的办法，问题就解决了（之后只要重复对k个节点一组的链表进行翻转即可）

思路：
  1.首先，我们要记录3个一组这一段链表的前继节点，定义为startPre,
    然后再定义一个step，从这一段的头节点开始遍历2次，找出这段链表的起始和终止节点
  2.找到startK和endK之后，根据之前的迭代翻转法对startK和endK的这段链表进行翻转
  3.然后将startKPre指向endK，将startK指向endkNext，即完成了对k个一组节点的翻转
  4.知道了一组k个怎么翻转，之后只要重复对k个节点一组的链表进行翻转即可

注意：实际上每一段链表翻转之前，需要确定的初始状态是：startKPre、current、step
*/

//每k个一组翻转链表（在leetcode上运行不出来，此题为hard级别的，暂时放弃。）
/*
  之后等对链表有更深刻的理解了再磕
  另外需要注意的是，优化代码顺序，尽量让整体结构类似于【变形一-指定部分翻转】
*/
function iterationInvertLinkedListEveryK(k) {
  let current = head.next;
  let step = 0; //计数，用来找出首节点和尾节点

  let startK; //k个一组链表中的头节点
  let startKPre = head; //k个一组链表中的前置节点
  let endK; //k个一组链表中的尾节点
  while (current) {
    //current的下一个节点(因为由于翻转，current的后继节点会变，要提前保存)
    let currentNext = current.next;
    //--------
    if (step === 0) {
      //k个一组链表区间的头节点
      startK = current;
      step++;
    } else if (step === k - 1) {
      //此时找到了k个一组链表区间的尾节点(endK)
      endK = current;
      let endKNext = endK.next;
      //对这段链表进行翻转
      let pre = startK;
      let cur = startK.next;
      while (current != endKNext) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
      }
      //翻转后此时endK和startK分别是k个一组链表的首尾节点
      startKPre.next = endK;
      startK.next = endKNext;

      //当前的k个一组翻转完了，开始下一个k个一组的翻转
      startKPre = startK;
      step = 0;
    } else {
      step++;
    }
    //--------
    current = currentNext;
  }
}
