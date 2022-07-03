/*
题目：
    请实现copyRandomList函数，复制一个复杂链表。
    在复杂链表中，每个节点除了有一个next指针指向下一个节点，还有一个random指针指向链表中的任意节点或者null
示例：
    输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
    输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
思路（leetcode大佬的解法）；
    用一个哈希表表示映射关系：键是源节点，值是复制的节点。即map = { 原节点: 复制的节点, 原节点: 复制的节点}。
    -第一次遍历：复制每个节点和next指针，并且保存“原节点-复制节点”的映射关系
    -第二次遍历，通过哈希表获得节点对应的复制节点，更新random指针

注：
    使用ES6的Map，可以直接将对象作为键值
*/

//head和newHead：分别是原链表和复制链表的头节点
//current和newNode：分别是原链表和复制链表的节点指针（表示当前节点） —— 其实像leetcode原题解中使用node来命名原链表的节点指针更好，这样看起来更有对应关系
var copyRandomList = function (head) {
  if (!head) {
    return null;
  }
  const map = new Map();
  let node = head; //指针（指向当前节点，从head开始沿着【原链表】移动）
  const newHead = new Node(node.val); //定义新链表的头节点(newHead之后出现这一次，之后都是由newNode来做事儿)
  let newNode = newHead; //newNode为当前节点的copy，之后newNode都是这个含义
  map.set(node, newNode); //将【当前(头)节点: 复制(头)节点】存储进map当中

  while (node.next) {
    //循环结束时，node指向原链表尾节点，上面while循环的最后一圈已经完成了原链表尾节点到复制链表尾节点的映射
    newNode.next = new Node(node.next.val); //指定复制节点的next指针指向的下一个节点(第一个while循环是在指定复制链表头节点的next)
    node = node.next;
    newNode = newNode.next;
    map.set(node, newNode); //此处就到达了第二个节点
  }

  //从现在开始，进行第二遍遍历，从两个链表的头部开始
  newNode = newHead;
  node = head;
  while (newNode) {
    //循环结束时，newNode指向复制链表尾节点的后一个节点(null)
    newNode.random = map.get(node.random);
    node = node.next;
    newNode = newNode.next;
  }
  return newHead;
};
