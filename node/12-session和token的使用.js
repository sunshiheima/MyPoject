const express =require("express");
const app=express();
/* 引入express-session 模块*/
const session=require('express-session');

/* 使用配置express-session中间件 */
app.use(session({
    secret:'sunshiheima',//自定义字符用来加密
    resave:false,//固定写法
    saveUninitialized:true,//固定写法
}))
app.use(express.urlencoded({extended:false}));

app.post('/login',(req,res)=>{
    req.session.user=req.body;
    req.session.isLogin=true;
    res.send({
        status:0,
        msg:'成功！'
    })
})
app.get('/user',(req,res)=>{
    if(!req.session.isLogin){
       return res.send({
            status:1,
            msg:'未登录！'
        })
    }
    return res.send({
        status:0,
        data:req.session.user,
    })
})

app.get('/logout',(req,res)=>{
    req.session.user=null;
    req.session.isLogin=false;
    res.send({
        status:0,
        msg:'操作成功！',
        data:req.session.user,
    })
})


app.listen(80,()=>{
    console.log('server running at http://127.0.0.1')
})