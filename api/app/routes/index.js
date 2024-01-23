const express = require('express');

const routes = express();

routes.use(express.json());

routes.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = routes;