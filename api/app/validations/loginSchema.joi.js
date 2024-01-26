const Joi = require('joi');

const loginSchema = Joi.object({
  username: Joi.string().required().alphanum()
    .min(3)
    .max(20)
    .required(),
  password: Joi.string().min(5).max(20).required(),
});

module.exports = loginSchema;
