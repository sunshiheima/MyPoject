/*
  链表：动态的数据结构，这意味着我们可以从中任意添加或移除项，它会按需进行扩容

  链表存储有序的数据集合：
    但不同于数组，链表中的元素在内存中并不是连续放置的，
    每个元素由一个存储元素本身的节点和一个指向下一个元素的引用（也称指针或者链接）组成

  链表的特点:
    添加或者删除元素的时候不需要移动其他元素
    但是要是访问链表中间的一个元素，需要从起点（表头）开始迭代列表直到找到所需的元素
*/

//创建链表类
function LinkedList(){
  var Node = function(element){
    this.element = element;     //element属性--即要添加到列表的值
    this.next =null;            //next属性--即指向列表中下一个节点项的指针
  }
  var length = 0;       //length属性(内部/私有变量）：存储列表项数量
  var head = null;      //head变量：存储第一个节点的引用

  //向链表添加元素，可能有两种场景：列表为空，添加的是第一个元素（即当作head）；或者列表不为空，向其追加元素
  this.append = function(element){
    var node = new Node(element),
        current;
    if(head === null){
      head = node;
    }else{
      current = head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
    length++;     //当原本列表为空的情况下，head=node,只有head的情况下length=1???
  }

  //从链表移除元素，移除元素有两种场景：
  /*
    第一种：移除第一个元素（第一个元素被作为head，移除了第一个元素则应该将第二个元素作为head)
    第二种：移除第一个以外的其它任一元素
  */
  this.removeAt = function(position){
    if(position>-1 && position<length){
      var current = head,
          previous,
          index = 0;
      if(position===0){
        head = current.next;
      }else{
        //当不是移除第一个元素时
        while(index<position){
          previous = current;
          current = current.next;
          index++;
        }
        //将previous与current的下一项链接起来：跳过current,从而移除它
        previous.next = current.next;
      }
      length--;
      return current.element;
    }else{
      return null;
    }
  }

  //在任意位置插入一个元素
  //使用变量引用我们需要控制的节点非常重要，这样就不会丢失节点之间的链接
  this.insert = function(position, element){
    if(position>=0 && position<=length){
      var node = new Node(element),
          current = head,
          previous,
          index=0;
      if(position===0){
        node.next = current;
        head = node;
      }else{
        while(index<position){
          previous = current;
          current = current.next;
          index++;
        }
        node.next = current;
        previous.next = node;
      }
      length++;
      return true;
    }else{
      return false;
    }
  }

  //由于列表项使用了Node类，就需要重写继承自JS对象默认的toString方法，让其只输出元素的值
  this.toString = function(){
    var current = head,
        string = '';
    while(current){
      string += ","+current.element;
      current = current.next;
    }
    return String.slice(1)
  }

  //indexOf方法接受一个元素的值，如果在列表中找到它，即返回列表元素的值，否则返回-1
  this.indexOf = function(element){
    var current = head,
        index = -1;
    while(current){
      if(element===current.element){
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  //借助已实现的indexOf()和removeAt()来实现remove()方法
  this.remove = function(element){
    var index = indexOf(element);
    return this.removeAt(index);
  }

  //检查链表是否为空
  this.isEmpty = function(){
    return length === 0;
  }

  //获取链表中的元素数量，和我们之前几章实现的类有所不同，链表的length是内部控制的，因为LinkedList是从头构建的
  this.size = function(){
    return length;
  }

  //获取链表的头节点
  /*
    head变量是LinkedList类的私有变量（这意味着它不能在LinkedList实例外部被访问和修改，只有通过LinkedList实例才可以）
    但是，如果我们需要在类的实现外部循环访问列表，就需要提供一个获取类的第一个元素的方法
  */
  this.getHead = function(){
    return head;
  }

}
var list = new LinkedList();



