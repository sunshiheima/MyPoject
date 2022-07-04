/*注意：我们建立的是二叉搜索树，也就是基于-左子树小于根节点，右子树大于根节点，从插入方法即insert()可以看出。（建立的是什么类型的二叉树，主要由insert()方法来决定）*/
/*插入、遍历、深度、查找、拓展-二分查找（只有线性表才能用二分查找）*/

function Node(data,left,right){
  this.data = data;
  this.left = left;
  this.right = right;
}
Node.prototype = {
  show: function(){
    console.log(this.data)
  }
}
function Tree(){
  this.root = null;
}

Tree.prototype = {
  //下面的注释部分逻辑尚未叙述清楚，很难叙述清楚，自己想吧，注意有注释的那几行即可。再就是parent这个变量名并不是特别贴切，就看作是保存current原来的引用即可。
  /*1.插入*/
  insert: function(data){
    var node = new Node(data,null,null);
    if(!this.root){
      this.root = node;
      return;
    }
    var current = this.root;
    var parent = null;
    while(current){ //循环终止条件
      parent = current;   //parent是用来保存current原来的引用的，因为下面current会被重新赋值为current.left或者current.right
      if(data<parent.data){
        current = current.left;   //1
        if(!current){
          parent.left = node;//因为上面行1需要把current重新赋值为current.left,为了测试是否达到了递归的终止条件(!current),因此此处需要用parent
          return;
        }
      }else{
        current.right = right;
        if(!current){
          parent.right = node;
          return;
        }
      }
    }
  },
  /*2.遍历某个节点的后辈节点*/
  preOrder: function(node){
    if(node){ //递归终止条件
      node.show();
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  },
  middleOrder: function(node){
    if(node){
      this.middleOrder(this.left);
      node.show();
      this.middleOrder(this.right);
    }
  },
  laterOrder: function(node){
    if(node){
      this.laterOrder(this.left);
      this.laterOrder(this.right);
      node.show();
    }
  },
  getMax: function(){
    var current = this.root;
    while(current){
      if(!current.right){   //递归终止条件
        return current.data;
      }
      current = current.right;
    }
  },
  getMin: function(){
    var current = this.root;
    while(current){
      if(!current.left){  //递归终止条件
        return current.data;
      }
      current = current.left;
    }
  },
  /*3.获取某节点所在位置的深度*/
  getDeep:function(node,deep){  //此处的deep在调用时不是必须传的，只要是为了服务于递归时的累加
    deep = deep || 0;  //注意：不能吧第二个参数deep删去，然后，此行让deep直接等于0，因为需要递归的，deep应该在每次递归时累加而非每次都初始化为0。况且因为有了||0，就算我们调用方法的时候不传第二个参数，deep也能被初始化为0！可谓一举两得！唯一的代价只是多了一个形参而已！
    if(node == null){ //递归终止条件
      return deep;
    }
    deep++;
    var dleft = this.getDeep(node.left,deep);
    var dright = this.getDeep(node.right,deep);
    return Math.max(dleft,dright);
  },
  /*4.在树中查找某个节点*/
  getNode: function(data, node){  //需要查找的那个元素的值，需要从哪个节点开始查找（查找其后辈元素）
    if(node){
      if(data === node.data){
        return node;
      }else if(data < node.data){
        return this.getNode(data, node.left);
      }else{
        return this.getNode(data, node.right);
      }
    }else{
      return null;
    }
  },

}

//测试 插入/遍历/获取深度/查找某个节点
var tree = new Tree();
tree.insert(3);
tree.insert(7);
tree.insert(1);
tree.insert(8);
tree.insert(4);
tree.insert(5);
console.log(tree);
tree.middleOrder(tree.root);
console.log(tree.getMin(),tree.getMax());
console.log(tree.getDeep(tree.root));
console.log(tree.getNode(4,tree.root));

/*5.二分查找
    二分查找的条件必须是：有序的线性表
    查找过程（思路）：和线性表的中点值比较，如果小就继续在小的序列中查找，如此递归知道找到相同的值
*/
function binarySearch(data,arr,start,end){
  if(start>end){  //检测非法输入
    return -1;
  }

  var mid = Math.floor((end+start)/2);
  if(data == arr[mid]){
    return mid;
  }else if(data < arr[mid]){
    return binarySearch(data,arr,start,mid-1);
  }else{
    return binarySearch(data,arr,mid+1,end);
  }
}
var arr = [0,1,1,1,1,1,1,1,4,6,7,8];
//测试二分查找
console.log(binarySearch(1,arr,0,arr.length-1));
