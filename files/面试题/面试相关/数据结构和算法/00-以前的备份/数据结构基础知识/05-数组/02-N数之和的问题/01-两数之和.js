/*非常常见的问题，基本上都是一个套路，主要考虑的是如何比暴力法 降低复杂度，而且也会用到上面的双指针技巧*/

/*
  给定一个整数数组nums和一个目标值target，请你在该数组中找出和目标值的那两个整数，并返回它们的数组下标
  你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素
  思路：
    使用一个map（是一个普通对象）将遍历过的数字存起来，值作为key（为了避免重复利用元素），下标作为值
    对于每一次遍历：
      去map中查找是否有key为target-nums[i]的值
      如果取到了，则条件成立，返回
      如果没有取到，将当前值作为key，下标作为值存入map
*/

var twoSum = function(nums, target){
  const map = {};
  if(Array.isArray(nums)){    //参数检测，看传入的nums是否为一个数组
    for(let i = 0; i < nums.length; i++){   //遍历数组的每一个元素
      if(map[target - nums[i]] !== undefined){
        return [map[target - nums[i]], i];
      }else{    //如果map里面没有存储此元素的话，就存储，并且将值作为map对象中键值对的键（注意：这厮为了避免之后重复利用元素）
        map[nums[i]] = i;
      }
    }
  }
  return [];
}