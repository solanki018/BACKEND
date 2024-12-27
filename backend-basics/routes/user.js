const express = require('express');
const router = express.Router();

router.get('/:username', (req, res) => {
  const username = req.params.username; // Extract username from URL
  res.send(`Hello, ${username}!`);
});

module.exports = router;
