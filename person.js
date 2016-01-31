var mongoose = require('mongoose');

var personSchema = mongoose.Schema({
    name: String,
    email: Array,
    department: String,
    team: String
});

var person = mongoose.model('Person', personSchema);

module.exports = person;