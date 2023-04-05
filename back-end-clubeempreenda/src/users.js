const connection = require('./connection');

const users = async () => {
    const [query] = await connection.execute('SELECT * FROM guiak169_jenny.usuarios');
    return query;
};

module.exports = users;