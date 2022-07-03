/*
    题目：
        输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出所有数字中最小的一个
    例如：
        输入数组[3, 32, 321], 则打印出这三个数字能排成的最小数字为321323

    思路：
        解此题关键就是用到了sort()方法，但是要想完全理解，必须要先理解【快排算法】
        (sort的底层用的就是快排)
    
    注意：
        此题不应归类于【数组】当中，应该在【快排算法】当中！

        快排我已经学了，但是仍然无法理解这道题。。。关键还是sort的底层实现
        
*/
function PrintMinNumber(numbers) {
  if (!numbers || numbers.length === 0) {
    return "";
  }
  return numbers.sort(compare).join("");
}
function compare(a, b) {
  var front = "" + a + b;
  var behind = "" + b + a;
  console.log(front - behind);
  return front - behind;
}
console.log(PrintMinNumber([3, 32, 321]));
