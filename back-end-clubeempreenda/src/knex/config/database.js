const knexClubeEmpreenda = require('knex')({
  client: 'mysql',
  connection: {
    host: 'marllonsoares.com.br',
    database: 'guiak169_jenny',
    user: 'guiak169_jenny',
    password: '@jen@n@y321',
    requestTimeout: 600000,
    options: {
      port: 3306
    }
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
})

module.exports = knexClubeEmpreenda