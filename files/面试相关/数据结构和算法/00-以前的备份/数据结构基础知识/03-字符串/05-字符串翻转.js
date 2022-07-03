/*
翻转单词顺序
  输入一个英文句子，翻转句子中单词的顺序，但是单词内字符的顺序不变。
  为简单起见，标点符号和普通字符一样处理。
*/
//直接调用数组API进行翻转
function ReverseSentence(str){
  if(!str) {return ''}
  return str.split(' ').reverse().join(' ');
}

/*
左旋转字符串
  字符串的左旋转：是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。
  比如输入字符串"abcdefg"和数字2，该函数将返回左旋转2位得到的结果"cdefgab"
*/
//将两个str进行拼接，直接从第n位开始截取，就相当于将前面n个数组移到末尾
function LeftRotateString(str, n){
  if(str && n!=null){
    return (str+str).substr(n, str.length);
  }else{
    return '';
  }
}
//方法二：先将两部分分别进行翻转，得到=>"bagfedc"; 再将整个字符串惊醒翻转，得到=>"cdefgab"
