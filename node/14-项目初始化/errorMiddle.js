
const { ValidationError } = require('joi');
module.exports = (err, req, res, next) => {
  if (err.name === "UnauthorizedError") return res.msg('token过期！', null, 401);
  if (err instanceof ValidationError) return res.msg(err.details[0].message, null, 403);
  console.log('错误：', err)
  res.msg('未知错误！', null, 501);
}
