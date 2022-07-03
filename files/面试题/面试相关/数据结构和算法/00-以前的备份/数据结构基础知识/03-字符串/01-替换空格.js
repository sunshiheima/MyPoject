/*请实现一个函数，将一个字符串中的每个空格替换成"20%"*/

//方法1：直接用空格将字符串切割成数组，再用%20进行连接
function replaceSpace(str){
  return str.split(' ').join('%20');
}

//方法2：用正则表达式找到所有空格一次替换
function replaceSpace(str){
  return str.replace(/\s/g, '%20');
}

//拓展：允许出现多个空格，多个空格用一个20%替换
//用正则表达式找到连续空格进行替换
function replaceSpace(str){
  return str.replace(/\s+/g, '20%');
}