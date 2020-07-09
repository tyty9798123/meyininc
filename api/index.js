const express = require('express')

// Create express instance
const app = express()

// Add some modules
var session = require('express-session');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret : 'keyboard cat',
  resave : true,
  saveUninitialized:true
}))

// Require API routes
const indexRouter = require('./routes/index');
const users = require('./routes/users')

// Import API Routes
app.use(users)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
