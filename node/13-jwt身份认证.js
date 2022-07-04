const express=require('express');
/* 1、安装依赖模块 jsonwebtoken express-jwt */
/* 2、引入 */
/* 加密 */
const jwt=require('jsonwebtoken');
/* 解码 */
const expressJwt=require('express-jwt');

const app=express();
app.use(express.urlencoded({extended:false}));
const secretKey='sunshiheima-_-!';//秘钥
/* 
（1）expressJwt解密
（2）unless用来指定那些接口不需要token
（3）请求的时候请在前面加上 Bearer 例如：Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVC...
 */
app.use(expressJwt({secret:secretKey,algorithms:['HS256']}).unless({path:[/^\/api\//]}));//中间件解析（api开头的接口都不验证token）
/* 获取token */
app.post('/api/login',(req,res)=>{
    const info=req.body;
    console.log(info)
    if(info.username==="sun",info.password==='admin123'){
        res.send({
            status:200,
            msg:'成功！',
            /* 调用jwt 生成劲jwt字符串，接收三个参数：用户对象、加密秘钥、配置对象 */
            token:jwt.sign({username:info.username},secretKey,{expiresIn:'30s'})
        }) 
    }else{
        res.send({
            status:403,
            msg:"密码或账号错误！"
        })
    }
   
})
/* 验证token */
app.get('/list',(req,res)=>{
    console.log(req.user);
    res.send(req.user)
})
app.use((err,req,res,next)=>{
    if(err.name==="UnauthorizedError"){
        return res.send({
            status:401,
            msg:'token过期！'
        })
    }
    res.send({
        status:500,
        msg:'未知错误！'
    })
})

app.listen(80,()=>{
    console.log('server running at http://127.0.0.1')
})