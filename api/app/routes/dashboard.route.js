const express = require('express');
const { dashboardController } = require('../controllers');
const { jwtValidation } = require('../middlewares/jwtValidation');

const route = express.Router();

route.post('/player', jwtValidation, dashboardController.createPlayers);

module.exports = route;
