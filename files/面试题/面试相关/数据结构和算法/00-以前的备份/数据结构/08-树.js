/*
  到目前为止，介绍的所有数据结构当中：
    顺序数据结构：数组、栈、队列、链表、集合
    非顺序数据结构：散列表（那字典了？属于顺序的还是非顺序的？书中未说明）

  树也是非顺序数据结构，它对于需要快速查找的数据非常有用

  树是一种分层数据的抽象模型，现实生活中的例子有家谱、公司的组织架构图

  树的相关术语：
    1.一个树结构包含一系列存在父子关系的节点。每个节点都有一个父节点（除了顶部的第一个节点）以及零个或多个子节点
    2.位于树顶部的节点叫做根节点。它没有父节点。
    3.树中的每个元素都叫做节点，节点分为内部节点和外部节点。
      内部节点：至少有一个子节点
      外部节点：没有子元素的节点
    4.一个节点可以有祖先和后代
      一个节点（除了根节点）的祖先包括父节点、祖父节点、曾祖父节点
    5.子树：由节点和它的后代构成
    6.深度：为节点的一个属性，节点的深度取决于它的祖先节点的数量，一个节点有n个祖先节点，则该节点的深度为n
    7.高度：为树的一个属性，树的高度取决于所有节点深度的最大值。
    8.层级：一棵树被分解成层级，根节点在第0层，它的子节点在第1层，以此类推。

  二叉树和二叉搜索树：
    二叉树中的节点最多只能有两个节点：一个是左侧子节点，另一个是右侧子节点
    二叉搜索树（BST）是二叉树的一种，但是它只允许你在左侧节点存储（比父节点）小的值，在右侧节点存储（比父节点）大（或者等于）的值

  二叉搜索树：
    和链表一样，将通过指针来表示节点之间的关系（术语称之为边），一个指向左侧子节点，一个指向右侧子节点
    因此，将声明Node类来表示树中的每个节点
    值得注意的一个细节是：不同于在之前的章节将节点本身称作节点或项
    键：才是树相关的术语中对节点的称呼

    我们将会遵循和LinkedList类中相同的模式，这表示也将声明一个变量以控制此数据结构的第一个节点
    在数中，它不再是头节点，而是根元素

  中序遍历：是一种以上行顺序访问BST所有节点的遍历方式，也就是从最小到最大的顺序访问所有节点
            中序遍历的一种应用就是对树进行排序操作。

  先序遍历：是以优先于后代节点的顺序访问每个节点的。
            先序遍历的一种应用是打印一个结构化的文档

  后序遍历：是先访问节点的后代节点，再访问节点本身。
            后序遍历的一种应用是计算一个目录和它的子目录中所有文件所占空间的大小

  注意：中序遍历和先序遍历实现中if语句中的三句话的顺序很重要！！！是关键！！！
        先序遍历和中序遍历的不同点是：
          先序遍历会先访问节点本身（行{1}），然后再访问它的左侧子节点（行{2}），最后是右侧子节点（行{3}）
          而中序遍历的执行顺序是：{2}、{1}、{3}
        ！！！但是对应的图未完全理解！！！

  要找到最小的键：即从根节点开始，沿着树的左边进行遍历，直到找到最左端的节点
  要找到最大的键：即从根节点开始，沿着树的右边进行遍历，直到找到最右端的节点

  课外：还有几种有名的树结构：
    1.ALV树——一种自平衡树，任何一个节点左右两侧子树的高度之差最多为1。也就是说，这种树会在添加或移除节点时尽量试着称为一棵完全树
    2.红黑树——是一种特殊的二叉树，这种树可以进行高效的中序遍历
    3.堆积树
*/

