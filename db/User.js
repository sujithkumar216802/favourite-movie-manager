const db = require('./db');

async function queryUserByEmail(email) {
    return await db.query(`SELECT * FROM users WHERE email=$1;`, [email]);
}

async function createUser(email, password) {
    return await db.query(`INSERT INTO users (email, password) VALUES ($1, $2);`, [email, password]);
}

module.exports = {
    queryUserByEmail: (email) => queryUserByEmail(email),
    createUser: (email, password) => createUser(email, password)
};
