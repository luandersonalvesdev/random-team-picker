const express = require('express');
const { signupController } = require('../controllers');

const route = express.Router();

route.post('/', signupController.doSignup);

module.exports = route;
