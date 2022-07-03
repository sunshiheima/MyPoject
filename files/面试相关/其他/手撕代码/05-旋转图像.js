/*
我之前在leetcode上用暴力法写过，就不再写了。
非暴力法：
// https://leetcode-cn.com/problems/rotate-image/solution/xuan-zhuan-tu-xiang-by-leetcode/
*/

// var rotate = function (matrix) {
//   var len = matrix.length;
//   var res = [];
//   //外层循环：j表示列
//   for (var j = 0; j < len; j++) {
//     var temp = [];
//     //内层循环：i表示行
//     for (var i = 0; i < len; i++) {
//       temp.unshift(matrix[i][j]);
//     }
//     res.push(temp);
//   }
//   return res;
// };
// console.log(
//   rotate([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

//要求不改变原来的matrix（记住即可）
// function rotate(matrix) {
//   let len = matrix.length;
//   for (var i = 0; i < len; i++) {
//     for (var j = 0; j < len; j++) {
//       var cur = matrix[i].pop();
//       matrix[len - 1 - j].unshift(cur);
//     }
//   }
//   return matrix;
// }
// console.log(
//   rotate([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
