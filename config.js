'use strict';
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const { PORT, HOST, HOST_URL, SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_SERVER, SQL_DATABASE_PORT } = process.env;

const sqlEncrypt = process.env.ENCRYPT === "true";

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
        user: SQL_USER,
        password: SQL_PASSWORD,
        database: SQL_DATABASE,
        server: SQL_SERVER,
        // port: SQL_DATABASE_PORT,        
        options: {
            encrypt: true,
            enableArithAbort: true
        }
    }
}