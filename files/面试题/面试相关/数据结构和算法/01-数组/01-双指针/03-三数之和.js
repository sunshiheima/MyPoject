/*
题目3：（三数之和）
  给定一个包含n个整数的数组nums，判断nums中是否存在三个元素a,b,c,使得a+b+c=0?找出所有满足条件且不重复的三元组
  注意：答案中不可以包含重复的三元组。
思路：
  题目中说明可能会出现多组结果，所以我们要考虑好去重
  1.为了方便去重，我们首先将数组排序
  2.对数组进行遍历，取当前遍历的数nums[i]为一个基准数，遍历数后面的数组为寻找数组。
  3.在寻找数组中设定两个起点，最左侧的left(i+1)和最右侧的right(length-1)
  4.判断nums[i]+nums[left]+nums[right]是否等于0，如果等于0，加入结果，并分别将left和right移动一位
  5.如果结果大于0，将right向左移动一位，向结果逼近
  6.如果结果小于0，将left向右移动一位
*/
/*
  注意：while当中有while：对应着"使数组的奇数在前偶数在后"那道题，是while而不是if的原因是：值需要变化的条件是，值自身的奇偶性！
        while当中有if：对应的就是这道题，是if而不是while的原因是：值需要变化的条件是，总和的大小（而非自己自身）！因此需要外界循环判断！
*/
/*
  1.Array.from()--可以通过以下方式来创建数组对象：
    伪数组对象（即拥有一个length属性和若干索引属性的任意对象，例如arguments)
    可迭代对象（可以获取对象中的元素，如Map, Set等）
  2.Set对象--允许你存储任何类型的唯一值，无论是原始值或者是对象引用
    如果你传递的参数是一个可迭代对象，它的所有元素将不重复地被添加到新的Set中，如果不指定此参数或其值为null，则新的Set为空
    返回值为一个新的Set对象
*/
// let threeSum = function(nums){
//
// }
// let nums = [0,6,-1,1,-5,7,-1, -4,9,-5,-13,7];
// console.log(threeSum(nums));   //[ [ -13, 6, 7 ], [ -5, -4, 9 ], [ -5, -1, 6 ], [ -1, 0, 1 ] ]

function unique(arr) {
  //先排序
  arr.sort((a, b) => a - b);
  let newArr = [];
  //再去重
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      continue;
    }
    newArr.push(arr[i]);
  }
  return newArr;
}

let threeSum = function (nums) {
  var newArr = unique(nums);
  var len = newArr.length;
  var res = [];
  for (var i = 0; i < len; i++) {
    var base = i;
    var left = i + 1;
    var right = len - 1;
    while (left < right) {
      var sum = newArr[base] + newArr[left] + newArr[right];
      if (sum === 0) {
        res.push([newArr[base], newArr[left++], newArr[right--]]);
      }
      if (sum > 0) {
        right--;
      }
      if (sum < 0) {
        left++;
      }
    }
  }
  return res;
};
let nums = [0, 6, -1, 1, -5, 7, -1, -4, 9, -5, -13, 7];
console.log(threeSum(nums)); //[ [ -13, 6, 7 ], [ -5, -4, 9 ], [ -5, -1, 6 ], [ -1, 0, 1 ] ]

// let threeSum = function (nums) {
//   var result = [];
//   //排序-升序排序
//   nums.sort((a, b) => a - b);
//   //去重
//   let newNums = Array.from(new Set(nums));
//   //开始遍历数组
//   for (var i = 0; i < newNums.length - 2; i++) {
//     var base = newNums[i];
//     var left = i + 1;
//     var right = newNums.length - 1;
//     while (left < right) {
//       var sum = base + newNums[left] + newNums[right];
//       if (sum === 0) {
//         result.push([base, newNums[left++], newNums[right--]]);
//         // left++;
//         // right--;
//       }
//       if (sum < 0) {
//         left++;
//       }
//       if (sum > 0) {
//         right--;
//       }
//     }
//   }
//   return result;
// };
// let nums = [0, 6, -1, 1, -5, 7, -1, -4, 9, -5, -13, 7];
// console.log(threeSum(nums));

// let threeSum = function(nums){
//   let result = [];    //结果数组，之后里面会存放多个由三个元素组成的数组
//   //为了方便去重，先将数组进行排序--升序排序
//   nums.sort((value1, value2) => { return value1-value2;})
//   //数组去重
//   let newNums = Array.from(new Set(nums));
//   //定下基准数
//   for(var i=0; i<newNums.length; i++){    //注意此处i也是基准数的下标
//     let left = i+1;
//     let right = newNums.length-1;
//     while(left<right){
//       let sum = newNums[i]+newNums[left]+newNums[right];
//       if(sum<0){
//         left++;
//       }
//       if(sum>0) {
//         right--;
//       }
//       if(sum===0) {
//         result.push([newNums[i], newNums[left++], newNums[right--]]);   //注意：在添加完之后应该将left、right指针移动
//       }
//     }
//   }
//   return result;
// }
// let nums = [0,6,-1,1,-5,7,-1, -4,9,-5,-13,7];
// console.log(threeSum(nums));

// let threeSum = function(nums){
//   let result = [];
//   //1.先将数组排序（升序）
//   nums.sort((a,b) => a-b);
//   //外层遍历：将数组中的数依次作为基准数（重复的除外）
//   for(let i=0; i<nums.length; i++){
//     //2.确定基准数时：去重
//     if(i>0 && nums[i] === nums[i-1]){continue; }
//     //3.确定寻找数组中的起点和终点
//     let left = i+1;
//     let right = nums.length-1;
//     //内层遍历：确定合适的left和right，使得三数之和等于0。即在基准数确定的情况下，得出所有符合条件的left和right。
//     while(left<right){
//       //根据三数的和确定left和right的移动
//       let sum = nums[i] + nums[left] + nums[right];
//       if(sum < 0){
//         left++;
//       }else if(sum > 0){
//         right--;
//       }else{
//         //sum等于0，即符合条件，将三数存到结果数组中
//         result.push([nums[i], nums[left++], nums[right--]])
//         //移动left和right，继续在寻找数组中探测符合条件的left和right
//         //移动left和right时，先去重
//         while(nums[left] === nums[left-1]){
//           left++;
//         }
//         while(nums[right] === nums[right+1]){
//           right--;
//         }
//       }
//     }
//   }
//   return result;
// }
// let nums = [0,6,-1,1,7,-4,9,-5,-13];
// threeSum(nums);

// function threeSum(nums){
//   let result = [];
//   //升序排序
//   nums.sort((a,b)=>a-b);
//   //取基准数
//   for(let i=1; i<nums.length; i++){
//     //取基准数时去重
//     if(nums[i] === nums[i+1]){continue; }
//     //设定数组的起点和终点
//     let left = i+1
//     let right = nums.length-1;
//     //当left=right的时候，结束循环
//     while(left<right){
//       let sum = nums[i] + nums[left] + nums[right];
//       if(sum>0){   //注意：是if而不是while
//         right--;
//       }else if(sum<0){
//         left++;
//       }else{
//         result.push(nums[i], nums[left++], nums[right--]);
//         //取left和right的时候去重
//         while(nums[left] === nums[left-1]){left++}
//         while(nums[right] === nums[right+1]){right--}
//       }
//     }
//   }
//   return result;
// }
// let nums = [0,6,-1,1,7,-4,9,-5,-13];
// threeSum(nums);
