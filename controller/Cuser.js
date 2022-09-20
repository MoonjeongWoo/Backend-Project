const user = require("../model/User")

// get introduce page
exports.getIntroduce = (req, res) => {
    res.render("introduce");
}
// ----------------