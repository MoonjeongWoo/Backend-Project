const exp = require("constants");
const Main = require("../model/Main");

// get main page
exports.getMain = (req, res) => {
    res.render("main");
}
// -------------------------------

// get login page
exports.getLogin = (req, res) => {
    res.render("login");
}
// -------------------------------

// get joinmember page
exports.getJoinMember = (req, res) => {
    res.render("joinmember");
}
// -------------------------------

// save join member data in db
exports.postJoinMember = (req, res) => {
    console.log(req.body);
    Main.postJoinMember(req.body, function(result){
        res.send(true);
    });
}
// -------------------------------