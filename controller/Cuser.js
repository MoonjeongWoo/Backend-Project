const User = require("../model/User")

// get introduce page
exports.getIntroduce = (req, res) => {
    res.render("introduce");
}
// ----------------

// save introduce
exports.saveIntroudce = (req, res) => {
    User.saveIntroudce(req, (data) => {
        res.send(data)
    })
}
// ----------------