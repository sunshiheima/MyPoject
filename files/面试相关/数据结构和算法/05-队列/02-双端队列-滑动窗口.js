/*
https://juejin.im/book/6844733800300150797/section/6844733800358871054

双端队列衍生出的滑动窗口问题，是一个经久不衰的命题热点。
【双端队列就是允许在队列的两端进行插入和删除的队列】
体现在编码上，最常见的载体是：既允许使用push和pop，又允许使用unshift和shift

滑动窗口问题
题目描述：给定一个数组nums和滑动窗口的大小k，请找出所有滑动窗口里的最大值
示例：输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 输出: [3,3,5,5,6,7]
提示：你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。

思路：
方法一：（双指针+遍历法）
    1.前面学过，约束范围，可以用双指针。因此这里定义一个left左指针、定义一个right右指针，分别指向窗口的两端即可。
    2.接下来我们可以把这个窗口内的数字取出来，直接遍历一遍、求出最大值，然后把最大值存进结果数组。这样第一个窗口的最大值就有了
    3.将窗口向前移动一位，重复执行上面的过程，直到数组完全被滑动窗口遍历完毕。
    时间复杂度：那么时复为O(kn) —— 其中n为传入数组nums的规模，注意k也是一个变量而非常量
方法二：（双端队列法，变O(kn)为O(n)）
    如果我们能【在窗口发生移动时，就根据发生变化的元素对最大值进行更新】，那复杂度就会低很多了~
    双端队列可以完美的帮助我们达到这个目的，其核心思想就是【维护一个有效的递减队列】
    
    1.维持一个递减队列，其作用是：确保对首元素始终是当前遍历到的所有元素中的最大值
      每次将遍历到的元素都与队尾元素相比较：
      -若大于队尾元素，则将队列尾部元素依次出队，直到当前元素小于等于队尾元素为止，最后将当前元素入队（到队尾）
      -若小于等于队尾元素，则直接将其入队（到队尾）
    2.当遍历到的元素个数达到k个时（意味着滑动窗口的第一个最大值已产生，即此时递减队列队首的那个元素），将队首元素push进结果数组里
    3.滑动窗口向前移动一位，则原来窗口内的第一个元素1不再在窗口之内了
      为了确保队列的有效性，需及时的去检查下该元素1是否在递减队列里(若在则踢出)
      但是查找该元素1无需遍历整个递减队列，因为1是最靠前的元素，若在则一定是队首元素
      【因此我们只需检查队首元素是否为该元素1即可，若是则用arr.shift()将其踢出】
*/

//方法二（我按照文中思路自己实现的，文中代码和思路有点儿不匹配，按照我实现的这个为准！）
function maxSlidingWindow(nums, k) {
  let res = [];
  let deque = [];
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    //比较当前元素与队尾元素，维护递减队列
    while (nums[i] > deque[deque.length - 1]) {
      deque.pop();
    }
    deque.push(nums[i]);
    //从遍历到了第三个元素开始，每遍历一个元素都要：将最大值取出放进结果数组；
    //从遍历到第四个元素开始，每遍历一个元素都要：更新递减队列
    if (i >= k - 1) {
      res.push(deque[0]);
      if (i > k - 1 && nums[i - k] === deque[0]) {
        deque.shift();
      }
    }
  }
  return res;
}
maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);

//方法一（我的写法）
function maxSlidingWindow(nums, k) {
  let len = nums.length;
  let res = [];
  for (let i = 0; i < len - k + 1; i++) {
    let left = i;
    let right = i + k - 1;
    let max = nums[left];
    for (let j = left + 1; j <= right; j++) {
      if (nums[j] > max) {
        max = nums[j];
      }
    }
    res[i] = max;
  }
  return res;
}
maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);

//方法一（文中的写法）
const maxSlidingWindow = function (nums, k) {
  const len = nums.length;
  const res = [];
  //初始化左右指针
  let left = 0;
  let right = k - 1;
  //遍历数组
  while (right < len) {
    //计算当前窗口内的最大值
    const max = calMax(nums, left, right);
    //将最大值推入结果数组
    res.push(max);
    //滑动窗口向前滑动，即左右指针各向前走一步
    left++;
    right++;
  }
  //返回结果数组
  return res;
};
function calMax(arr, left, right) {
  //处理数组为空的边界情况
  if (!arr || !arr.length) {
    return;
  }
  //遍历获取最大值
  let maxNum = arr[left];
  for (let i = left; i <= right; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  //返回最大值
  return maxNum;
}
