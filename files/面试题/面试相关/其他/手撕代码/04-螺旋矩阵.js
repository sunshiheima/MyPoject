/*
我之前在leetcode上用暴力法写过，就不再写了。
非暴力法：
https://leetcode-cn.com/problems/spiral-matrix/solution/cxiang-xi-ti-jie-by-youlookdeliciousc-3/
*/

var spiralOrder = function (matrix) {
  // if (matrix.length === 0) {
  //   return res;
  // }
  var res = [];
  var up = 0,
    down = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1;
  while (true) {
    //left to right //martix[定up][变col]
    for (var col = left; col <= right; col++) {
      res.push(matrix[up][col]);
    }
    if (++up > down) {
      break;
    }
    //top to down //matrix[变row][定right]
    for (var row = up; row <= down; row++) {
      res.push(matrix[row][right]);
    }
    if (--right < left) {
      break;
    }
    //right to left //matrix[定down][变col]
    for (var col = right; col >= left; col--) {
      res.push(matrix[down][col]);
    }
    if (--down < up) {
      break;
    }
    //down to top //matrix[变row][定left]
    for (var row = down; row >= up; row--) {
      res.push(matrix[row][left]);
    }
    if (++left > right) {
      break;
    }
  }
  return res;
};
var arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log(spiralOrder(arr));
