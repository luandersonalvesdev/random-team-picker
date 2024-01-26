const { loginService } = require('../services');

const doLogin = async (req, res) => {
  const { username, password } = req.body;
  const { status, data } = await loginService.doLogin(username, password);
  return res.status(status).json(data);
};

module.exports = {
  doLogin,
};
