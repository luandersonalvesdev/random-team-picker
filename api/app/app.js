const express = require('express');
const { signupRoute, loginRoute } = require('./routes');

const app = express();

app.get('/', (_req, res) => {
  res.send('Server are healthy!');
});

app.use(express.json());

app.use('/signup', signupRoute);
app.use('/login', loginRoute);

module.exports = app;
