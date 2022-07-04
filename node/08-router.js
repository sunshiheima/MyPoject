const express = require("express");

const router = express.Router();
/* 动态传参 */
router.get("/user/:id/:name", (req, res) => {
  /* url 拼接的地址 */
  const query = req.query;
  /* 路由动态传参 */
  const params = req.params;
  const obj = { ...query, ...params };
  console.log(obj);
  /* 返回参数 */
  res.send(obj);
})

module.exports = router;