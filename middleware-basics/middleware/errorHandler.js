// middleware/errorHandler.js

function errorHandler(err, req, res, next) {
    console.error(`[Error] ${err.message}`); // Log the error for debugging
  
    res.status(err.status || 500).json({
      success: false,
      message: err.message || 'Something went wrong!',
      stack: process.env.NODE_ENV === 'development' ? err.stack : {}, // Hide stack in production
    });
  }
  
  module.exports = errorHandler;
  