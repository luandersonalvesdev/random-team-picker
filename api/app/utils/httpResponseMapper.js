const SUCCESS = 'SUCCESS';
const BAD_REQUEST = 'BAD_REQUEST';
const CONFLICT = 'CONFLICT';

const httpResponseMapper = {
  SUCCESS: 201,
  BAD_REQUEST: 400,
  CONFLICT: 409,
};

module.exports = {
  httpResponseMapper,
  SUCCESS,
  BAD_REQUEST,
  CONFLICT,
};
