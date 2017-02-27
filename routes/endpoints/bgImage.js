
var BgImage = require('../../models/bgImages'); // get our mongoose model

var getFormatedDate = function () {
    var today = new Date();
    var dd = today.getDate();
    //The value returned by getMonth is an integer between 0 and 11, referring 0 to January, 1 to February, and so on.
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }
    today = dd + '/' + mm + '/' + yyyy;
    return today;
};

var method = function () {
    var api = function (req, res) {
        BgImage.findOne({ set_date: getFormatedDate() }, function (err, bgImg) {
            if (err) console.log("errr.....  " + err);
            res.json({
                imgUrl: (bgImg) ? bgImg.url : ""
            });

            //
            // if (!bgImg) {
            //     var newBgImage = new BgImage({
            //         set_date: "28/02/2017",
            //         url: "http://www.active.com/Assets/Women/460+x+345/30-Minute-Run.jpg"
            //     });
            //     newBgImage.save(function (err) {
            //         if (err) res.status(500).send(err);
            //         res.json({
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