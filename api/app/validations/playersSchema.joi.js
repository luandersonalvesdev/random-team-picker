const Joi = require('joi');

const playersSchema = Joi.object({
  players: Joi.array().items(Joi.string().min(1).max(50).required()).required(),
});

const playerSchema = Joi.object({
  name: Joi.string().min(1).max(50).required(),
});

module.exports = { playersSchema, playerSchema };
