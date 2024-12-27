const express = require('express');
const router = express.Router();


router.get('/:username',  (req, res) => {
  const username = req.params.username;
  res.send(`Hello, ${username}! This is your profile.`);
});

module.exports = router;
