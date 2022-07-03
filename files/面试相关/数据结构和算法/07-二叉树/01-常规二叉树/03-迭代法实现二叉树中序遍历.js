/*
--------------------为什么先序和后序差不多？而中序不能这样？-----------
先序遍历和后序遍历之所以可以用同一套代码框架来实现，本质上是因为两者的出栈、入栈逻辑差别不大——都是先处理根结点，然后处理孩子结点。

而中序遍历中，根结点不再出现在遍历序列的边界、而是出现在遍历序列的中间。
这就意味着无论如何我们不能再将根结点作为第一个被 pop 出来的元素来处理了——出栈的时机被改变了，这意味着入栈的逻辑也需要调整。

--------------------------中序---------------------------
中序遍历的序列规则是 左 -> 中 -> 右 ，这意味着我们必须首先定位到最左的叶子结点。
在这个定位的过程中，必然会途径目标结点的父结点、爷爷结点和各种辈分的祖宗结点
途径过的每一个结点，我们都要及时地把它入栈。这样当最左的叶子结点出栈时，第一个回溯到的就是它的父结点
有了父结点，就不愁找不到兄弟结点，遍历结果就变得唾手可得了~     

从下面实现代码中可以看出，代码的执行顺序是：（不准确，感受一下就行啦~~~）
1.不断遍历左子树知道左侧最深处节点，在这个过程中将没到达的一个节点都push进栈，将左侧最深处节点push进结果数组
2.回溯到该节点的父节点，将其push进结果数组
3.定位到父节点的右子树，将其push进结果数组
*/

// const inorderTraversal = function(root){

// }

const inorderTraversal = function (root) {
  var res = [];
  var stack = [];
  var cur = root;
  while (cur || stack.length) {
    //找到最深处的左子节点，并一路保存遇到的节点
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    //将栈顶元素取出，并立即存进结果数组
    var cur = stack.pop();
    res.push(cur.val);
    //遍历右子树
    cur = cur.right;
  }
};

const inorderTraversal = function (root) {
  const res = [];
  const stack = [];
  //用一个cur节点充当游标
  let cur = root;
  //当cur不为空、或者stack不为空时，重复以下逻辑?
  while (cur || stack.length) {
    //这个while的作用是寻找最左叶子节点的过程中，途经的所有节点都记录下来
    while (cur) {
      //将途径的节点入栈
      stack.push(cur);
      //继续搜索当前节点的左孩子
      cur = cur.left;
    }
    //取出栈顶元素，并将栈顶元素放入结果数组
    cur = stack.pop();
    res.push(cur.val);
    //尝试读取cur节点的右孩子
    cur = cur.right;
  }
  return res;
};
