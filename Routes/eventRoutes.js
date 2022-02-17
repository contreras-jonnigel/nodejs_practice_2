'use strict';

const express = require('express');
const eventController = require('../Controllers/eventController');
const router = express.Router();

const {getEvents, getEvent, addEvent} = eventController;

router.get('/events', getEvents);

router.get('/events/:id', getEvent);

router.post('/events', addEvent);

module.exports = {
    routes: router
}