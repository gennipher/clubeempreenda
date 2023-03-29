const mysql = require('mysql2/promise');

const connection = mysql.createPool({
          host: 'marllonsoares.com.br',
          port: 3306,
          user: 'guiak169_jenny',
          password: '@jen@n@y321',
          database: 'guiak169_jenny',
});

module.exports = connection;