function multiply(array){
  let result = [];
  result[0] = 1;
  //计算上三角
  for(let i=1; i<array.length; i++){
    result[i] = result[i-1] * array[i-1];
  }
  let temp = 1;
  //计算下三角
  for(let i=array.length-2; i>=0;  i--){
    temp = temp * array[i+1];
    result[i] = result[i] * temp;
  }
  return result;
}
let array = [0,1,2,3,4,5,6];
console.log(multiply(array));
