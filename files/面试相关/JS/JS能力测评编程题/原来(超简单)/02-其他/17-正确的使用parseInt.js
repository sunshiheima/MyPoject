/*
题目：
  修改 js 代码中 parseInt 的调用方式，使之通过全部测试用例
示例：
  输入'12'， 输出12
  输入'12px'，输出12
  输入'0x12'，输出0
*/

//parseInt的用法不是很熟悉，看的别人的
//！原理：按10进制去处理字符串，碰到非数字字符，会将后面的全部无视！
function parse2Int(num) {
  //原来（不能通过所有实例测试）
  // return parseInt(num);
  //现在（能够通过所有示例测试的）
  return parseInt(num, 10);
}