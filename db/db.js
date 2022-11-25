const { Pool } = require('pg');
const config = require('../config.json');

const pool = new Pool({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});

pool.on('error', () => {
    console.log('db error');
    process.exit(-1);
});

pool.on('connect', () => {
    console.log('db connected');
});

module.exports = pool;
