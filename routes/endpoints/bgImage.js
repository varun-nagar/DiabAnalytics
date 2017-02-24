
var bgImage = require('../../models/bgImage'); // get our mongoose model

var method = function () {
    var api = function (req, res) {
        res.json({
            imgUrl: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iLwW0x7XKLHM/v3/-1x-1.jpg"
        });
    };

    return {
        api: api
    }
};

module.exports = method;