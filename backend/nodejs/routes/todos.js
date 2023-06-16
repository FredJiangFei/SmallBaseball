const { Todo } = require('../models/todo');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.get('/', [auth], async (req, res) => {
  const todos = await Todo.find({});
  res.send({
    value: todos,
  });
});

router.post('/', [auth], async (req, res) => {
  let todo = await Todo.add(req.body);
  res.send(todo);
});

router.delete('/:id', [auth, admin], async (req, res) => {
  const todo = await Todo.findByIdAndRemove(req.params.id);

  if (!todo)
    return res.status(404).send('The todo with the given ID was not found.');

  res.send(todo);
});

module.exports = router;
