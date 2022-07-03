/*建立一定的抽象建模能力，将实际中的很多问题进行抽象*/

/*
题目：(构建乘积数组-剑指offer)
  给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。
思路：
  B[i]的值是A数组所有元素的乘积再除以A[i]，但是题目中不能用除法，我们换个思路
  用矩阵，将B[i]的每个值列出来，如图所示（图是关键）
  ---
  B[i]的值可以看作下图的矩阵中每行的乘积
  可以将B数组分为上下两个三角，先计算下三角，然后把上三角乘进去。
*/
// function multiply(array){

// }
// let array = [0,1,2,3,4,5,6];
// console.log(multiply(array));

function multiply(array) {
  var result = [];
  var len = array.length;
  result[0] = 1;
  for (var i = 1; i < len; i++) {
    result[i] = result[i - 1] * array[i - 1];
  }
  var temp = 1;
  for (var j = len - 2; j >= 0; j--) {
    temp = array[j + 1] * temp;
    result[j] = result[j] * temp;
  }
  return result;
}
let array = [0, 1, 2, 3, 4, 5, 6];
console.log(multiply(array));

// function multiply(array) {
//   var result = [];
//   var length = array.length;
//   result[0] = 1;
//   for (var i = 1; i < length; i++) {
//     result[i] = array[i - 1] * result[i - 1];
//   }
//   var temp = 1;
//   for (var j = length - 2; j >= 0; j--) {
//     temp = array[j + 1] * temp;
//     result[j] = result[j] * temp;
//   }
//   return result;
// }
// let array = [0, 1, 2, 3, 4, 5, 6];
// console.log(multiply(array));

// function multiply(array){
//   let result = [];
//   result[0] = 1;
//   //计算上三角
//   for(let i=1; i<array.length; i++){ //注意此处是从1开始，而不是从0开始
//     result[i] = result[i-1] * array[i-1];
//   }
//   let temp = 1;
//   //计算下三角
//   for(let i=array.length-2; i>=0;  i--){
//     temp = temp * array[i+1];    //注意此处是i+1
//     result[i] = result[i] * temp;
//   }
//   return result;
// }
// let array = [0,1,2,3,4,5,6];
// console.log(multiply(array));

//传进来的array即数组A
// function multiply(array) {
//   //要构造的数组即数组B
//   const result = [];
//   if (Array.isArray(array) && array.length > 0) {
//     //计算上三角（注意按图中下三角部分，从上往下）
//     result[0] = 1;
//     for (let i = 1; i < array.length; i++) {
//       result[i] = result[i - 1] * array[i - 1];
//     }
//     //计算下三角，并相乘（注意看行，从下往上）
//     let temp = 1;
//     for (let i = array.length - 2; i >= 0; i--) {
//       temp = temp * array[i + 1];
//       result[i] = result[i] * temp;
//     }
//   }
//   return result;
// }
// let array = [0, 1, 2, 3, 4, 5, 6];
// console.log(multiply(array));
