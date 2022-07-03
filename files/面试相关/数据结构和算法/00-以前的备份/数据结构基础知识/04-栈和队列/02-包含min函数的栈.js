/*
  定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小值的min函数（时间复杂度应为O(1)）
  思路：
    1.定义两个栈，一个栈用于存储数据，另一个栈用于存储每次数据进栈时栈的最小值
    2.每次数据进栈时，将此数据和最小值的栈顶元素比较，将二者比较的较小值再次存入最小值栈
    3.这样最小栈的栈顶永远时当前栈的最小值
    4.数据栈出栈，最小值栈也出栈

  我想问：下面的pop()和top()是干嘛的？感觉不是这个题目所必须的。。。
  就下面未注释部分的代码来说，如果我们想得到栈的最小值的话：
    1.将所有元素入栈--即调用push()方法
    2.然后调用min()方法，得到的结果就是我们加到栈里面的所有元素中的最小值了！
*/
var dataStack = [];
var minStack = [];

function push(node){
  dataStack.push(node);   //每有一个新的元素。我们先将其压入dataStack栈中
  if(minStack.length === 0 || node<min()){    //然后判断此元素是否比当前的最小值（即minStack的栈顶元素->即调用min()的结果）更小
    minStack.push(node);    //如果是更小的话，则我们此次将此元素压入minStack栈中
  }else{
    minStack.push(min());   //如果不是更小的话，则我们此次将之前的最小值压入minStack栈中
  }
}

//这个又是用来干嘛的？感觉和题目需要的东西不搭边啊？
// function pop(){
//   minStack.pop();     //让最小值栈删除其栈顶的第一项元素（即应该就是是最小的那个元素）
//   return dataStack.pop();   //返回dataStack的栈顶元素（即最后一次入栈的元素）
// }

//取得dataStack栈的栈顶元素（此题目当中用不着这个top函数，算是多加补充的？）
// function top(){
//   var length = dataStack.length;
//   return length>0 && dataStack[length-1];     //即如果dataStack当中有元素的话，则取最后一个元素返回（即我们希望得到的栈顶元素）
// }

function min(){
  var length = minStack.length;
  return length>0 && minStack[length-1];    //即如果minStack当中有元素的话，则取最后一个元素返回（即我们希望得到的最小值）
}

