const express = require('express');

const registerController = require('../controllers/register.controller');

const route = express.Router();

route.post('/register', registerController.register);

module.exports = route;
