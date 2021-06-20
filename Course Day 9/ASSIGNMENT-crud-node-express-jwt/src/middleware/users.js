const jwt = require('jsonwebtoken');

exports.validateUser = (req, res, next) => {
    if (req.headers && req.header.authorization) {
        jwt.verify(req.headers.authorization.split(' ')[1], req.app.get('secretKey'), (err, decoded) => {
            if (err) {
                res.locals.status = 401;
                res.locals.error = err.message || 'TOKEN NOT VALID!';
                next();
            } else {
                // add user id to request
                req.body.userId = decoded.id;
                next();
            }
        });
    } else {
        res.locals.status = 401;
        res.locals.error = 'NO AUTHORIZATION TOKEN PROVIDED';
        next();
    }
}
