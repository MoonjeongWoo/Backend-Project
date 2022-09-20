const User = require("../model/User")

// get introduce page
exports.getIntroduce = (req, res) => {
    res.render("introduce");
}
// ----------------

exports.saveIntroudce = (req, res) => {
    User.saveIntroudce(req.body, (data) => {
        res.send(data)
    })
}