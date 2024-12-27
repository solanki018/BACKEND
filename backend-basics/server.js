// Import the Express library
const express = require('express');

// Create an Express application
const app = express();

// Define a port number
const PORT = 3000;

// Define a basic route
{/*
Defines a route for the server.
'/' is the root URL of the server.
req (request) contains client data, and res (response) is what the server sends back.*/
}






app.get('/', (req, res) => {
  res.send('Hello, World!');
});

{/*
// Importing route files
const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');
const userRoute = require('./routes/user');

// Using the routes
app.use('/', homeRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);
app.use('/user', userRoute);*/
}



// Use the router for handling all routes
app.use(router);






// part 2:
// About route
app.get('/about', (req, res) => {
    res.send('This is the About Page.');
  });
  
  // Contact route
  app.get('/contact', (req, res) => {
    res.send('This is the Contact Page.');
  });
  
  // Handling dynamic routes
  app.get('/user/:username', (req, res) => {
    const username = req.params.username; // Extract username from URL
    res.send(`Hello, ${username}!`);
  });


  

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


//this is the file for the server routing and handling the routes