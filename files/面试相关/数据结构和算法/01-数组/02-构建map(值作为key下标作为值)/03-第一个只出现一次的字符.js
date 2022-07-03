/*
题目3：（第一个只出现一次的字符）
  在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回-1（需要区分大小写）
思路:
  解法一：（推荐）
    用一个map存储每个字符出现的字数
    第一次循环存储次数，第二次循环找到第一个出现一次的字符。
    时间复杂度O(n)，空间复杂度O(n)
  解法二：
    使用js的array提供的indexOf和lastIndexOf方法
    遍历字符串，比较每个字符第一个和最后一次出现的位置是否相同。
    indexOf的是按复杂度为O(n)，所以整体的时间复杂度为O(n2)，空间复杂度为0
*/
// function FirstNotRepeatingChar(str){
//
// }
// let str = '11a232534645b23435a43261169';
// console.log(FirstNotRepeatingChar(str));    //12

function FirstNotRepeatingChar(str) {
  var arr = str.split("");
  var len = arr.length;
  var map = {};
  for (var i = 0; i < len; i++) {
    if (map[arr[i]] === undefined) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]]++;
    }
  }
  for (var j = 0; j < len; j++) {
    if (map[arr[j]] === 1) {
      return j;
    }
  }
  return -1;
}
let str = "11a232534645b23435a43261169";
console.log(FirstNotRepeatingChar(str)); //12

// function FirstNotRepeatingChar(str) {
//   //方法一
//   var array = str.split("");
//   var length = array.length;
//   var map = {};
//   for (var i = 0; i < array.length; i++) {
//     if (map[array[i]] === undefined) {
//       map[array[i]] = 1;
//     } else {
//       map[array[i]]++;
//     }
//   }
//   for (var i = 0; i < array.length; i++) {
//     if (map[array[i]] === 1) {
//       return i;
//     }
//   }
//   return -1;

//   //方法二
//   // for (var i = 0; i < str.length; i++) {
//   //   if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
//   //     return i;
//   //   }
//   // }
//   // return -1;
// }
// let str = "11a232534645b23435a43261169";
// console.log(FirstNotRepeatingChar(str)); //12

// function FirstNotRepeatingChar(str){
//   let map = {};
//   //将str切割成数组
//   let array = str.split("");
//   for(var i=0; i<array.length; i++){
//     if(map[array[i]]){
//       map[array[i]]++;
//     }else{
//       map[array[i]] = 1;
//     }
//   }
//   for(var i=0; i<array.length; i++){
//     if(map[array[i]]===1){
//       return i
//     }
//   }
//   return -1;
// }
// let str = '11a232534645b23435a43261169';
// console.log(FirstNotRepeatingChar(str));    //12

//解法一：(我个人推荐的解法)
// function FirstNotRepeatingChar(str){
//   if(!str){
//     return -1;
//   }
//   let map = {};
//   let array = str.split('');
//   let length = str.length;
//   //第一次循环存储次数
//   for(let i=0; i<length; i++){
//     if(map[array[i]] !== undefined){
//       map[array[i]]++;
//     }else{
//       map[array[i]] = 1;
//     }
//   }
//   //第二次循环找到第一个出现一次的字符
//   for(let i=1; i<length; i++){
//     if(map[array[i]] === 1){
//       return i;
//     }
//   }
//   return -1;
// }
// let str = '11a232534645b23435a43261169';
// console.log(FirstNotRepeatingChar(str));    //12
