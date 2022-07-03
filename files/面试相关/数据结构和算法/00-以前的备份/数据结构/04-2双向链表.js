/*
  双向链表和普通链表的区别在于：
    在链表中，一个节点只有链向下一个节点的链接，
    而在双向链表中，链接是双向的：一个链向下一个元素，另一个链向前一个元素

  在单向链表中，如果迭代列表时错过了要找的元素，就需要回到链表起点，重新开始迭代。
  而在双向链表提供了两种迭代列表的方法：从头到尾，或者反过来。我们也可以访问一个特定节点的下一个或者前一个元素。
  这是双向链表的一个优点

*/

//创建双向链表类
function DoublyLinkedList(){
  var Node = function(element){
    this.element = element;
    this.next = null;
    this.prev = null;   //新增的
  };
  var length = 0;
  var head = null;
  var tail = null;    //新增的

  //方法们
  //1.在任意位置插入一个新元素
  /*
    向双向链表中插入一个新项跟（单向）链表非常类似。区别在于：
    链表只要控制一个next指针，而双向链表则要同时控制next和prev(previous，前一个)这两个指针

    我们也可以对insert和remove这两个方法的实现做一些改进：
      在结果为否的情况下，我们可以把元素插入到列表的尾部。
      性能也可以有所改进，比如，如果position大于length/2,就最好从尾部开始迭代，而不是从头开始（这样就能迭代更少列表中的元素）
  */
  this.insert = function(position,element){
    if(position>=0 && position<=length){
      var node = new Node(element),
          current = head,
          previous,
          index = 0;

      if(position===0){   //当将新元素插入到第一个位置时
        if(!head){  //1当链表没有head时，即链表为空时，将新元素插入到第一个位置
          head = node;
          tail = node;
        }else{    //当链表不为空时，将新元素插入到第一个位置
          node.next = current;
          current.prev = node;  //2
          head = node;
        }
      }else if(position===length){  //当将元素插入到最后一个位置时
        current = tail; //3
        current.next = node;
        node.prev = current;
        tail = node;
      }else{  //当把元素插入到中间位置时（即既不插入到第一个位置也不插入到最后一个位置）
        while(index<position){  //4
          previous = current;
          current = current.next;
        }
        node.next = current;  //5
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
      length++;
      return true;
    }else{
      return false;
    }
  };

  //2.从任意位置移除元素
  /*
    从双向链表中移除元素跟链表非常类似，唯一的区别就是还需要设置前一个位置的指针
  */
  this.removeAt = function(position){
    if(position>-1 && position<length){
      var current = head,
          previous,
          index = 0;
      if(position===0){   //当需要移除第一个位置的元素时
        head = current.next;  //1
        if(length===1){   //2 当链表只有一个元素时（即只有head时），将该元素移除
          tail = null;
        }else{            //当链表中不是只有一个元素时，移除第一位置的元素
          head.prev = null;   //3
        }
      }else if(position===length-1){    //当需要移除最后一个元素时
        current = tail;   //4
        tail = current.prev;
        tail.next = null;
      }else{    //当需要移除中间位置的元素时（即既不是第一个位置也不是最后一个位置时）
        while(index<position){    //5
          previous = current;
          current = current.next;
        }
        previous.next = current.next;   //6
        current.next.prev = previous;
      }
      length--;
      return current.element;
    }else{
      return null;
    }
  };






}