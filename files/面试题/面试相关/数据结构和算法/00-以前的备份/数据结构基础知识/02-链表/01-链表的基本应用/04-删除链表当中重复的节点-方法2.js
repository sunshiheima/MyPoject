/*
  方法2：重新比较链接数组
  链表是排好顺序的，所以重复元素都会相邻出现，递归链表：
    1.当前节点为空或当前节点的next为空，返回该节点
    2.当前节点是重复节点：找到后面第一个不重复的节点
    3.当前节点不重复：将当前节点的next赋值为下一个不重复的节点
*/
function deleteDuplication(pHead){
  if(!pHead || !pHead.next){    //当没有头节点（即链表为空）或者有头节点但是头节点没有下一个节点（即链表只有一个节点）
    return pHead;
  }else if(pHead.val === pHead.next.val){   //当前节点的值 和 当前节点的下一个节点的值 相同时
    let tempNode = pHead.next;    //将当前节点的下一个节点 先保存在一个变量tempNode中
    while(tempNode && pHead.val === tempNode.val){    //当变量tempNode的值不为空 && 当前节点的值等于变量tempNode的值 时
      tempNode = tempNode.next;
    }
    return deleteDuplication(tempNode)
  }else{    //当前节点的值 和 当前节点的下一个节点的值 不相同时
    pHead.next = deleteDuplication(pHead.next);
    return pHead;
  }
}

//递归。。。看不懂。。。。