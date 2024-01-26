const SUCCESS = 'SUCCESS';
const BAD_REQUEST = 'BAD_REQUEST';
const CONFLICT = 'CONFLICT';
const UNAUTHORIZED = 'UNAUTHORIZED';

const httpResponseMapper = (status) => {
  const mapper = {
    SUCCESS: 201,
    BAD_REQUEST: 400,
    CONFLICT: 409,
    UNAUTHORIZED: 401,
  };

  return mapper[status];
};

module.exports = {
  httpResponseMapper,
  SUCCESS,
  BAD_REQUEST,
  CONFLICT,
  UNAUTHORIZED,
};
