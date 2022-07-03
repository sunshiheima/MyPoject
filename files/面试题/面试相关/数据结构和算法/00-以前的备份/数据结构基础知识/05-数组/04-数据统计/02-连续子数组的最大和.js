/*
  输入一个整数数组，数组里有正数也有负数，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。并且要求时间复杂度为O(n)
  思路：
    记录一个当前连续子数组最大值max，初始值为数组第一项
    记录一个当前连续子数组累加值sum，初始值为数组第一项
    1.从数组第二个数开始，若sum<0，则当前的sum不再对后面的累加有贡献，sum=当前数
    2.若sum>0，则sum=sum+当前数
    3.比较sum和max，max=两者最大值
*/
function FindGreatestSumOfSubArray(array){
  if(Array.isArray(array) && array.length>0){
    let sum = array[0];
    let max = array[0];
    for(let i=1; i<array.length; i++){
      if(sum<0){      //如果sum值是一个负数，那么我们就将sum重置（即将原来的sum值抛弃），使其值为当前元素
        sum = array[i];
      }else{    //如果sum值大于等于0，那么我们就将sum值加上当前元素
        sum = sum + array[i]
      }
      if(sum > max){    //当相加之后的sum值，和max（初始值是数组的第一项）做比较，如果当前sum值更大的话（那就意味着加了正数？）,那么就将该sum的值先给max存起来
        max = sum;
      }
    }
    return max;
  }
  return 0;
}