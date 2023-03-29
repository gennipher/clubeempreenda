const knex = require('../knex/config/database').knexLogistica

class Users {
  static getUsers () {
    const select = knex('Usuario')

    return select.then(data => {
      return data
    }).catch(e => {
      return e
    })
  }

  static getUsersById (id) {
    const select = knex('Usuario').where('IDUsuario', id)

    return select.then(data => {
      return data
    }).catch(e => {
      return e
    })
  }
}

module.exports = Users
