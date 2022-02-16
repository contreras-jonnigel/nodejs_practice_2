'use strict';

const express = require('express');
const eventController = require('../Controllers/eventController');
const router = express.Router();

const {getEvents} = eventController;

router.get('/events', getEvents);

module.exports = {
    routes: router
}