const express = require('express');
const { dashboardController } = require('../controllers');
const { jwtValidation } = require('../middlewares/jwtValidation');

const route = express.Router();

route.get('/player', jwtValidation, dashboardController.getAllPlayers);
route.post('/player', jwtValidation, dashboardController.createPlayers);
route.patch('/player/:id', jwtValidation, dashboardController.updatePlayer);

module.exports = route;
