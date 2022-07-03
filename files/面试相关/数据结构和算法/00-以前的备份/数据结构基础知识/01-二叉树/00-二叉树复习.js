/*
  数据的逻辑结构：树
  当中用到的数据的存储方式：对象
*/

//创建二叉树搜索树（注意：而不是普通的二叉树）
function BinarySearchTree(){
  //1.初始化
  var Node = function(key){   //Node方法是为了方便每一次创建新节点用的
    this.key = key;       //初始化键的值
    this.left = null;     //初始化键的左侧指针
    this.right = null;    //初始化键的右侧指针
  }
  var root = null;  //遵循和LinkedList类中相同的模式，LinkedList中声明了一个变量来控制此数据结构的第一个节点(即头节点)，在树中-声明变量root-称为根节点而非头节点

  //方法们--用到了很多递归
  //2.在树中插入一个新的键
  this.insert = function(key){
    //创建一个新的键
    var newNode = new Node(key);  //将传入的key值作为改新节点的节点值，其左指针和右指针将会自动初始化为null
    //私有的辅助函数
    var insertNode = function(node, newNode){ //参数1-被参照的节点（从root开始），参数2-新节点
        if(newNode.key<node.key){
          if(node.left===null){
            node.left = newNode;
          }else{
            insertNode(node.left,newNode)
          }
        }else{
          if(node.right===null){
            node.right = newNode;
          }else{
            insertNode(node.right,newNode)
          }
        }
    };
    //插入新键的动作（通过insertNode()来完成）
    if(root === null){          //特殊情况：树为空树（即没有根节点），则将这个新的节点用作根节点
      root = newNode;
    }else{
      insertNode(root,newNode); //普遍情况：树不为空树（即有根节点）
    }
    //为了把树的结构打印在控制台，自己多加的一句，实则root应是私有的，不应该直接被实例
    this.root = root;
  }


}
//测试-插入功能
//经过很多次插入之后，其实tree就是一个大的嵌套的对象
var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(9);
tree.insert(15);
console.log(tree.root);

//3.通过中序遍历遍历所有节点（左侧子节点-自己-右侧子节点，即以最小到最大的顺序访问所有节点），中序遍历的一种应用--对树进行排序操作
this.inOrderTraverse = function(callback){ //接收一个回调函数作为参数，回调函数定义我们对遍历到的每个节点的进行的操作（也叫做访问者模式）
  //私有的辅助函数,暂时无法理解这部分代码的执行流程——涉及到递归和执行上下文栈！！！
  var inOrderTraverseNode = function(node,callback){
    if(node !== null){
      inOrderTraverseNode(node.left,callback);    //1
      callback(node.key);                         //2
      inOrderTraverseNode(node.right,callback);   //3
    }
  }

  inOrderTraverseNode(root,callback);
}

//测试中序遍历功能
//定义callback函数，可根据需求改
function printNode(value){
  console.log(value);
}
tree.inOrderTraverse(printNode)

//4.先序遍历（自己-左侧子节点-右侧子节点），先序遍历的一种应用——打印一个结构化的文档
/*
  代码只需把上面的代码123的顺序换成213即可
  名字改成preOrderTraverse和preTraverseNode
*/

//5.后序遍历（左侧子节点-右侧子节点-自己），后序遍历的一种应用——计算一个目录和它的子目录中所有文件所占空间的大小
/*
  代码只需把上面的代码123的顺序换成132即可
  名字改成postOrderTraverse和postTraverseNode
*/

//6.搜索最大值和最小值
this.min = function(){
  //私有的辅助函数（用于寻找某个节点底下的最小的键）
  var minNOde = function(node){
    if(node){
      while (node && node.left !==null){
        node = node.left
      }
      return node.key
    }
    return null
  }
  //此处我们要找的是整棵树的最小键，所以传入root。但是实际上minNode方法允许我们从树中任意一个节点开始寻找最小的键，传入特定键而非root即可实现。
  return minNode(root);
}
this.max = function(){
  //私有的辅助函数（用于寻找某个节点底下的最大的键）
  var maxNOde = function(node){
    if(node){
      while (node && node.right !==null){
        node = node.right
      }
      return node.key
    }
    return null
  }
  //此处我们要找的是整棵树的最小键，所以传入root。但是实际上minNode方法允许我们从树中任意一个节点开始寻找最小的键，传入特定键而非root即可实现。
  return maxNode(root);
}

//7.搜索一个特定的值
this.search = function(key){
  //私有的辅助函数
  var searchNode = function(node,key){
    if(node === null){  //如果是null的话，说明要找的键没有找到，返回false
      return false;
    }
    if(key < node.key){
      return searchNode(node.left,key)
    }else if(key > node.key){
      return searchNode(node.right,key);
    }else{
      return true;
    }
  }

  return searchNode(root,key);
}

//测试搜索特定值的功能
console.log(tree.search(1) ? 'Key 1 found' : 'Key 1 not found')
console.log(tree.search(8) ? 'Key 8 found' : 'Key 8 not found')


//移除一个节点——很复杂！！！涉及到要移除的那个节点是：一个叶节点（即无子节点）？还是有一个左侧或右侧子节点的节点？还是有两个子节点的节点？
this.remove = function(key){

  var removeNode = function(node,key){

  }

  root = removeNode(root,key)
}