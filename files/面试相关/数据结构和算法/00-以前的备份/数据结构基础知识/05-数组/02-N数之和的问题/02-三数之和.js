/*
  给定一个包含n个整数nums，判断nums是否存在三个元素a,b,c，使得a+b+c=0?找出所有满足条件且不重复的三元组
  注意：答案中不可以包含重复的三元组
  思路：
    题目中说明可能会出现多组结果，所以我们要考虑好去重
    1.为了方便去重，我们首先将数组排序
    2.对数组进行遍历，取当前遍历的数nums[i]为一个基准数，遍历数后面的数组为寻找数组
    3.在寻找数组中设定两个起点，最左侧的left(i+1)和最右侧的right(length-1)
    4.判断nums[i]+nums[left]+nums[right]是否等于0，如果等于0，加入结果，并分别将left和right移动一位
    5.如果结果大于0，将right向左移动一位，向结果逼近
    6.如果结果小于0，将left向右移动一位，向结果逼近
*/
var threeSum = function(nums){    //nums为一个数组，包含n个整数
  const result = [];
  nums.sort((a,b) => a-b);    //将传入的数组先进行排序---升序
  for(let i=0; i<nums.length; i++){
    //跳过重复数字
    if(i && nums[i]===nums[i-1]){ continue; }   //因为之前已经排序了，所以重复的数字会在一起
    let left = i + 1;
    let right = nums.length - 1;
    while(left<right){
      const sum = nums[i] + nums[left] + nums[right];
      if(sum > 0){
        right--;
      }else if(sum < 0){
        left++;
      }else{
        result.push([nums[i], nums[left++], nums[right--]]);
        //跳过重复数字(注意left和right也要跳过重复的数字）
        while(nums[left] === nums[left-1]){
          left++;
        }
        //跳过重复数字
        while(nums[right] === nums[right+1]){
          right--;
        }
      }
    }
  }
  return result;
}