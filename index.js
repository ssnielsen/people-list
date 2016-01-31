var mongoose = require('mongoose');
var api = require('./routes.js');

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to db")

    // Start web server
    api.listen(3000, function() {
        console.log("Server started");
    });
});