/*
将打印一圈拆解为四步：
  1.从左到右打印一行
  2.从上到下打印一列
  3.从右到左打印一行
  4.从下到上打印一列

需要特别注意的是最后一圈
  1.能走到最后一圈，从左到右必定会打印。
  2.若结束行号大于开始行号，需要从上到下打印
  3.若结束列号大于开始列号，需要从右到左打印
  4.结束行号大于开始行号+1，需要从下到上打印
*/

//顺时针打印
function printMatrix(matrix){
  var start = 0;
  var rows = matrix.length;
  var colums = matrix[0].length;
  var result = [];

  if(!rows || !colums){
    return false;
  }


}