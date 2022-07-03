/*
题目：
  给定单链表的头指针和要删除的指针节点，在O(1)时间内删除该节点
思路：
  分下面几种情况：
  1.删除的节点不是尾部节点-则将next节点覆盖当前节点即可，这样等于是自己删了自己。
  2.删除的节点是尾部节点且等于头节点（即整个链表只有头节点这一个节点）-则将头节点直接置为null即可
  3.删除的节点是尾节点且前面还有节点-这种情况下无法再像1那样自己能够删除自己（既让下一个覆盖自己），
    因为现在是尾节点故没有下一个了，因此只能让上一个来删自己。则遍历到末尾的前一个节点，然后将此尾节点删除
复杂度分析：
  因为只有第三种情况的时间复杂度是O(n)，且这种情况只会出现1/n次，所以算法时间复杂度为O(1)
*/
function deleteNode(pHead, node) {
  //1.要删除的节点不是尾节点时
  if (node.next) {
    //写法一（更简单清晰）
    node.val = node.next.val;
    node.next = node.next.next;
    //写法二（更优-因为将删除的那个节点置为了null，而不是将其仍在内存中不管了）
    // let nextNode = node.next;
    // node.val = nextNode.val;
    // node.next = nextNode.next;
    // nextNode = null;
  } else if (node === pHead) {
    //2.是尾节点且等于头节点时
    pHead = null;
    node = null; //???将该引用(待删除的这个节点，是链表当中的一部分)置为null，而不是将其扔在内存中不管了
  } else {
    //3.是尾巴节点且前面还有节点
    //从头节点开始遍历链表
    node = pHead;
    while (node.next.next) {
      node = node.next;
    }
    //此时node就是链表的倒数第二个节点了
    node.next = null;
    node = null; //???将该引用(待删除的这个节点，是链表当中的一部分)置为null，而不是将其扔在内存中不管了
  }
  return node;
}
//注意：上面的pHead和node，其实都不单单是一个节点而已，而都可以延申出一个子链表。

/*
题目：
  删除链表中重复的节点
思路：
  1.用一个map存储每个节点出现的次数；
  2.删除出现次数大于1的节点
  时复为O(n)，空复为O(n)
*/
//解法一
function deleteDuplication(pHead) {
  const map = {};
  //只有当链表中的节点至少有2个时，才可能有重复的节点
  if (pHead && pHead.next) {
    //第一次遍历：用map存储每个节点出现的次数
    let current = pHead;
    while (current) {
      const val = map[current.val];
      map[current.val] = val ? val + 1 : 1;
      current = current.next;
    }
    //第二次遍历：删除出现次数大于1的节点
    current = pHead;
    while (current) {
      const val = map[current.val];
      if (val > 1) {
        //删除节点
        console.log(val);
        if (current.next) {
          //1.当要删除的节点不是尾节点时
          current.val = current.next.val;
          current.next = current.next.next;
        } else if (current === pHead) {
          //2.当要删除的节点是尾节点且是头节点时
          current = null; //???
          pHead = null;
        } else {
          //3.当要删除的节点是尾节点且前面还有节点时
          current = pHead;
          while (current.next.next) {
            current = current.next;
          }
          //此时，current就是链表的倒数第二个节点
          current.next = null;
          current = null; //???将该引用(待删除的这个节点，是链表当中的一部分)置为null，而不是将其扔在内存中不管了
        }
      } else {
        current = current.next;
      }
    }
  }
  return pHead;
}
//注意：上面的pHead不单单是一个节点，是可以延申出一整条链表的。

/*
题目：
  有一个已经排好顺序的链表，删除该链表中重复的元素
思路：
  1.当前节点是重复节点：找到后面第一个不重复的节点
  2.当前节点不重复：将当前节点的next赋值为下一个不重复的节点
*/
function deleteDuplication(pHead) {
  if (pHead && pHead.next) {
    if (pHead.val === pHead.next.val) {
      let tempNode = pHead.next;
      while (tempNode && pHead.val === tempNode.val) {
        tempNode = tempNode.next;
      }
      pHead.next = tempNode;
    }
  } else {
    return pHead;
  }
}

//下面只是一个大概的思路，还未完成，是有问题的！你可以想一想：此函数该返回什么？pHead吗？还是current？这样一想就会发现有问题。。。
function deleteDuplication(pHead) {
  if (pHead && pHead.next) {
    let current = pHead;
    //从头节点开始向后遍历，直到current不存在即遍历链表完毕，就终止while循环
    while (current) {
      //当当前节点的值等于下一个节点的值时
      if (current.val === current.next.val) {
        let tempNode = current.next;
        while (tempNode && current.val === tempNode.val) {
          tempNode = tempNode.next;
        }
        //此时tempNode还存在，但是current.val不等于tempNode.val了，即我们找到了后面第一个不重复的节点了
        // if(tempNode){
        //   current.next = tempNode;
        //   current = tempNode;
        // }else{  //此时tempNode就已经不存在了，即到达了尾节点
        //   current.next = null;
        // }
        current.next = tempNode;
        current = tempNode;
      } else {
        current = current.next;
      }
    }
  } else {
    return pHead;
  }
}
