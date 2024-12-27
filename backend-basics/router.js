const express = require('express');

// Importing individual route files
const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');
const userRoute = require('./routes/user');

// Create a router object
const router = express.Router();

// Define route paths and their handlers
router.use('/', homeRoute);
router.use('/about', aboutRoute);
router.use('/contact', contactRoute);
router.use('/user', userRoute);

module.exports = router;
