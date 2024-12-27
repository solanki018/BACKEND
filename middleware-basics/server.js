const express = require('express');
const logger = require('./middleware/logger');
const timer = require('./middleware/timer');
const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about');
const profileRoute = require('./routes/profile');

const app = express();
const PORT = 3000;

// Global Middleware
app.use(logger); // Logs all incoming requests
app.use(timer);  // Measures request processing time

// Route Middleware
app.use('/', homeRoute);         // Home route
app.use('/about', aboutRoute);   // About route
app.use('/profile', profileRoute); // Profile route with authentication


const errorHandler = require('./middleware/errorHandler'); // Import error handler
// Error-Handling Middleware
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
