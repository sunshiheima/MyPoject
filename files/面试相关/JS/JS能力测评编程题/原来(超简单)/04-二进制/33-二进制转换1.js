function valueAtBit(num, bit) {
  s = num.toString(2);
  console.log(s);
  return s[s.length-bit];   //注意数字的位数 从低到高是从右往左！
}
console.log(valueAtBit(128, 8));

