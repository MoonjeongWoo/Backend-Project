const exp = require("constants");
const Main = require("../model/Main");

// get main page
exports.getMain = (req, res) => {
  res.render("main");
};
// -------------------------------

// get login page
exports.getLogin = (req, res) => {
  res.render("login");
};
// -------------------------------

// get joinmember page
exports.getJoinMember = (req, res) => {
  res.render("joinmember");
};
// -------------------------------

// save join member data in db
exports.postJoinMember = (req, res) => {
  Main.postJoinMember(req.body, function (result) {
    res.send(result);
  });
};
// -------------------------------

// user try login
exports.userLogin = (req, res) => {
  Main.userLogin(req.body, function (result, u_id) {
    console.log(result);

    console.log(req.session);
    if (result != 0) {
      if (!req.session.user) {
        req.session.user = u_id;
      }
    }
    console.log("----------------");
    console.log(req.session);
    res.send(`number : ${req.session.user}`);
    // res.send({ result: result });
  });
};

exports.idCheck = (req, res) => {
  console.log(req.body);
  Main.idCheck(req.body, function (result) {
    res.send(result);
    // result 값이 0이면 중복 id 없음, 1 이면 중복 아이디 있음
  });
};
