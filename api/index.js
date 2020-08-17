const express = require('express')

// Create express instance
const app = express()

// Add some modules
var session = require('express-session');

//require('./connections/mysql')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret : 'keyboard cat',
  resave : true,
  saveUninitialized:true
}))

// Require API routes
const indexRouter = require('./routes/index');
const users = require('./routes/users');
const articleRouter = require('./routes/article');

// Import API Routes
app.use("/users", users)
app.use("/article", articleRouter);

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
