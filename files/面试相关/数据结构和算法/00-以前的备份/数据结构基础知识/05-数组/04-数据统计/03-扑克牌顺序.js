/*
  扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的
  2-10为数字本身，A为1,J为11...大小王可以看成任何数字，也可以把它当作0处理
  思路：(注意：下面表述里面，所谓的0实则就是王的次数)
    1.将数组排序
    2.遍历数组
    3.若为0，记录0的个数加1
    4.若不为0，记录和下一个元素的间隔
    5.最后比较0的个数和间隔数，间隔数>0的个数  则不能构成顺子
    6.注意中间如果有两个元素相等则不能构成顺子
*/
function IsConnection(numbers){
  if(numbers && numbers.length>0){
    numbers.sort();   //当array.sort()方法不传参时，即使所有元素都是数字，还是会将每个元素先用toString()转换成字符串，然后再比较字符串啊。。。
    let kingNum = 0;
    let spaceNum = 0;
    for(let i=0; i<numbers.length-1; i++){    //为什么不看数组的最后一个？
      if(numbers[i]===0){
        kingNum++;
      }else{
        const space = numbers[i+1] - numbers[i];
        if(space===0){    //表明有数组中间有两个元素相等。
          return false;
        }else{
          spaceNum += space-1;    //间隔数
        }
      }
    }
    return kingNum - spaceNum >= 0;
  }
  return false;
}