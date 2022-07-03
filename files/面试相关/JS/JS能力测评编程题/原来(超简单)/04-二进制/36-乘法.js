function multiply(a, b){
  //求两个数中精度大的那一个
  var stra = a.toString();
  console.log('stra', stra);
  var strb = b.toString();
  console.log('strb', strb);
  var len = Math.max(stra.length-stra.indexOf('.')-1, strb.length-strb.indexOf('.')-1);
  console.log('len', len);

  return parseFloat(a*b).toFixed(len);
}
console.log(multiply(3, 0.0001));