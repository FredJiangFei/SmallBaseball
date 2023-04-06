const { User } = require('../models/user');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User already registered.');

  req.body.role = 'Manager';
  req.body.password = '123456';

  user = await User.add(req.body);

  res.send({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  });
});

router.get('/', async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

router.delete('/:id', async (req, res) => {
  const user = await User.findByIdAndRemove(req.params.id);
  if (!user)
    return res.status(404).send('The user with the given ID was not found.');

  res.send(user);
});

module.exports = router;
