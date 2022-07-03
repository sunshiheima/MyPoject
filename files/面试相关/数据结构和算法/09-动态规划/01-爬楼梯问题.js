/*
题目：
    假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
    每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
示例：
    输入：3
    输出：3（1+1+1 / 1+2 / 2+1）
*/

//纯递归（丢进OJ会直接超时，因为实际上有重复计算，且随着递归层级的加深，重复问题会越发严重）
const climbStairs = function (n) {
  // 处理递归边界
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  // 递归计算
  return climbStairs(n - 1) + climbStairs(n - 2);
};

//递归改进版（添加记忆化搜索）
const f = [];
const climbStairs = function (n) {
  if (n == 1) {
    return 1;
  }
  if (n == 2) {
    return 2;
  }
  // 若f[n]不存在，则进行计算
  if (f[n] === undefined) f[n] = climbStairs(n - 1) + climbStairs(n - 2);
  // 若f[n]已经求解过，直接返回
  return f[n];
};

//动态规划写法
const climbStairs = function(n){
  //初始化状态数组
  const f = [];
  //初始化已知值
  f[1] = 1;
  f[2] = 2;
  //动态更新每一层楼梯对应的结果（其中n表示楼梯数）
  for(let i=3; i<=n; i++){
    f[i] = f[i-2]+f[i-1];
  }
  //返回目标值
  return f[n];
}
