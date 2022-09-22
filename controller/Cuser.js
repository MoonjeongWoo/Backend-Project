const { User } = require("../model");


// get introduce page
exports.getIntroduce = (req, res) => {
    res.render("introduce");
}
// ----------------


// save introduce
exports.saveIntroudce = (req, res) => {
    User.create({
        uuid: req.session.uuid,
        stack: req.body.stack,
        career: req.body.career,
        portfolio: req.body.range,
        etc: req.body.etc
    }).then((result) => {
        // console.log(result)
    })  
}
// ----------------