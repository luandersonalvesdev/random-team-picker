const express = require('express');
const { signupRoute } = require('./routes');

const app = express();

app.get('/', (_req, res) => {
  res.send('Server are healthy!');
});

app.use(express.json());

app.use('/signup', signupRoute);

module.exports = app;
