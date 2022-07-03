/*
题目2：(数组中出现次数超过数组长度一半的数字)
  数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字
思路：
  解法一：(推荐）
    开辟一个额外空间存储每个值出现的次数，时间复杂度最大为O(n)

    使用一个map去存储数组元素值及该值出现的次数，将数组元素值作为key，将该值出现的次数作为value
    每一次遍历：
      去map中查找是否存在一个key，为nums[i]
      如果不存在，则将其作为key存入map，并将value初始化为1；若存在，则将其value加1
      若value大于数组长度的一半，则返回该key

  解法二：（我个人不推荐，感觉跟解法一相比绕了一个弯儿）
    目标值的个数比其他所有值加起来的数多
    记录两个变量：1.数组中的某个值 2.次数
    1.当前遍历值和上一次遍历值相等? 次数+1 : 次数-1
    2.次数变为0后保存新的值target
    3.遍历结束后，看保存的值，判断其是否大于0
*/
// function MoreThanHalfNum_Solution(nums){
//
// }
// let numbers = [1,2,5,2,7,8,2,2,5,2,2];
// console.log(MoreThanHalfNum_Solution(numbers));

function MoreThanHalfNum_Solution(nums) {
  var len = nums.length;
  var map = {};
  for (var i = 0; i < len; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
    if (map[nums[i]] > len / 2) {
      return nums[i];
    }
  }
}
let numbers = [1, 2, 5, 2, 7, 8, 2, 2, 5, 2, 2];
console.log(MoreThanHalfNum_Solution(numbers));

// function MoreThanHalfNum_Solution(nums) {
//   var map = {};
//   for (var i = 0; i < nums.length; i++) {
//     if (map[nums[i]] === undefined) {
//       map[nums[i]] = 1;
//     } else {
//       map[nums[i]]++;
//     }
//     if (map[nums[i]] > nums.length / 2) {
//       return nums[i];
//     }
//   }
// }
// let numbers = [1, 2, 5, 2, 7, 8, 2, 2, 5, 2, 2];
// console.log(MoreThanHalfNum_Solution(numbers));

// function MoreThanHalfNum_Solution(nums) {
//   var map = {};
//   //先将值作为key，出现次数(注意：之前是数组下标)作为value，存储到map当中
//   for (var i = 0; i < nums.length; i++) {
//     if (map[nums[i]]) {
//       //当前值若存在，则将value加一
//       map[nums[i]]++;
//     } else {
//       //当前值若存在，则将value初始化为1，表示出现次数为一次
//       map[nums[i]] = 1;
//     }
//     //看map对象当中是否有出现次数大于num.length/2，并将该数字返回
//     if (map[nums[i]] > nums.length / 2) {
//       return nums[i];
//     }
//   }
//   //看map对象当中是否有出现次数大于num.length/2，并将该数字返回
//   // for(var i=0; i<nums.length; i++){
//   //   if(map[nums[i]]>(nums.length/2)){
//   //     return nums[i];
//   //   }
//   // }
// }
// let numbers = [1, 2, 5, 2, 7, 8, 2, 2, 5, 2, 2];
// console.log(MoreThanHalfNum_Solution(numbers));

//解法一（重点掌握这个！）
// function MoreThanHalfNum_Solution(nums){
//   let map = {};
//   let length = nums.length;
//   for(let i=0; i<length; i++){
//     if(map[nums[i]] !== undefined){
//       map[nums[i]]++;
//     }else{
//       map[nums[i]] = 1;
//     }
//     if(map[nums[i]] > length/2){
//       return nums[i];
//     }
//   }
// }
// let numbers = [1,2,5,2,7,8,2,2,5,2,2];
// MoreThanHalfNum_Solution(numbers);
