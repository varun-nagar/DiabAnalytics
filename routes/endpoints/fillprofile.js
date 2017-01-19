
var User = require('../../models/user'); // get our mongoose model

var method = function () {
    var api = function (req, res) {
        //check if user exist in db.
        //if exist update profile values.
        var newUser = new User();
        newUser.dob = req.body.dob || '';
        newUser.phone = req.body.phone || '';
        newUser.diabType = req.body.diabType || '';
        console.log("in fill profile api");
        delete newUser['_id'];
        User.findOneAndUpdate({ email: req.body.email }, { dob: newUser.dob, phone: newUser.phone, diabType: newUser.diabType }, function (err, user) {
            if (err) return res.status(500).send('Server Error ' + err);
            // console.log("got user " + user);

            // we have the updated user returned to us  profileComplete
            if (newUser.dob !== '' && newUser.phone !== '' && newUser.diabType !== '') {
                user.update({ profileComplete: true }, function (err) {
                    res.json({ resCode: 1, msg: 'user updated' });
                });
            } else {
                res.json({ resCode: 1, msg: 'user updated' });
            }
        });
    };

    return {
        api: api
    }
};

module.exports = method;