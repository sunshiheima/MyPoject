/*
变形题1：（对指定部分惊醒翻转）
  给定一个链表的头节点head，以及两个整数from和to，在链表上把第from个节点和第to个节点这一部分进行翻转。
  例如：给定如下链表，from=2, to=4。就将head->5->4->3->2->1翻转后，将链表变成head->5->2->3->4->1
思路：
  有了之前翻转整个链表的解题思路，现在要翻转部分链表就相对简单多了
  1.根据from和to找到from-1,from,to,to+1四个节点
    (注意临界条件：下面这两种情况不符合条件不翻转
      如果from从头节点开始，则from-1节点为空，翻转后需要把to设置为头节点的后继节点？？？
      from和to节点也可能超过尾节点
    )
  2.对from到to的节点进行翻转
  3.将from-1节点指向to节点，将from节点指向to+1节点
注意：
  在leetcode上有原题，通过修改代码以及改bug，最终运行通过，但是有一些疑惑，具体见下面leetcode运行通过代码
*/
/*迭代翻转from到to的节点*/
//下面仅仅为思路，在leetcode上无法运行通过
function iterationInvertLinkedList(fromIndex, toIndex) {
  let fromPre = null; //from-1节点
  let from = null; //from节点
  let to = null; //to节点
  let toNext = null; //to+1节点

  //步骤1
  let current = head.next; //从头节点的下一个节点开始
  let curIndex = 1; //头节点的下一个节点的index为1
  while (current != null) {
    if (curIndex === fromIndex - 1) {
      fromPre = current;
    } else if (curIndex === fromIndex) {
      from = current;
    } else if (curIndex === toIndex) {
      to = current;
    } else if (curIndex === toIndex + 1) {
      toNext = current;
    }
    current = current.next;
    curIndex++;
  }

  if (from === null || to === null) {
    throw new Error("不符合条件");
  }

  //步骤2：以下使用循环迭代法翻转从from到to的节点
  let pre = from;
  let cur = pre.next;
  while (cur != toNext) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  //步骤3：将fromPre节点指向to节点，将from节点指向toNext节点
  //（如果从head的后继节点开始翻转，则需要重新设置head的后继节点）
  if (fromPre != null) {
    fromPre.next = to;
  } else {
    //formPre==null时，意味着我们要求翻转的部分头节点是第一个节点！
    head.next = to;
  }
  from.next = toNext;
}

//下面为leetcode上运行通过的代码1（添加了哨兵节点的）（重点掌握这个！）
/*
  添加哨兵节点的好处:
  1.无需再判断fromPre是否为null了，添加了哨兵节点之后它不可能为null
  2.无需再追踪head了，最后return hair.next总是对的！
*/

// var reverseBetween = function(head, m, n){

// }

var reverseBetween = function (head, m, n) {
  let hair = new ListNode(0);
  hair.next = head;

  let fromPre = null;
  let from = null;
  let to = null;
  let toNext = null;

  let current = hair;
  let curIndex = 0;
  while (current) {
    if (curIndex === m - 1) {
      fromPre = current;
    }
    if (curIndex === m) {
      from = current;
    }
    if (curIndex === n) {
      to = current;
    }
    if (curIndex === n + 1) {
      toNext = current;
    }
    current = current.next;
    curIndex++;
  }

  //翻转
  let pre = from;
  let cur = pre.next;
  pre.next = null;
  while (cur !== toNext) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  //连接
  fromPre.next = to;
  from.next = toNext;

  return hair.next;
};

var reverseBetween = function (head, m, n) {
  //为给定的head添加哨兵节点
  let hair = new ListNode(0);
  hair.next = head;
  //正式开始
  if (m < n) {
    let fromPre = null; //from-1节点
    let from = null; //from节点
    let to = null; //to节点
    let toNext = null; //to+1节点
    //步骤1
    let current = hair; //从哨兵节点开始
    let curIndex = 0; //哨兵节点的下一个节点的index为1
    while (current != null) {
      if (curIndex === m - 1) {
        fromPre = current;
      } else if (curIndex === m) {
        from = current;
      } else if (curIndex === n) {
        to = current;
      } else if (curIndex === n + 1) {
        toNext = current;
      }
      current = current.next;
      curIndex++;
    }
    //步骤2：以下使用循环迭代法翻转从from到to的节点
    let pre = from;
    let cur = pre.next;
    pre.next = null;
    while (cur != toNext) {
      //循环结束的时候pre是指向to节点的
      let next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }
    //步骤3：将fromPre节点指向to节点，将from节点指向toNext节点
    //添加了哨兵节点之后，无论如何fromPre都不可能为null，故无需再先判断fromPre是否为null
    fromPre.next = to;
    //无论to节点是否为尾节点，此句始终正确（to节点为尾节点时，toNext为null，null可以用作其他节点的后一个节点）
    from.next = toNext;
  }
  //添加了哨兵节点之后，无需再关注head的指向了，直接返回hair.next即可（如果未添加哨兵节点，head可能再翻转的过程中会变，导致最后return head有问题。。。且head的指向有点儿难以追踪）
  return hair.next;
};

