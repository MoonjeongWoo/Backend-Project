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

exports.idCheck = (req, res) => {
    console.log(req.body);
    Main.idCheck (req.body, function(result){
        res.send(result);
        // result 값이 0이면 중복 id 없음, 1 이면 중복 아이디 있음
    });
}