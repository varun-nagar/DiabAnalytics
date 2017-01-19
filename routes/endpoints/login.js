var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var GoogleAuth = require('google-auth-library');
var User = require('../../models/user'); // get our mongoose model
var config = require('../../config'); // get our config file

var method = function () {

    var verifyIdToken = function (token, cb) {
        var auth = new GoogleAuth;
        var client = new auth.OAuth2(config.client_id, '', '');
        client.verifyIdToken(
            token,
            config.client_id,
            function (e, login) {
                if (e) cb(e);
                var payload = login.getPayload();
                var userid = payload['sub'];
                cb(null, userid);
            });

    };

    var generateJwtToken = function (payload) {
        return new Promise(function (resolve, reject) {
            var token = jwt.sign({
                data: payload
            }, config.secret, { expiresIn: '24h' });
            resolve(token);
        });
    };

    var api = function (req, res, next) {
        var _user = req.body.user;
        // console.log(_user);
        if (_user) {
            //verify google user from google api.   
            verifyIdToken(_user.idToken, function (err, id) {

                if (id) {
                    User.findOne({ email: _user.email }, function (err, userObj) {
                        var loginRes = {};
                        if (err) { next(err); }
                        else if (!userObj) {
                            //save new user into db.
                            var newUser = new User({
                                name: _user.name,
                                email: _user.email,
                                imageUrl: _user.imageUrl,
                                userId: id,
                                accessToken: _user.idToken
                            });
                            newUser.save(function (err) {
                                if (err) res.status(500).send(err);
                                //call generate jwt
                                generateJwtToken({ email: _user.email, userId: id }).then(function (data) {
                                    loginRes.resCode = 0;
                                    loginRes.jwt = data;
                                    res.json(loginRes);
                                }, function (error) {
                                    res.status(500).send('token generation error');
                                });
                            });
                        } else {
                            if (userObj.profileComplete) {
                                loginRes.resCode = 1;
                            } else {
                                loginRes.resCode = 0;
                            }
                            //generate jwt and send response.
                            generateJwtToken({ email: _user.email, userId: id }).then(function (data) {
                                loginRes.jwt = data;
                                res.json(loginRes);
                            }, function (error) {
                                res.status(500).send('token generation error');
                            });
                        }
                    });
                } else {
                    res.status(401).send('not autherized');
                }
            });
        } else {
            res.status(400).send('missing body parameters');
        }
    };
    return {
        api: api
    };
};

module.exports = method;