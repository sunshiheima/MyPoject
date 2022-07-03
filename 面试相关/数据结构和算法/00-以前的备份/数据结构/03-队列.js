//队列和栈都是特殊的数组
//队列和栈非常类似，但是队列是先进先出，即先来先服务
//队列在尾部添加新元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾

//完整的队列实现
function Queue(){
  var items = [];
  this.enqueue = function(element){
    items.push(element);
  };
  this.dequeue = function(){
    return items.shift();
  };
  this.front = function(){
    return items[0];
  };
  this.isEmpty = function(){
    return items.length == 0;
  };
  this.clear = function(){
    items = [];
  };
  this.size = function(){
    return items.length;
  };
  this.print = function(){
    console.log(items.toString());
  };
}
var queue = new Queue();
console.log(queue.isEmpty());     //true
queue.enqueue("John");
queue.enqueue("Jone");
queue.enqueue("Camila");
queue.print();                    //John,Jone,Camila
console.log(queue.size());        //3
console.log(queue.isEmpty());     //false
queue.dequeue();
queue.dequeue();
queue.print();                    //Camila
