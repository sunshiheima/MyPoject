/*
  给定一个包含n个整数的数组nums，判断一个nums是否存在四个元素a,b,c,d，使得a+b+c+d=0? 找出所有满足条件且不重复的四元组
  注意：答案中不可以包含不重复的四元组
  思路：
    我们仍然可以像三数之和那样，可以通过大小指针来逼近结果，从而降低一层事件复杂度的结果
    不管是几数之和，我们都用这种方法来进行优化

    “四数之和”和“三数之和”的不同之处在于：
      三数之和定了一个基准数（对应着一个for循环），和left/right两个指针
      四数之和定了两个基准数（对应着两个for循环），和left/right两个指针
*/
var forSum = function(nums, target){
  if(nums.length < 4){
    return [];
  }
  nums.sort((a,b) => a-b);    //仍然先将数组排序--升序
  const result = [];
  for(let i=0; i<nums.length-3; i++){   //定第一个基准数时，只循环到数组的倒数第三个数
    //跳过重复数字
    if(i>0 && nums[i] === nums[i-1]){ continue; }
    if(nums[i]+nums[i+1]+nums[i+2]+nums[i+3]>target){ break; }    //如果这种情况出现了，表明后面都不可能再有符合情况的四元组出现了，那么就结束循环
    for(let j=i+1; j<nums.length-2; j++){   //定第二个基准数时，只循环到数组的倒数第二个数
      //跳过重复数字
      if(j>i+1 && nums[j]===nums[j-1]){ continue; }
      let left = j+1;
      let right = nums.length-1;
      while(left < right){
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if(sum === target){
          result.push([nums[i], nums[j], nums[left], nums[right]]);
        }else if(sum <= target){
          while(nums[left] === nums[++left]);   //即当有连续重复数字的时候跳过，并且将left增1（不要忘了left和right是指针，即数字类型的索引）
        }else{    //即当sum大于target时，则将right向左移动
          while(nums[right] === nums[--right]);   //即当有连续重复数字的时候跳过，并且将right增1（不要忘了left和right是指针，即数字类型的索引）
        }
      }
    }
  }
  return result;
}