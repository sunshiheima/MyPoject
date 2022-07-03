/*
题目4：（扑克牌顺子）
  扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。
  2-10为数字本身，A为1，J为11...大小王可以看成任何数字，可以把它当作0处理
思路：
  1.数组排序
  2.遍历数组
  3.若为0，记录0的个数
  4.若不为0，记录和下一个元素的间隔(注意中间如果有两个元素相等则不能构成顺子)
  5.最后比较0的个数和间隔数，间隔数>0的个数则不能构成顺子
*/
// function IsContinuous(numbers) {

// }
// let numbers = [0, 2, 5, 3, 0];
// console.log(IsContinuous(numbers));

function IsContinuous(numbers) {
  numbers.sort((a, b) => a - b);
  var kingdom = 0;
  var space = 0;
  for (var i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] === 0) {
      kingdom++;
    } else {
      var temp = numbers[i + 1] - numbers[i];
      if (temp === 0) {
        return false;
      } else {
        space += temp - 1;
      }
    }
  }
  return kingdom >= space;
}
let numbers = [0, 2, 5, 3, 0];
console.log(IsContinuous(numbers));

// function IsContinuous(numbers) {
//   //排序
//   numbers.sort((a, b) => a - b);
//   //console.log("numbers", numbers);
//   //遍历
//   var kingdom = 0; //count代表0的个数
//   var space = 0;
//   for (var i = 0; i < numbers.length - 1; i++) {
//     if (numbers[i] === 0) {
//       kingdom++;
//       //console.log("kingdom", kingdom);
//     } else {
//       temp = numbers[i + 1] - numbers[i];
//       //console.log("temp", temp);
//       if (temp === 0) {
//         return false;
//       } else {
//         space += temp - 1;
//         //console.log("space", space);
//       }
//     }
//   }
//   return kingdom >= space;
// }
// let numbers = [0, 2, 5, 3, 0];
// console.log(IsContinuous(numbers));

// function IsContinuous(numbers) {
//   if (numbers && numbers.length > 0) {
//     numbers.sort();
//     let kingNum = 0;
//     let spaceNum = 0;
//     for (let i = 0; i < numbers.length - 1; i++) {
//       if (numbers[i] === 0) {
//         kingNum++;
//       } else {
//         let space = numbers[i + 1] - numbers[i];
//         if (space === 0) {
//           return false;
//         } else {
//           spaceNum += space - 1;
//         }
//       }
//     }
//     return kingNum >= spaceNum;
//   }
//   return false;
// }
// let numbers = [0, 2, 5, 3, 0];
// console.log(IsContinuous(numbers));

// function IsContinuous(nums){
//   nums.sort();
//   console.log(nums);
//   //定义王的个数和间隔数
//   let kingNum = 0;
//   let spaceNum = 0;
//   for(let i=0; i<nums.length-1; i++){   //注意：此处为i<nums.length-1，而非i<nums.length,否则最后一圈循环得出的space是NaN，因为nums[i+1]为未知
//     if(nums[i] === 0){
//       kingNum++;
//     }else{
//       let space = nums[i+1] - nums[i];
//       console.log('space', space);
//       if(space === 0){
//         return false;
//       }
//       spaceNum += space-1;
//     }
//   }
//   return kingNum >= spaceNum;
// }
// let numbers = [0,2,5,3,0];
// IsContinuous(numbers);
