const express = require('express');
const cors = require('cors');
const { signupRoute, loginRoute, dashboardRoute } = require('./routes');

const app = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (_req, res) => {
  res.send('Server are healthy!');
});

app.use('/signup', signupRoute);
app.use('/login', loginRoute);
app.use('/dashboard', dashboardRoute);

module.exports = app;