//创建二叉搜索树
function BinarySearchTree(){
  var Node = function(key){   //1
    this.key = key;           //初始化键的值
    this.left = null;         //初始化键的左侧指针
    this.right = null;        //初始化键的右侧指针
  };
  var root = null;  //2

  //方法们（会比之前的复杂一些，将在下面的方法实现当中实现很多递归）
  //在树中插入一个新的键
  this.insert = function(key){
    var newNode = new Node();   //1

    //私有的辅助函数(帮我们根据现有节点的情况，找到新节点应该插入的正确位置）
    var insertNode = function(node,newNode){    //第一个参数node表示当前节点(最初传入的是根节点root)，第二个参数newNode表示将要插入的新节点
      if(newNode.key<node.key){   //4
        if(node.left===null){   //5
          node.left = newNode;    //6
        }else{
          insertNode(node.left,newNode);    //7 此处用到了递归调用insertNode方法，下次将要比较的节点将会是当前节点的左侧子节点
        }
      }else{
        if(node.right===null){    //8
          node.right = newNode;   //9
        }else{
          insertNode(node.right,newNode);   //10 此处也用到了递归调用insertNode方法，下次将要比较的节点将会是当前节点的右侧子节点
        }
      }
    };
    //为什么代码说明中说：在执行了9之后，然后方法调用会一次出栈，代码执行过程才结束？

    if(root===null){    //2
      root = newNode;
    }else{
      insertNode(root,newNode);     //3
    }
  };


  //通过中序遍历方式遍历所有节点，接收一个回调函数作为参数，回调函数定义我们对遍历到的每个节点进行的操作（也叫做访问者模式）
  this.inOrderTraverse = function(callback){
     //由于需要使用递归，我们使用一个私有的辅助函数，来接收一个节点和对应的回调函数作为参数
     var inOrderTraverseNode = function(node,callback){
       if(node!==null){   //2
         inOrderTraverseNode(node.left,callback);   //3
         callback(node.key);    //4   //为什么要把调用callback函数放在中间？？？关于这个callback调用有点迷！！！弄清楚了
         inOrderTraverseNode(node.right,callback);    //5
       }
     };

    function printNode(value){    //6
      console.log(value);
    }
    tree.inOrderTraverse(printNode);    //7
    inOrderTraverseNode(root,callback);   //1
  }


  //通过先序遍历方式遍历所有节点
  this.preOrderTraverse = function(callback){
    //辅助函数
    var preOrderTraverseNode = function(node,callback){
      if(!node===null){
        callback(node.key);     //1
        preOrderTraverseNode(node.left,callback);   //2
        preOrderTraverseNode(node.right,callback);  //3
      }
    };
    preOrderTraverseNode(root,callback);
  }

  //通过后序遍历方式遍历所有节点
  this.postOrderTraverse = function(callback){
    //辅助函数
    var postOrderTraverseNode = function(node,callback){
      if(node!==null){
        postOrderTraverseNode(node.left,callback);    //1
        postOrderTraverseNode(node.right,callback);   //2
        callback(node.key);   //3
      }

    }

    postOrderTraverseNode(root,callback);
  }


  //返回树中最小的值/键
  this.min = function(){
    return minNode(root);   //1
  }
  var minNode = function(node){
    if(node){
      while(node && node.left !== null){    //2
        node=node.left;   //3
      }
      return node.key;
    }
    return null;    //4
  };


  //返回树中最大的值/键
  this.max = function(){
    return maxNode(root);
  }
  var maxNode = function(node){
    if(node){
      while(node && node.right !== null){   //5
        node = node.right;
      }
      return node.key;
    }
    return null;
  }

  //在树种查找一个键
  this.search = function(key){
    return searchNode(root,key);    //1
  };
  var searchNode = function(node,key){
    if(node===null){    //2
      return false;
    }
    if(key < node.key){   //3
      return searchNode(node.left,key);   //4
    }else if(key > node.key){   //5
      return searchNode(node.right,key);    //6
    }else{
      return true;    //7
    }
  }


  //从树中移除某个键(只理解了大概思想)
  this.remove = function(key){
    root = removeNode(root,key);    //1   注意：root被赋值为removeNode方法的返回值
  };
  var removeNode = function(node,key){
    if(node===null){    //2
      return null;
    }
    if(key<node.key){
      node.left = removeNode(node.left,key);    //4
      return node;    //5
    }else if(key>node.key){   //6
      node.right = removeNode(node.right,key);    //7
      return node;    //8
    }else{    //键等于node.key
      //第一中情况——一个叶节点
      if(node.left===null && node.right === null){    //9
        node = null;  //10
        return node;
      }
      //第二种情况——一个只有一个子节点的节点
      if(node.left===null){   //12
        node = node.right;  //13
        return node;    //14
      }else if(node.right===null){    //15
        node = node.left;   //16
        return node;    //17
      }
      //第三种情况——一个有两个子节点的节点
      var aux = findMinNode(node.right);    //18
      node.key = aux.key;   //19
      node.right = removeNode(node.right,aux.key);    //20
      return node;
    }
  }
}
//测试创建树
var tree = new BinarySearchTree();
tree.insert(11);

tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

tree.insert(6);

//测试中序遍历树
function printNode(value){    //6
  console.log(value);
}
tree.inOrderTraverse(printNode);    //7   //结果为：3 5 6 7 8 9 10 11 12 13 14 15 18 20 25

//测试先序遍历树
tree.preOrderTraverse(printNode);   //结果为：11 7 5 3 6 9 8 10 15 13 12 14 20 18 25

//测试后序遍历树
tree.postOrderTraverse(printNode);  //结果为：3 6 5 8 10 9 7 12 14 13 18 25 20 15 11

//测试search方法
console.log(tree.search(1) ? 'Key 1 found' : 'Key 1 not found');    //Key 1 not found
console.log(tree.search(8) ? 'Key 8 found' : 'Key 8 not found');    //Key 8 found


