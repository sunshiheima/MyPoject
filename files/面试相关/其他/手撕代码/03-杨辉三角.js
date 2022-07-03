//暴力法（我的）
function triangle(row) {
  var result = [];
  result[0] = [1];
  result[1] = [1, 1];
  for (var i = 2; i < row; i++) {
    result[i] = [];
    result[i][0] = 1;
    result[i][i] = 1;
    for (var j = 1; j < i; j++) {
      result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
    }
  }
  return result;
}
console.log(triangle(6));

//动态规划
// https://leetcode-cn.com/problems/pascals-triangle/solution/yang-hui-san-jiao-by-leetcode/
