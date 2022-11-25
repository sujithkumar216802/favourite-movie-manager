const db = require('./db');

async function queryUserByEmail(email) {
    return await db.query(`SELECT * FROM users WHERE email=\'${email}\';`);
}

async function queryUserById(id) {
    return await db.query(`SELECT * FROM users WHERE id=${id};`);
}

async function createUser(email, password) {
    return await db.query(`INSERT INTO users (email, password) VALUES (\'${email}\', \'${password}\');`);
}

module.exports = {
    queryUserByEmail: (email) => queryUserByEmail(email),
    queryUserById: (id) => queryUserById(id),
    createUser: (email, password) => createUser(email, password)
};
