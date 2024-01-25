const { signupService } = require('../services');

const doSignup = async (req, res) => {
  const { email, username, password } = req.body;
  const { status, data } = await signupService.doSignup(email, username, password);
  return res.status(status).json(data);
};

module.exports = {
  doSignup,
};
