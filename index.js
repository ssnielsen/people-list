var mongoose = require('mongoose');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Add middleware
var middleware = require('./middleware/middleware');
middleware(app)

// Add routes
var routes = require('./routes/routes');
routes(app)

mongoose.connect('mongodb://localhost/people-list');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to db")

    // Start web server
    app.listen(3000, function() {
        console.log("Server started");
    });
});