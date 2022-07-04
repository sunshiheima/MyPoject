const { Router } = require('express');
const joi = require('joi');
const router = Router();
const expressJoi = require('@escook/express-joi');
const { register, login } = require('../routerFunction/user');

const { user_register_schema } = require('../schema/user');
/* 注册 */
router.post('/register', expressJoi(user_register_schema), register);
/* 登录 */
router.post('/login', login);

module.exports = router;