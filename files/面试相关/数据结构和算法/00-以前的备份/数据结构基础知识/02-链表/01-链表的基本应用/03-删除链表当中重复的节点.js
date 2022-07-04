/*
  方法1：存储链表中元素出现的次数
    -用一个map存储每个节点出现的次数
    -删除出现次数大于1的节点

  此方法删除节点时可以使用02-删除链表中的节点 定义的方法
*/

function deleteDuplication(pHead){    //从头节点开始
  const map = {};     //map就是就是一个普通对象，而并非map集合
  if(pHead && pHead.next){    //当节点存在&&该节点不是尾节点时
    //第一次循环——用map存储每个节点出现的次数
    let current = pHead;
    while(current){
      const val = map[current.val];   //在map对象当中 查找索引为“当前节点的值”对应的值，第一遍走到这儿，应该都会返回undefined，所以val被赋值为undefined
      map[current.val] = (val ? val + 1 : 1);     //在map对象当中新添加一个键值对。键名为“当前节点的值”；值取多少要分情况——如果上一句结果val为undefined，则将值设为1；否则将值+1
      current = current.next;
    }
    //第二次循环——根据第一次循环结果map找出出现次数大于1的节点，将其删除（这个过程中：要删除的节点的位置不一样，删除节点的方式也会有所不同）
    current = pHead;
    while(current){
      const val = map[current.val];     //把链表当中一个值出现的数量 保存在变量val里面。所以如果val>1,表示其出现次数大于1，按照题目要求应该被删除
      if(val>1){
        //删除节点
        console.log(val);
        if(current.next){   //如果要删除的不是尾节点
          current.val = current.next.val;
          current.next = current.next.next;
        }else if(current === pHead){    //如果要删除的是尾节点且是头节点（即此链表当中就只有这一个节点了。那val>1？该节点还出现了多次？这种情况不可能出现）
          current = null;
          pHead = null;
        }else{    //如果要删除的是尾节点，且还有其他节点
          //第三次循环——为了删除尾节点
          current = pHead;      //注意此处current不再是外层current，这里也可以再声明一个新的变量来保存当前引用节点。（其实每一次循环就可以用新变量的，但是这里应该是为了降低空间复杂读所以自始至终只引用一个变量）
          while(current.next.next){   //从头节点开始遍历，当遍历到倒数第二个节点的时候停止。即最后一圈: current是倒数第三个节点
            current = current.next;     //则现在current是倒数第二个节点了
          }
          current.next = null;    //现在current是倒数第二个节点，此操作就是将倒数第二个节点的下一个节点——即最后一个节点删除
          current = null;       //注意：之前将这一句理解为了要删除倒数第二个节点，其实不是，这里是为了给结束循环（while(current)）提供条件，因为已经会删除最后一个节点了，意味
          //注意：节点是不能通过将其自身设置为null来实现删除自己的，要删除当前节点，只能让当前节点的上一个节点的next值设为null，或者直接指向湖面别的节点，才能删除当前节点）
        }
      }else{
        current = current.next;
      }
    }
  }
  return pHead;     //如果传入的头节点不存在（即链表为空）或者头节点再没有下一个节点了（即整个链表只有一个节点），就直接原样返回传入的pHead
}