/*
题目：
    编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。
示例：
    输入：[1, 2, 3, 3, 2, 1]
    输出：[1, 2, 3]
注意：
    删除节点的方式：
    1.当待删除节点为头节点且为尾节点时（即链表只剩下这最后一个节点了），则将head置为null即可！
    2.当待删除节点为头节点时，只能用【自己删自己(狸猫换太子)】
    3.当待删除节点不为头节点时，最好用【前一个节点删自己】。如果使用【自己删自己】，当节点不为尾节点时没问题，当节点为尾节点的时候就有问题了！

    而要删除重复节点，则该链表至少要有两个节点，且永远不需要删除头节点。故前两种情况可以不考虑了，只需要使用【前一个节点删自己】即可！
*/

//解法一：是看的题解中的(代码简洁，且容易理解，优先用这个！)
var removeDuplicateNodes = function (head) {
  if (head === null) {
    return null;
  }
  //console.log("head.val", head.val);
  let map = {};
  map[head.val] = true;
  let prev = head;
  let current = head.next;
  while (current) {
    if (map[current.val]) {
      //表明为重复节点
      prev.next = current.next; //删除该节点
    } else {
      map[current.val] = true;
      prev = prev.next; //注意这一行应该写在else内部，可以画图理解一下就清楚了
    }
    current = current.next;
  }
  return head;
};

//解法二：自己想出来的（比较冗余，可以帮助理解链表，当时锻炼了一下自己的思维能力吧。）
var removeDuplicateNodes = function (head) {
  const map = {};
  const mapStorage = {};
  //链表中至少要有两个节点，才可能有重复节点
  if (head && head.next) {
    //统计每个节点值的个数（map和mapStorage）
    let current = head;
    while (current) {
      const val = map[current.val];
      map[current.val] = val ? val + 1 : 1;
      current = current.next;
    }
    current = head;
    while (current) {
      const val = mapStorage[current.val];
      mapStorage[current.val] = val ? val + 1 : 1;
      current = current.next;
    }
    //开始移除重复节点(下面的current、map、head都是在变化的，而mapStorage保持不变)
    current = head;
    while (current) {
      const count = map[current.val];
      let countStorage = mapStorage[current.val];
      let temp = current.val;
      //1.判断是否为重复节点；2.若为重复节点，则是否为重复节点当中的第一个节点
      if (countStorage === 1) {
        //表明不是重复节点，保留（直接跳过）
        current = current.next;
      } else if (count === countStorage) {
        //到此处来表明当前节点为重复节点，两者相等表明该节点为重复节点中的第一个节点
        //那么保留这第一个节点（直接跳过）
        current = current.next;
        map[temp]--; //将map相应值-1
      } else {
        //到此处来表明当前节点为重复节点，且不为重复节点中的第一个节点
        //删除该节点（下面的代码为删除节点的核心代码）
        if (current.next) {
          current.val = current.next.val;
          current.next = current.next.next;
        } else if (current === head) {
          //我感觉这个全等比较还是有问题。。。
          current = null;
          head = null;
        } else {
          current = head;
          while (current.next.next) {
            current = current.next;
          }
          current.next = null;
          current = null;
        }
        map[temp]--; //将个数-1
      }
    }
  }
  return head;
};

/*
题目：
  有一个已经排好顺序的链表，删除该链表中重复的元素
思路：
  1.当前节点是重复节点：找到后面第一个不重复的节点
  2.当前节点不重复：将当前节点的next赋值为下一个不重复的节点
注意：
  尚未尝试运行（思路上是没问题的，也很好理解！就是递归代码需要画图感受一下！）
*/
function deleteDuplication(pHead) {
  if (pHead && pHead.next) {
    if (pHead.val === pHead.next.val) {
      let tempNode = pHead.next;
      while (tempNode && pHead.val === tempNode.val) {
        tempNode = tempNode.next;
      }
      pHead.next = tempNode;
      return deleteDuplication(tempNode);
      //上面两句代码是否等同于：pHead.next = return deleteDuplication(tempNode);
    }
  } else {
    pHead.next = deleteDuplication(pHead.next);
    return pHead;
  }
}
