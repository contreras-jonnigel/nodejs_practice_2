'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getEvents = async () => {
    try {
        let pool = await sql.connect(config.sql);
        
        const sqlQueries = await utils.loadSqlQueries('Events');
        const list = await pool.request().query(sqlQueries.eventsList);
        return list.recordset;
    } catch (error) {
        console.log(error);
        return error.message;
    }
}

const getById = async (eventId) => {
    try {
        let pool = await sql.connect(config.sql);

        const sqlQueries = await utils.loadSqlQueries('Events');
        const oneEvent = await pool.request()
                        .input('eventId', sql.Int, eventId)
                        .query(sqlQueries.eventById);
        return oneEvent.recordset;

    } catch (error) {
        return error.message;
    }
}

const createEvent = async (eventData) => {
    try {
        let pool = await sql.connect(config.sql);

        const sqlQueries = await utils.loadSqlQueries('Events');
        const createEvent = await pool.request()
                            .input('eventTitle', sql.NVarChar(100), eventData.eventTitle)
                            .input('eventDescription', sql.NVarChar(1500), eventData.eventDescription)
                            .input('startDate', sql.Date, eventData.startDate)
                            .input('endDate', sql.Date, eventData.endDate)
                            .input('avenue', sql.NVarChar(200), eventData.avenue)
                            .input('maxMembers', sql.Int, eventData.maxMembers)
                            .query(sqlQueries.createEvent);
        return createEvent.recordset;

    } catch (error) {
        return error.message;
    }
}

const updateEvent = async (eventId, eventData) => {
    try {
        let pool = await sql.connect(config.sql);

        const sqlQueries = await utils.loadSqlQueries('Events');
        const update = await pool.request()
                            .input('eventId', sql.Int, eventId)
                            .input('eventTitle', sql.NVarChar(100), eventData.eventTitle)
                            .input('eventDescription', sql.NVarChar(1500), eventData.eventDescription)
                            .input('startDate', sql.Date, eventData.startDate)
                            .input('endDate', sql.Date, eventData.endDate)
                            .input('avenue', sql.NVarChar(200), eventData.avenue)
                            .input('maxMembers', sql.Int, eventData.maxMembers)
                            .query(sqlQueries.updateEvent);
        return update.recordset;

    } catch (error) {
        console.log(error);
        return error.message;
    }
}

const deleteEvent = async (eventId) => {
    try {
        let pool = await sql.connect(config.sql);

        const sqlQueries = await utils.loadSqlQueries('Events');
        const deleteEvent = await pool.request()
                            .input('eventId', sql.Int, eventId)
                            .query(sqlQueries.deleteEvent);
        return deleteEvent.recordset;

    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getEvents,
    getById,
    createEvent,
    updateEvent,
    deleteEvent
}