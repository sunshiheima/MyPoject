/*
  数组（或者称为列表），是一种非常简单的存储数据序列的数据结构
  链表：动态的数据结构，
        这意味着我们可以从中任意添加或移除项，它会按需进行扩容

  要存储多个元素，数组（或列表）可能是最常用的数据结构。
  这种数据结构非常方便，提供了便利的[]语法来访问它的元素，然而这种数据结构有一种缺点：
  （在大多数语言当中）数组的大小是固定的，从数组的起点或中间插入或移除项的成本很高，因为需要移动元素
  尽管JS的Array类方法可以帮我们做这些事，但背后的情况同样是这样

  链表存储有序的数据集合。
  但不同于数组，链表中的元素在内存中并不是连续放置的。
  每个元素由一个存储元素本身的节点和一个指向下一个元素的引用（也称指针或链接）组成

  链表相对于数组，好处在于：添加或删除元素的时候不需要移动其他元素
                坏处在于：数组可以直接访问任意位置的元素，
                         而想访问链表中间的一个元素，需要从起点（表头）开始迭代列表直到找到所需的元素
*/

//创建链表类
function LinkedList(){
  var Node = function(element){   //1 LinkedList需要Node辅助类，Node类表示要加入到列表中的项
    this.element = element;       //element属性，即要添加到列表的值
    this.next = null;             //next属性，即指向列表中下一个节点项的指针
  };
  var length = 0;     //2 length属性（内部/私有变量）：存储列表项数量
  var head = null;    //3 head变量：存储第一个节点的引用

  //向链表尾部添加元素，可能有两种场景：列表为空，添加的是第一个元素(即被当作head)；或者列表不为空，向其追加元素
  this.append = function(element){
    var node = new Node(element), //1
        current;  //2
    if(head===null){  //3
      head = node;
    }else{
      current = head;   //4
      while(current.next){
        current=current.next;
      }
      current.next = node;    //5
    }
    length++;   //那如果列表为空，则head=node，只有head的情况下length=1???
  };

  //从链表移除元素，移除元素有两种场景：
  /*第一种是移除第一个元素（第一个元素被作为head，移除了第一个元素则应该将第二个元素作为head)，
  第二种是移除第一个以外的任一元素*/
  this.removeAt = function(position){
    if(positon>-1 && position<length){  //1
      var current = head,   //2
          previous, //3
          index = 0;  //4
      if(position===0){   //5
        head = current.next;
      }else{
        //当不是移除第一个元素时，我们需要依靠一个细节来迭代列表，直到到达目标位置
        while(index<position){  //6 我们会使用一个用于内部控制和递增的index变量
          previous = current;   //7 我们还需要一个对当前元素的前一个元素的引用，它被命名为previous
          current = current.next;   //8 current变量总是为对所循环列表的当前元素的引用
          index++;
        }
        //将previous与current的下一项链接起来：跳过current，从而移除它
        previous.next = current.next; //9
      }
      length --;  //10
      return current.element;
    }else{
      return null;  //11
    }
  };

  //在任意位置插入一个元素
  //使用变量引用我们需要控制的节点非常重要，这样就不会丢失节点之间的链接
  this.insert = function(position,element){
    if(position>=0 && position<=length){  //1
      var node = new Node(element),
          current = head,
          previous,
          index=0;
      if(position===0){
        node.next = current;  //2 current是对列表中第一个元素的引用,我们需要做的是把node.next的值设为current
        head = node;
      }else{
        while(index<position){  //3
          previous = current;
          current = current.next;
          index++;
        }
        node.next = current;  //4
        previous.next = node; //5
      }
      length++;
      return true;
    }else{
      return false; //6
    }
  };

  //由于列表项使用了Node类，就需要重写继承自JS对象默认的toString方法，让其只输出元素的值
  this.toString = function(){
    var current = head,   //1
        string = '';    //2
    while(current){   //3
      string += ","+current.element;  //4
      current = current.next;   //5
    }
    return string.slice(1);   //6
  };

  //indexOf方法接收一个元素的值，如果在列表中找到它，即返回元素的值，否则返回-1
  this.indexOf = function(element){
    var current = head,   //1
        index=-1;
    while(current){ //2
      if(element===current.element){
        return index;   //3
      }
      index++;  //4
      current = current.next; //5
    }
    return -1;
  };

  //借助已实现的indexOf()和removeAt()来实现remove()方法
  /*
    如果需要更改removeAt方法的代码，这样也更容易——两个方法都会被更改（这就是重用代码的妙处！）
    这样我们就不需要维护两个从列表中移除一项的方法，只需要一个！removeAt方法将会检查边界约束
  */
  this.remove = function(element){
    var index = indexOf(element);
    return this.removeAt(index);
  };

  //检查链表是否为空
  this.isEmpty = function(){
    return length===0;
  };

  //获取链表中的元素数量.和我们之几章实现的类有所不同，链表的length是内部控制的，因为LinKedList是从头构建的
  this.size = function(){
    return length;
  };

  //获取链表的头节点
  /*
    head变量是LinkedList类的私有变量（这意味着它不能在LinkedList实例外部被访问和修改，只有通过LinkedList实例才可以）
    但是，如果我们需要在类的实现外部循环访问列表，就需要提供一种获取类的第一个元素的方法
  */
  this.getHead = function(){
    return head;
  }

  // this.print = function(){};
}
var list = new LinkedList();
list.append(15);
list.append(10);






