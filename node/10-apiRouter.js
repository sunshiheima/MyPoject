const express = require('express');
const router = express.Router();

/* get请求 */
router.get('/user/:id', (req, res) => {
  console.log(req.query);
  res.send({
    status: 0,
    msg: '成功！',
    data: {
      ...req.query,
      ...req.params,
    }
  });
})

/* post请求 */
router.post('/post', (req, res) => {
  console.log(req.body);
  res.send({
    status: 0,
    msg: '成功！',
    data: req.body,
  })
})
/* delete请求 */
/* 服务器默认get post head 三种请求方式，如果使用其他请求方式,请配置，否则将会先预检，预检成功才会在请求一次 */
router.delete('/delete', (req, res) => {
  console.log(req.body);
  res.send({
    status: 0,
    msg: '成功！',
    data: req.body,
  })
})
/* jsonp请求 */
router.get('/jsonp', (req, res) => {
  const funName = req.query.callback;
  const params = {
    name: 'sun',
    age: 18,
  }
  const scrStr = `${funName}(${JSON.stringify(params)})`
  console.log(scrStr);
  res.send(scrStr)
})

module.exports = router;