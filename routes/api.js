var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config'); // get our config file

//open apis.
router.post('/login', require('./endpoints/login.js')().api);
router.get('/BgImage', require('./endpoints/bgImage.js')().api);

//auth checker middleware.
router.use(function (req, res, next) {
    var token = req.get('Authorization') || '';

    jwt.verify(token, config.secret, function (err, decoded) {
        if (err) res.status(401).send('Access Denied');
        console.log(decoded.data);

        req.email = decoded.data.email;
        next()
    });
});

//secure apis.
router.post('/fillprofile', require('./endpoints/fillprofile.js')().api);


module.exports = router;