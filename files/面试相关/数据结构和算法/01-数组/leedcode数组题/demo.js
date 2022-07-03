var shuffle = function(nums, n) {
  var result = new Array(2n);     //定义一个长度为2n的数组
  for(var i=0; i<n; i++){         //先处理nums数组当中的前一半元素，将他们存到result数组中对应的位置
    result[2*i] = nums[i];
  }
  for(var j=0; j<n; j++){
    console.log('1');
    result[j*2+1] = nums[j+n];
  }
  return result;
};
console.log(shuffle([2,5,1,3,4,7], 3));


// var isPossibleDivide = function(nums, k) {
//   if(nums.length % k !== 0){
//     return false;
//   }
//   //1.排序-升序排序
//   nums.sort((a,b) => a-b);
//   //console.log('排序', nums)
//   //2.看当前数组中第一个数，看数组中其他的数中是否存在，与其连续的另外两个数。
//   //若没有则直接返回false；若有则将这三个数从数组中删除。
//   //重复前面的操作(循环次数为nums.length/k次))，若循环结束之后数组当中无元素了，则返回true.
//   var length = nums.length;
//   var indexArr;
//   for(var i=0; i<length/k; i++){
//     var first = nums[0];        //看当前数组中第一个数，注意first是值
//     //得出索引数组
//     indexArr = [0];
//     for(var j=1; j<k; j++){
//       if(nums.indexOf(first+j) === -1){
//         return false;
//       }else{
//         indexArr.push(nums.indexOf(first+j));
//       }
//     }
//     //console.log('indexArr', indexArr);
//     //到达这个地方表明本次成功取得了一组连续数值，接下来开始将这组数从nums数组当中删除
//     for(var z=0; z<k; z++){
//       nums.splice(indexArr[z]-z, 1);
//     }
//     //console.log('删除三个元素之后的nums及其长度', nums, nums.length);
//     if(nums.length===0){
//       return true;
//     }
//   }
// };
//console.log(isPossibleDivide([3,2,1,2,3,4,3,4,5,9,10,11], 3));



// var isPossibleDivide = function(nums, k) {
//   if(nums.length % k !== 0){
//     return false;
//   }
//   //1.排序-升序排序
//   nums.sort((a,b) => a-b);
//   console.log('排序', nums)
//   //2.看当前数组中第一个数，看数组中其他的数中是否存在，与其连续的另外两个数。
//   //若没有则直接返回false；若有则将这三个数从数组中删除。
//   //重复前面的操作(循环次数为nums.length/k次))，若循环结束之后数组当中无元素了，则返回true.
//   var length = nums.length;
//   for(var i=0; i<length/k; i++){
//     var first = nums[0];        //看当前数组中第一个数，注意first是值
//     var second = nums.indexOf(first+1);     //注意second是索引
//     var third = nums.indexOf(first+2);      //注意second是索引
//     console.log('first, second, third', first, second, third);
//     if((second !== -1) && (third !== -1)){
//       nums.splice(0, 1);
//       nums.splice(second-1, 1);
//       nums.splice(third-2, 1);
//       console.log('删除三个元素之后的nums及其长度', nums, nums.length);
//     }else{
//       return false;
//     }
//     if(nums.length===0){
//       return true;
//     }
//   }
// };
// console.log(isPossibleDivide([3,2,1,2,3,4,3,4,5,9,10,11], 3));