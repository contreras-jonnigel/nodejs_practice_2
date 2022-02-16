'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getEvents = async () => {
    try {
        let pool = await sql.connect(config.sql);
        // let pool = await sql.connect('Server=cueplatformdev.database.windows.net;Username=nodejsdb;Integrated Security=true;Trusted Connection=true;');
        const sqlQueries = await utils.loadSqlQueries('Events');
        const list = await pool.request().query(sqlQueries.eventsList);
        return list.recordset;
    } catch (error) {
        console.log(error);
        return error.message;
    }
}

module.exports = {
    getEvents
}