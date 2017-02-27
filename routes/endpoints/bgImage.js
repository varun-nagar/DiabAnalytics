
var BgImage = require('../../models/bgImage'); // get our mongoose model

var method = function () {
    var api = function (req, res) {
        BgImage.findOne({ set_date: "27/02/2017" }, function (err, bgImg) {
            if (err) console.log("errr.....  " + err);
            res.json({
                imgUrl: (bgImg) ? bgImg.url : ""
            });

            //
            // if (!bgImg) {
            //     var newBgImage = new BgImage({
            //         set_date: "27/02/2017",
            //         url: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iLwW0x7XKLHM/v3/-1x-1.jpg"
            //     });
            //     newBgImage.save(function (err) {
            //         if (err) res.status(500).send(err);
            //         res.json({
            //             // imgUrl: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iLwW0x7XKLHM/v3/-1x-1.jpg"
            //             imgUrl: newBgImage.url
            //         });
            //     });
            // }
            //
        });
    };

    return {
        api: api
    }
};

module.exports = method;