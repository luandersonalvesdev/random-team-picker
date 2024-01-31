const { httpResponseMapper, SUCCESS } = require('../utils/httpResponseMapper');

const getUser = (req, res) => {
  const { user } = req.payload;
  return res.status(httpResponseMapper(SUCCESS)).json({ data: user });
};

module.exports = {
  getUser,
};
