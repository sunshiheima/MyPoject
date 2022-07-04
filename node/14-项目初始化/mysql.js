const mysql = require('mysql');

module.exports = mysql.createPool(
  {
    host: '127.0.0.1',
    port: '2333',
    user: 'root',
    password: '123456',
    database: 'my_db_01',
  }
)