/*
题目：
  判断两个单链表是否相交及找到第一个交点，要求空间复杂度为O(1)。
画外音：
  如果没有空间复杂度O(1)的限制，其实有多种解法，例如：
  先遍历链表1，将链表1的所有节点都放到一个set中，再遍历链表2，每遍历一个节点，就判断这个节点是否在set中。
  如果发现节点在这个set中，则这个节点就是链表第一个相交的节点。
分析：
  由于链表本身的性质，如果有一个节点相交，那么相交节点之后的所有节点都是这两个链表共用的。
  也就是说，两个链表的长度主要相差在相交节点之前的节点长度。
思路：
  1.如果链表没有定义长度，则我们先遍历这两个链表拿到两个链表长度，假设分别为L1,L2(L1>L2)，
    定义P1,P2指针分别指向各自链表head节点，然后p1先往前走L1-L2步。这一步保证了p1,p2指向的指针与相交节点(如果有的话）一样近。
  2.然后p1,p2不断往后遍历，每次走一步，边遍历边判断相应节点是否相等，如果相等即为这两个链表的相交节点
*/

// function detectCommonNode(list1, list2){

// }

function detectCommonNode(list1, list2) {
  let len1 = 0;
  let len2 = 0;

  //求出两链表的长度
  let current = list1;
  while (current) {
    current = current.next;
    len1++;
  }
  let current = list2;
  while (current) {
    current = current.next;
    len2++;
  }

  //得出较长的那一个，让指针先走
  let lang = len1 > len2 ? list1 : list2;
  let short = len1 < len2 ? list1 : list2;
  let interval = Math.abs(len1 - len2);
  while (interval > 0) {
    lang = lang.next;
    interval--;
  }

  //lang为较长链表的指针，short为较短链表的指针
  while (lang) {
    if (lang.val === short.val) {
      return lang;
    }
    lang = lang.next;
    short = short.next;
  }
  return null;
}

function detectCommonNode(list1, list2) {
  let length1 = 0; //链表list1的长度
  let length2 = 0; //链表list2的长度

  //先遍历两个链表拿到两个链表长度
  let pHead1 = list1.head;
  let pHead2 = list2.head;
  while (pHead1.next) {
    length1++;
    pHead1 = pHead1.next;
  }
  while (pHead2.next) {
    length2++;
    pHead2 = pHead2.next;
  }

  //先找出较长链表（lang为较常链表的头节点）&& 两条链表的长度差
  let lang = length1 >= length2 ? pHead1 : pHead2;
  let short = length1 >= length2 ? pHead2 : pHead1;
  let interval = Math.abs(length1 - length2);
  //让长链表先走
  while (interval--) {
    lang = lang.next;
  }

  //p1,p2分别往后遍历，边遍历边比较，如果相等，即为第一个相交节点
  while (lang) {
    if (lang === short) {
      return lang;
    }
    lang = lang.next;
    short = short.next;
  }

  //没有相交节点，返回空指针
  return null;
}
