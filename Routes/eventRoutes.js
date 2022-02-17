'use strict';

const express = require('express');
const eventController = require('../Controllers/eventController');
const router = express.Router();

const {getEvents, getEvent} = eventController;

router.get('/events', getEvents);

router.get('/events/:id', getEvent)

module.exports = {
    routes: router
}