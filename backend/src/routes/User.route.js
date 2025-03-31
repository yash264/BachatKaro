const express = require('express');

const UserRoute = express.Router();

const { register } = require('../controller/User.controller');

UserRoute.post('/register', register);

module.exports = UserRoute ;