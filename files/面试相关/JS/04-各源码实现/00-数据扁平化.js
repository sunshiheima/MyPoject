/*
题目：对于[1, [1,2], [1,2,3]]这样多层嵌套的数组，我们如何将其扁平化为[1, 1, 2, 1, 2, 3]这样的一维数组呢
*/

const arr = [1, [2,3], [4,[5,6]]];

function myFlat(arr){
  //1.arr.toString()
  // return arr.toString().split(",").map(item => Number(item))
  // var str = arr.toString();
  // return JSON.parse(`[${str}]`);

  //2.ES7的arr.flat()
  // return arr.flat(Infinity);

  //3.先序列化后正则
  // var str = JSON.stringify(arr).replace(/\[|\]/g, "");
  // return JSON.parse(`[${str}]`);

  //4.for-of循环+递归（自己做出来的哈哈哈，是递归哦~我总算分析清除啦~）
  // var res = [];
  // for(item of arr){
  //   if(Array.isArray(item)){
  //     var temp = myFlat(item);
  //     res = res.concat(temp);
  //   }else{
  //     res.push(item);
  //   }
  // }
  // return res;

  //5.reduce+递归
  // return arr.reduce((acc, cur) => {
  //   //最初acc为[]，最后会返回acc
  //   if(Array.isArray(cur)){
  //     acc = acc.concat(...cur);
  //   }else{
  //     acc.push(cur)
  //   }
  //   return acc;
  // }, []);
} 
console.log(myFlat(arr));













//----------------------------------------下面仅供参考，是别人的写法，对我来说较难理解，以上面自己实现的为准----------------------------------------------

//3.for-of循环 + 递归       //对于树状结构的数据最直接的处理方式就是递归
const arr = [1, [1, 2], [1, 2, 3]];
function flat(arr) {
  let result = [];
  for (const item of arr) {
    item instanceof Array
      ? (result = result.concat(flat(item)))
      : result.push(item);
  }
  return result;
}

flat(arr); // [1, 1, 2, 1, 2, 3]

//4.reduce + 递归       //和3同理
const arr = [1, [1, 2], [1, 2, 3]];
function flat(arr) {
  return arr.reduce((prev, cur) => {
    return prev.concat(cur instanceof Array ? flat(cur) : cur);
  }, []);
}

flat(arr); // [1, 1, 2, 1, 2, 3]

//5.迭代 + concat + 展开运算符   //注意concat有点儿神奇！其内部好像是会迭代的！
let arr = [1, [1, 2], [1, 2, 3, [4, 4, 4]]];
while (arr.some(Array.isArray)) {
  arr = [].concat(...arr);
}
console.log(arr); // [1, 1, 2, 1, 2, 3, 4, 4, 4]
