const Joi = require('joi');

const signupSchema = Joi.object({
  email: Joi.string().email().max(50).required(),
  username: Joi.string().required().alphanum()
    .min(3)
    .max(20)
    .required(),
  password: Joi.string().min(5).max(20).required(),
});

module.exports = signupSchema;
