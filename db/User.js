const db = require('./db');

async function queryUserByEmail(email) {
    return await db.query(`SELECT * FROM users WHERE email=\'${email}\';`);
}

async function createUser(email, password) {
    return await db.query(`INSERT INTO users (email, password) VALUES (\'${email}\', \'${password}\');`);
}

module.exports = {
    queryUserByEmail: (email) => queryUserByEmail(email),
    createUser: (email, password) => createUser(email, password)
};
