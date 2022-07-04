// /*链表中的节点。data-节点的值，next-指向下一个节点的引用*/
// function Node(data){
//   this.data = data;
//   this.next = null;
// }
//
// /*链表写法一---不定义哨兵节点*/
// function LinkedList(){
//   let length = 0;		//链表长度，非必须可不加
//   let head = null;	  //头节点
//
//   function addNode(val){
//     if(head == null){
//       head = new Node(val)
//     }else{
//       let current = head;
//       while(current.next){
//         current = current.next;
//       }
//       //此时current为链表的最后一个节点
//       current.next = new Node(val);
//     }
//   }
//
// }


//------------------------下面为正式部分--------------------------------------


/*链表中的节点。data-节点的值，next-指向下一个节点的引用*/
function Node(data){
  this.data = data;
  this.next = null;
}

/*链表写法二---定义哨兵节点*/
function LinkedList(){
  let length = 0;		     //链表长度，非必须可不加
  let head = new Node(0);  //哨兵节点(充当头节点),我感觉还是new Node(null)比较好吧？

  //尾插入
  this.addNode = function(val){
    //1.构造新节点
    let newNode = new Node(val);
    //2.遍历到链表的最后一个节点
    let current = head;
    while(current.next){
      current = current.next;
    }
    //3.将新节点添加到最后一个节点的后面
    current.next = newNode;
    length++;
  }

  //头插入
  this.headInsert = function(val){
    //1.构造新节点
    var newNode = new Node(val);
    //2.新节点指向头节点之后的节点
    newNode.next = head.next;
    //3.头节点指向新节点
    head.next = newNode;
    length++;
  }

  //打印链表
  this.printList = function(){
    var tmp = head;
    while(tmp){
      console.log(tmp.data);
      tmp = tmp.next;
    }
    console.log('打印链表完毕');
  }

  //删除指定节点
  this.removeSelectedNode = function(val){
    //遍历链表，找到待删除的节点（即节点.data和传入值val相等的那个节点）
    let current = head;
    if(current){
      while(current.data != val){
        current = current.next;
      }
      let deletedNode = current;
      if(deletedNode.next){ //1.要删除的节点不是尾节点时
        //写法一（更简单清晰）
        deletedNode.val = deletedNode.next.val;
        deletedNode.next = deletedNode.next.next;
        //因为头节点时哨兵节点，所以没有第2种情况-要删除的节点是尾节点也是头节点！
      }else{  //3.要删除的节点是尾节点，且前面还有其他节点时
        let temp = head;
        while(temp.next.next){
          temp = temp.next;
        }
        //现在temp就是链表的倒数第二个节点
        temp.next = null;
      }
    }else{
      return;
    }
  }

  //链表翻转--非递归版
  this.iterationInvertLinkedList = function(){
    //步骤1
    let pre = head.next;
    let cur = pre.next;
    pre.next = null;

    //步骤2
    while(cur != null){
      //务必注意：在cur指向pre之前一定要先保留cur的后继节点，不然如果cur先指向pre，之后就再也找不到后继节点了
      let next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }
    //此时pre指向的是原链表的尾节点，翻转后即为链表head的后继节点
    head.next = pre;
  }

  //k个一组翻转链表
  this.iterationInvertLinkedListEveryK = function(k){
    var tmp = head.next;
    var step = 0;   //计数，用来找出首节点和尾节点

    var startK = null;      //k个一组链表中的头节点
    var startKPre = head;   //k个一组链表中的前置节点
    var endK;               //k个一组链表中的尾节点
    while(tmp != null){
      //tmp的下一个节点(因为由于翻转，tmp的后继节点会变，要提前保存)
      var tmpNext = tmp.next;
      if(step == 0){
        //k个一组链表区间的头节点
        startK = tmp;
        step++;
      }else if(step == k-1){
        //此时找到了k个一组链表区间的尾节点（endK)
        endK = tmp;
        var endKNext = endK.next;
        //对这段链表用迭代进行翻转
        var pre = startK;
        var cur = startK.next;
        if(cur == null){
          break;
        }
        while(cur != endKNext){
          var next = cur.next;  //在cur的next指针改变指向之前，必须先保存cur的下一个节点。否则next指针指向改变以后，cur就和后面的节点断了联系了！
          //pre.next = null; ？？？不需要先把pre的next指针先断掉吗？如果不这样的话下面一句代码不会导致成环吗？
          //我猜测：会导致成环，但是不会影响到这个链表的打印结果！因为在每一组链表的连接之处的next指针不是双向的！
          cur.next = pre;
          pre = cur;
          cur = next;
        }
        //翻转后此时endK和startK分别是k个一组链表的首尾节点
        startKPre.next = endK;
        startK.next = endKNext;
        //当前的k个一组翻转完了，开始下一个k个一组的翻转.
        startKPre = startK;
        step = 0;
      }else {
        step++;
      }
      tmp = tmpNext;
    }
  }
}

//检测“插入”功能
var arr = [1,2,3,4];
var linkedList = new LinkedList()
for(var i=0; i<arr.length; i++){
  //linkedList.headInsert(arr[i]);	//头部插入
  linkedList.addNode(arr[i]);			//尾部插入
}
linkedList.printList();

//检测“删除某个特定值节点”功能
//linkedList.removeSelectedNode(2);
//linkedList.removeSelectedNode(4);
//linkedList.printList();


//检测“链表翻转--非递归版”功能
// linkedList.iterationInvertLinkedList();
// linkedList.printList();

//检测"链表翻转--k个一组翻转链表"功能
linkedList.iterationInvertLinkedListEveryK(2);
linkedList.printList();