//下面为leetcode上运行通过的代码2（注意head为不带头节点的链表，即无哨兵节点的链表）
/*
  没有哨兵节点的缺点：
  1.需判断fromPre是否为null了，来做出不同的判断
  2.需要追踪head（尤其是from是第一个节点的时候），而且还需要在合适的时候矫正head，这样最后return head才不会出问题。。。
    暂时尚未成功追踪head。。。
*/
var reverseBetween = function (head, m, n) {
  if (m < n) {
    let fromPre = null; //from-1节点
    let from = null; //from节点
    let to = null; //to节点
    let toNext = null; //to+1节点

    //步骤1
    let current = head; //在leetcode中给的链表是不带头节点的链表
    let curIndex = 1; //头节点的下一个节点的index为1
    while (current != null) {
      if (curIndex === m - 1) {
        fromPre = current;
      } else if (curIndex === m) {
        from = current;
      } else if (curIndex === n) {
        to = current;
      } else if (curIndex === n + 1) {
        toNext = current;
      }
      current = current.next;
      curIndex++;
    }

    //步骤2：以下使用循环迭代法翻转从from到to的节点
    let pre = from;
    let cur = pre.next;
    console.log("head1", head); //!!!head为 3->5->null
    pre.next = null;
    console.log("head2", head); //!!!head为 3->null
    while (cur != toNext) {
      //循环结束的时候pre是指向to节点的
      let next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }
    console.log("翻转之后的head, pre", head, pre); //!!!head为 3->null

    /*
    重要!!!也是疑惑点：
        为什么是从头节点开始翻转的时候就需要将head重定向到pre?   
        为什么不是从头节点开始翻转的就不需要将head重定向到pre?
        为什么head打印出来的值那么奇怪？
    要弄清楚这三个问题，需要追到head在代码执行中的变化，但是因为指针太多，有种追不到head变化的感觉。。。
    */
    if (fromPre === null) {
      head = pre;
    }
    //head = pre;
    console.log("重定向之后的head", head); //!!!重定向之后head才变为我们希望的 5->3->null

    //步骤3：将fromPre节点指向to节点，将from节点指向toNext节点
    //只有当fromPre不为null，即from节点不为头节点时，才能使fromPre节点成为to节点的前置节点（因为null不可以用作其他节点的前一个节点
    if (fromPre !== null) {
      fromPre.next = to;
    }
    //无论to节点是否为尾节点，此句始终正确（to节点为尾节点时，toNext为null，null可以用作其他节点的后一个节点）
    from.next = toNext;
  }

  return head;
};
let list = { val: 3, next: { val: 5, next: null } };
reverseBetween(list, 1, 2);

// ------------------------------------------------------------------------以下可不看------------------------------------------------------------------------

//下面为leetcode上运行通过的代码2（思考过程草稿）
var reverseBetween = function (head, m, n) {
  if (m < n) {
    let fromPre = null; //from-1节点
    let from = null; //from节点
    let to = null; //to节点
    let toNext = null; //to+1节点

    //步骤1
    let current = head; //从头节点的下一个节点开始
    let curIndex = 1; //头节点的下一个节点的index为1
    while (current != null) {
      if (curIndex === m - 1) {
        fromPre = current;
      } else if (curIndex === m) {
        from = current;
      } else if (curIndex === n) {
        to = current;
      } else if (curIndex === n + 1) {
        toNext = current;
      }
      current = current.next;
      curIndex++;
    }

    //步骤2：以下使用循环迭代法翻转从from到to的节点
    let pre = from;
    let cur = pre.next;
    pre.next = null;
    while (cur != toNext) {
      //循环结束的时候pre是指向to节点的
      let next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }
    if (fromPre === null) {
      head = pre;
    }
    //head = pre;
    //console.log("翻转之后的head, pre", head, pre);

    // if(fromPre === null && toNext === null){    //则为头节点开始，尾节点结束。等于整条链表翻转
    //     return head;
    // }else if(fromPre === null && toNext != null){   //则为头节点开始，中间节点结束
    //     from.next = toNext;
    // }else if(fromPre != null && toNext === null){   //则中间节点开始，尾节点结束
    //     fromPre.next = to;
    // }else{
    //     from.next = toNext;
    //     fromPre.next = to;
    // }

    //步骤3：将fromPre节点指向to节点，将from节点指向toNext节点
    //只有当fromPre不为null，即from节点不为头节点时，才能使fromPre节点成为to节点的前置节点（因为null不可以用作其他节点的前一个节点
    if (fromPre !== null) {
      fromPre.next = to;
    }
    //无论to节点是否为尾节点，此句始终正确（to节点为尾节点时，toNext为null，null可以用作其他节点的后一个节点）
    from.next = toNext;
  }

  return head;
};
let list = { val: 3, next: { val: 5, next: null } };
reverseBetween(list, 1, 2);
