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

const updatePlayer = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const { status, data } = await dashboardService.updatePlayer(Number(id), name);
  return res.status(status).json(data);
};

const deletePlayer = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await dashboardService.deletePlayer(Number(id));
  return res.status(status).json(data);
};

module.exports = {
  createPlayers,
  getAllPlayers,
  updatePlayer,
  deletePlayer,
};
