var Person = require('../models/person.js');

persons = function(app) {
    
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
        console.log(JSON.stringify(person));
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

    app.get('/persons/search/:name', function(req, res) {
        var query = {
            name: new RegExp(req.params['name'], 'i')
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

}
module.exports = persons;