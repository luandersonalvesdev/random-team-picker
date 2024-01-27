const express = require('express');
const { signupRoute, loginRoute, dashboardRoute } = require('./routes');

const app = express();

app.get('/', (_req, res) => {
  res.send('Server are healthy!');
});

app.use(express.json());

app.use('/signup', signupRoute);
app.use('/login', loginRoute);
app.use('/dashboard', dashboardRoute);

module.exports = app;
