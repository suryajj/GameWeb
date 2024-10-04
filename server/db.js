const Pool = require("pg").Pool;

require('dotenv').config()


const pool = new Pool({
    user: process.env.PostgresUser,
    password: process.env.PostgresPassword,
    host: process.env.PostgresHost,
    port: process.env.PostgresPort,
    database: process.env.PostgresDatabase
});


module.exports = pool;