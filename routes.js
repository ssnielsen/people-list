var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Person = require('./person.js');

app.use(bodyParser.json());

app.get('/persons', function(req, res) {
    Person.find(function(err, persons) {
        if (err) {
            res.status(403).json({
                'error': err
            });
        }

        res.json(persons);
    });
});

app.post('/persons', function(req, res) {
    var person = new Person(req.body);
    console.log(person);
    console.log(req.body);
    person.save(function(err, person) {
        if (err) {
            res.status(403).json({
                'error': err
            });
        }

        res.json(person);
    })
});

app.get('/persons/search/:query', function(req, res) {
    var query = {
        name: /req.param('query')/
    };

    Person.find(query, function(err, persons) {
        if (err) {
            res.status(403).json({
                'error': err
            });
        }
        
        res.json(persons);
    });
});

module.exports = app;