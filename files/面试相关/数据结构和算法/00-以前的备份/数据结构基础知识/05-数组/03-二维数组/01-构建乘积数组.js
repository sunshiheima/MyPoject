/*
  给定一个数组A，请构建一个数组B，其中B中的元素......不能使用除法

  B[i]的值可以看作上图中每行的乘积
  可以将B数组分为上下两个三角，先计算下三角，然后再把上三角乘进去
*/
function multiply(array){   //数组A
  const result = [];    //待构建的数组B
  if(Array.isArray(array) && array.length > 0){
    //计算下三角
    result[0] = 1;    //将数组B的第一个元素 初始化为1
    for(let i=1; i<array.length; i++){
      result[i] = result[i-1] * array[i-1];  //确实是下三角，注意对照图看（是从上到下的）
    }
    //乘上三角
    let temp = 1;
    for(let i=array.length-2; i>=0; i--){
      temp = temp * array[i+1];   //确实是上三角，但是注意是倒着的，对照图理解的时候要注意是从下到上的
      result[i] = result[i] * temp;
    }
  }

}