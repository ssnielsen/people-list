var headers = function(app) {
    app.use(function(req, res, next){
        var contentType = req.headers["content-type"];
        if(contentType === undefined || contentType.indexOf('application/json') == -1) {
            res.status(403).json({
                'error': 'Content-Type must be application/json'
            });
            res.send();
        } else {
           next();
        }

    });
}

module.exports = headers;