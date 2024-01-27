const Joi = require('joi');

const playersSchema = Joi.object({
  players: Joi.array().items(Joi.string().required()).required(),
});

module.exports = playersSchema;
