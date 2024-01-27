const { dashboardService } = require('../services');

const createPlayers = async (req, res) => {
  const { players } = req.body;
  const { user } = req.payload;
  const { status, data } = await dashboardService.createPlayers(players, user);
  return res.status(status).json(data);
};

const getAllPlayers = async (req, res) => {
  const { user } = req.payload;
  const { status, data } = await dashboardService.getAllPlayers(user);
  return res.status(status).json(data);
};

module.exports = {
  createPlayers,
  getAllPlayers,
};
