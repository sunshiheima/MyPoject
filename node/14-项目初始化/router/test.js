const { Router } = require('express');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

const router = Router();
const { crashFn } = require('../routerFunction/test')

/* 注册 */
router.post('/crash', multipartMiddleware, crashFn);

module.exports = router;