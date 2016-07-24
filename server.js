var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

// Require Routes js
var routesTodo = require('./routes/todo');

// Serve static files
app.use(express.static(__dirname + '/'));

// Page Routes
app.use('/', routesTodo);

// View Engine To ejs
app.set('view engine', 'ejs');

// Serve your app
console.log('Served: http://localhost:' + port);
app.listen(port);