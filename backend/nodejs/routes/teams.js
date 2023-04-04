const { Team } = require('../models/team');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const teams = await Team.find({});
  res.send({
    data: teams
  });
});

router.post('/', async (req, res) => {
  let team = await Team.add(req.body);
  res.send(team);
});

router.delete('/:id', async (req, res) => {
  const team = await Team.findByIdAndRemove(req.params.id);

  if (!team)
    return res.status(404).send('The team with the given ID was not found.');

  res.send(team);
});

module.exports = router;
