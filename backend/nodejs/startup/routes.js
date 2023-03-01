const express = require('express');
const products = require('../routes/products');
const users = require('../routes/users');
const auth = require('../routes/auth');
const test = require('../routes/test');
const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/products', products);
  app.use('/api/users', users);
  app.use('/api/auth', auth);
  app.use('/api/test', test);
  app.use(error);
}
