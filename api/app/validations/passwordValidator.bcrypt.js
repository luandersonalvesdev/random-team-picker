const bcrypt = require('bcrypt');

const saltRounds = Number(process.env.SALT_ROUNDS) || 10;

const generateHashPass = (password) => bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error(`Error generating hash: ${err}`);
    return null;
  }
  return hash;
});

const validateHashPass = (pass, hashedPass) => bcrypt.compare(pass, hashedPass, (err, result) => {
  if (err) {
    console.error(`An error occurred when comparing passwords: ${err}`);
  }
  return result;
});

module.exports = {
  generateHashPass,
  validateHashPass,
};
