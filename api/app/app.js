const express = require('express');

const app = express();

app.get('/', (_req, res) => {
  res.send('Server are healthy!');
});

app.use(express.json());

module.exports = app;
