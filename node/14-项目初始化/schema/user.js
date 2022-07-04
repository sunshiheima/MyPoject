const joi = require('joi');

const username = joi.string().max(50).min(2).required();
const password = joi.string().pattern(/^[\S]{5,30}$/).required();
const email = joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'cn'] } });

exports.user_register_schema = {
  body: {
    username,
    password,
    email,
  }
}