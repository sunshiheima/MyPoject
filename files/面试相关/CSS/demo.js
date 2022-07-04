// function transform(num) {
//   //记录7的个数
//   var res = 0;
//   //先将十进制数变为二进制数
//   var arr = [];
//   while (num > 0) {
//     var temp = num % 2;
//     arr.push(temp);
//     num = (num - temp) / 2;
//   }
//   //将二进制数每三位合并，变成八进制数
//   var count = 0,
//     sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     var temp = arr[i] * Math.pow(2, count);
//     sum += temp;
//     count++;
//     if (count === 3) {
//       if (sum === 7) {
//         res++;
//       }
//       count = 0;
//       sum = 0;
//     }
//   }
//   return res;
// }
// transform(1016);

function demo(arr) {
  //将字符串切割变成数字数组
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr[i] = arr[i].split(".").map((item) => {
      return +item;
    });
  }
  //排序
  console.log(newArr);
  for (var i = 0; i < 3; i++) {
    newArr.sort((a, b) => {
      if (a[i] === undefined) {
        a[i] = 0;
      }
      if (b[i] === undefined) {
        b[i] = 0;
      }
      return a[i] - b[i];
    });
    console.log(newArr);
  }
  return newArr;
}
demo(["2.1.0", "1.5", "2", "1.1.999.1.2.3", "0.10.0"]);

// var arr = [1, 2, 3];
// arr.sort((a, b) => {
//   return b - a;
// });
// console.log(arr);
