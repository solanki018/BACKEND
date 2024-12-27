const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

router.get('/error', (req, res, next) => {
  const error = new Error('Simulated Error!');
  error.status = 400; // Assign a custom status code
  next(error); // Pass the error to the next middleware
});

module.exports = router;
