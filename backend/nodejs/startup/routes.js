const express = require('express');
const products = require('../routes/products');
const teams = require('../routes/teams');
const users = require('../routes/users');
const managers = require('../routes/managers');
const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/products', products);
  app.use('/api/teams', teams);
  app.use('/api/users', users);
  app.use('/api/managers', managers);
  app.use(error);
}
