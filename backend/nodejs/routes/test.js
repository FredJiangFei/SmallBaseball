const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.send('123');
});

module.exports = router;
