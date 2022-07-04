/* 永远指向module.exports 的值 */
/* export 与module.exports  不能同时使用 */
module.exports = {
  name: "sun",
  sayHi: () => {
    console.log("hello! commonjs");
  }
}
exports = {
  nickName: "sunsun"
}
/*
 commonjs 规范
 
 1、一个js文件就是一个模块，每个模块都有一个module对象，代表当前模块
 2、module对象有一个exports属性，用来暴露模块内部的变量/方法
 3、require加载一个模块 其实就是，加载那个模块的module.exports属性
*/