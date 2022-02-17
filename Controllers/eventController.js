'use strict';

const eventData = require('../Data/Events');

const getEvents = async(req, res, next) => {
    try{
        const events = await eventData.getEvents();
        res.send(events);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getEvent = async(req, res, next) => {
    try{
        const eventId = req.params.id;
        const event = await eventData.getById(eventId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addEvent = async(req, res, next) => {
    try {
        const data = req.body;
        await eventData.createEvent(data);
        res.send(`The ${data.eventTitle.toString()} event has been created successfully.`);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateEvent = async(req, res, next) => {
    try {
        const eventId = req.params.id;
        const data = req.body;        
        await eventData.updateEvent(eventId, data);
        res.send(`The ${data.eventTitle.toString()} event with ID number ${eventId} has been updated successfully.`);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteEvent = async(req, res, next) => {
    try {
        const eventId = req.params.id;
        await eventData.deleteEvent(eventId);
        res.send(`The event with ID number ${eventId} has been deleted successfully.`);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getEvents,
    getEvent,
    addEvent,
    updateEvent,
    deleteEvent
}