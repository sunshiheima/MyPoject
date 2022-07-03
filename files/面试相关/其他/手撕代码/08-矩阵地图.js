/*
题目：
    矩阵地图，有一个m行n列的矩阵地图，起点位于左上角，终点位于右下角。输出有多少条不同的路。
    排列组合公式即可求出！路径数 = C(m+n, m) = C(m+n, n) = (m+n)! / (m! * n!)
没找到原题，找到了类似的题目 —— 【最小路径】—— 需要用动态规划！
    给定一个矩阵m*n，从左上角开始每次只能向右或者向下走，最后到右下角的位置，路径上所有的数字累加起来就是路径和，返回所有的路径中最小的路径和。
    https://blog.csdn.net/sinat_41144773/article/details/94374662
*/
function demo(m, n) {
  //得出x!
  function temp(x) {
    var multi = 1;
    for (var i = 1; i <= x; i++) {
      multi *= i;
    }
    return multi;
  }
  return temp(m + n) / (temp(m) * temp(n));
}
console.log(demo(4, 5)); //126 不知道对不对。。。
