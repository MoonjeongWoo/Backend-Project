const Main = require("../model/Main");

// get joinmember page
exports.getJoinMember = (req, res) => {
    res.render("joinmember");
}
// -------------------------------

exports.postJoinMember = (req, res) => {
    console.log(req.body);
    Main.postJoinMember(req.body, function(result){
        res.send(true);
    });
}
