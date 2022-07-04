/*
按要求输出指定格式的'扁平化'数组.(input: [1, [2, 3]], output:'[ 1 [ 2 3 ] ]');
*/
function flat(arr) {
  var str = JSON.stringify(arr); //"[1,[2,3]]"
  var temp = str.split("");
  temp = temp.filter((item) => {
    return item !== ",";
  });
  return temp.join(" ");
}
console.log(flat([1, [2, 3]]));
