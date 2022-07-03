/*
    结合setTimeout和promise和async-await解决具体问题：
    问题：实现一个红绿灯，把一个圆形div按照绿色3秒，黄色1秒，红色2秒循环改变背景色
*/

function sleep(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}
async function changeColor(color, duration) {
  document.getElementById("traffic-light").style.background = color;
  await sleep(duration);
}
async function main() {
  while (true) {
    await changeColor("green", 3000);
    await changeColor("yellow", 1000);
    await changeColor("red", 2000);
  }
}
main();
