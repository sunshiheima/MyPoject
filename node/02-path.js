const path = require("path");

/* 
  1、地址格式化
   */
const p1 = path.normalize("/file//读取.txt");
console.log("格式化：", p1);

/*
  2、地址拼接 后面覆盖前面
 */
const p2 = path.join("/", "./file", "/读取.txt");
console.log('地址拼接', p2);

/*
  3、如今巡航 (相当不断调用cd方法: cd file/读取.txt)
 */
const p3 = path.resolve("./", "/file", "读取.txt");
console.log('如今巡航：', p3);

/*
4、相对路径  
 */
const p4 = path.relative("./file/读取.txt", "./file/写入.txt");
console.log('相对路径：', p4);
/* 
5、返回路径/文件的所在的文件夹路径 
  */
const p5 = path.dirname("/file/读取.txt");
console.log('文件名称：', p5);
/* 
7、返回文件名 可选参数为扩展名
  */
const p6 = path.basename("./file/读取.txt");
const p7 = path.basename("./file/读取.txt", ".txt");
console.log('文件名：', p6);
console.log('文件名：', p7);
/* 
8、返回扩展名 
*/
const p8 = path.extname("./file/读取.txt");
const p9 = path.extname("./file/读取.");
const p10 = path.extname("./file/读取");
console.log('扩展名：', p8, p9, p10);
/* 
9、路径分隔符
 */
const p11 = "file/读取/txt".split(path.sep);//不能实现
const p12 = "file\\读取\\txt".split(path.sep);
console.log('分隔符：', p11, p12);
/* 
10、__dirname 和 __filename 
  (1)dirname 当前文件所在文件夹的绝对路径
  (2)filename 当前文件的绝对路径
*/
console.log('绝对路径：', __dirname, __filename);