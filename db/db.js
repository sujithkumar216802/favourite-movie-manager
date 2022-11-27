const { Pool } = require('pg');
const config = require('../config.json');

const pool = new Pool({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});

pool.on('error', (err) => {
    console.error('Error Occured in DB', err);
    process.exit(-1);
});

pool.on('connect', () => {
    console.log('DB Connected');
});

module.exports = pool;
