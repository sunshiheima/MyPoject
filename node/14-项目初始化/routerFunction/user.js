const jwt = require('jsonwebtoken');
const { secretKey, expiresIn } = require('../config');
const db = require('../mysql');
const bcrypt = require('bcryptjs');

/* 注册 */
exports.register = (req, res) => {
  const searchSql = `select * from users where username=?`;
  const userInfo = req.body;
  db.query(searchSql, userInfo.username, (err, result) => {
    if (err) return res.msg(err);
    if (result.length > 0) return res.msg('用户名重复！', null, 403);

    const insertSql = `insert into users set ?`;
    db.query(insertSql, { ...userInfo, password: bcrypt.hashSync(userInfo.password, 10) }, (err, result) => {
      if (err) return res.msg("创建失败！请重试！", null, 502);
      if (result.affectedRows === 1) {
        res.msg('注册成功！');
      }
    })
  })
}
/* 登录 */
exports.login = (req, res) => {
  const sqlStr = 'select * from users where username=?';
  const userInfo = req.body;
  db.query(sqlStr, userInfo.username, (err, result) => {
    /* 错误处理 */
    if (err) return res.msg("创建失败！请重试！", null, 502);
    /* 用户不存在 */
    if (result.length === 0) return res.msg("用户不存在！",);
    /* 密码判断 */
    const isResult = bcrypt.compareSync(userInfo.password, result[0].password);
    if (!isResult) return res.msg("密码错误!")

    const user = { ...userInfo, password: '', avatar: '' };
    const token = jwt.sign(user, secretKey, { expiresIn });
    res.msg('登录成功！', { token: `Bearer ${token}`, });
  })
}