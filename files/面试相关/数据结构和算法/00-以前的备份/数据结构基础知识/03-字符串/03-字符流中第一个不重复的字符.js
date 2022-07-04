/*
  请实现一个函数，用来找出字符流中第一个只出现一次的字符。
  例如，当从字符流中只读出前两个字符"go"时，第一个只出现一次的字符是"g"。 当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。
  如果当前字符流中没有存在出现一次的字符，返回#字符

  思路：
    创建一个长度为256的数组container来标记字符流中字符出现的次数
    使用字符ASCII码作为下标，这样数组长度最大为256
    当字符没有出现过，标记为-1
    当字符只出现一次，标记为字符在字符流中的位置index
    当字符出现多次时，标记为-2
    当调用FirstAppearingOnce时，只需要找到，数组值大于-1的且值最小的位置索引，即为第一个出现次数为1的字符
*/
let container = new Array(256).fill(-1);
let index = 0;
function Init(){
  container = new Array(256).fill(-1);
  index = 0;
}
function Insert(ch){
  const code = ch.charCodeAt(0);

}