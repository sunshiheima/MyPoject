/*
题目：
  找出数组 arr 中重复出现过的元素
示例：
  输入[1, 2, 4, 4, 3, 3, 1, 5, 3] ； 输出[1, 3, 4]
*/

//我的写法（已过）
function duplicates(arr) {
  var map = {};
  var result = [];
  for(var i=0; i<arr.length; i++){
    if(!map[arr[i]]){
      map[arr[i]] = 1;
    }else{
      map[arr[i]]++;
    }
  }
  // console.log('map', map);
  for(var j=0; j<arr.length; j++){
    // console.log('j', j);
    if(map[arr[j]] > 1 && result.indexOf(arr[j])===-1){
      result.push(arr[j]);
      // console.log('result', result);
    }
  }
  return result;
}
console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]));
