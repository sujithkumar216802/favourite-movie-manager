// const db = require('./db');

// async function saveToken(email, token) {
//     return await db.query(`INSERT INTO user_tokens (email, token) VALUES (\'${email}\', \'${token}\');`);
// }

// async function checkToken(email, token) {
//     return (await db.query(`SELECT * FROM user_tokens WHERE email=\'${email}\' AND token=\'${token}\';`)).rowCount > 0;
// }

// async function deleteToken(token) {
//     return await db.query(`DELETE FROM user_tokens WHERE token=\'${token}\'`);
// }

// module.exports = {
//     saveToken: (email, token) => saveToken(email, token),
//     checkToken: (email, token) => checkToken(email, token),
//     deleteToken: (token) => deleteToken(token)
// };
