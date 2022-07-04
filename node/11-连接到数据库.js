const mysql = require('mysql');
const express = require("express");
const app = express();


const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    port: '2333',
    password: 'admin123',
    database: 'my-db-01',
})
app.use(express.urlencoded({ extended: false }));
/* 查询 */
/* 以下"？"为占位符 */
// const sqlStr='select * from users where ?'
// db.query(sqlStr,{id:2},(err,data)=>{
//     if(err) return console.log(err.message);
//     console.log(data)
// })
// /* 插入 */
// const obj={
//     username:'sun3',
//     password:'666',
// }
// /* 原始写法 */
// const sqlStr ='insert into users (username,password) values (?,?)';
/* 简单写法 */
// const sqlStr ='insert into users  set ?';
// db.query(sqlStr,obj,(err,results)=>{
//     if(err)return console.log(err.message);
//     //成功
//     if(results.affectedRows===1){
//         console.log('插入数据成功！')
//     }
// })
/* 修改 */
// const sqlStr='update users set ? where id=?';
// db.query(sqlStr,[{username:'pingping',password:'999'},1],(err,results)=>{
//     if(err)return console.log(err.message);
//     if(results.affectedRows===1){
//         console.log('修改成功！')
//     }
// })
/* 删除 */
/* 现实中一般都只是使用假删除 */
// const sqlStr='delete from users where id=?';
// db.query(sqlStr,4,(err,results)=>{
//     if(err)return console.log(err.message);
//     if(results.affectedRows===1){
//         console.log('删除成功！')
//     }
// })
/* 标记删除（假删除） */
// const sqlStr='update users set status=? where id=?';
// db.query(sqlStr,[1,2],(err,results)=>{
//     if(err)return console.log(err.message);
//     if(results.affectedRows===1){
//         console.log('标记删除成功！')
//     }
// })

app.get('/users', (req, res) => {
    const params = { ...req.query, ...req.params };
    res.send(params);
})
app.post('/users', (req, res) => {
    res.send(req.body);
})

app.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})