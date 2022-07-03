/*
初始数组均为无序
*/

//方法一：利用ES6的Set数据不重复的特性
// function unique(arr) {
//   var newArr = Array.from(new Set(arr));
//   return newArr;
// }

//方法二：先用sort排序后比较相邻元素
// function unique(arr) {
//   //排序
//   arr.sort((a, b) => a - b);
//   //去重
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       continue;
//     }
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

//方法三：利用indexOf()
// function unique(arr) {
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (newArr.indexOf(arr[i]) === -1) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

//方法四(低效，不推荐)：双层for循环+splice
function unique(arr) {
  // var len = arr.length;
  //注意，这两层循环都不能用原数组的长度len，因为arr在这个循环的过程中是变化的，故其长度也会发生变化！
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}

var arr = [1, 2, 6, 7, 8, 2, 3, 4, 4, 6, 6, 8, 9];
console.log(unique(arr));
