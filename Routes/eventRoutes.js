'use strict';

const express = require('express');
const eventController = require('../Controllers/eventController');
const router = express.Router();

const {getEvents, getEvent, addEvent, updateEvent, deleteEvent} = eventController;

router.get('/events', getEvents);

router.get('/events/:id', getEvent);

router.post('/events', addEvent);

router.put('/events/:id', updateEvent);

router.delete('/events/:id', deleteEvent)

module.exports = {
    routes: router
}