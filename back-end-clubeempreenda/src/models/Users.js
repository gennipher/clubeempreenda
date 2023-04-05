const knex = require('../knex/config/database')

class Users {
  static getUsers () {
    const select = knex('usuarios')

    return select.then(data => {
      return data
    }).catch(e => {
      return e
    })
  }

  static getUsersById (id) {
    const select = knex('usuarios').where('idUsuario', id)

    return select.then(data => {
      return data
    }).catch(e => {
      return e
    })
  }
}

module.exports = Users
