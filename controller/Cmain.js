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


// try login
exports.userLogin = (req, res) => {
    Main.userLogin(req.body, function (result, u_id) {

        if (result != 0) {
            if (!req.session.user) {
                req.session.user = u_id;
            }else{
                console.log('session 이미 있음')
            }
        }
        res.send(`number : ${req.session.user}`);
        // res.send({ result: result });
        console.log(req.session.id)
    })
}

// id exist check
exports.idCheck = (req, res) => {
    Main.idCheck (req.body, function(result){
        res.send(result);
        // result 값이 0이면 중복 id 없음, 1 이면 중복 아이디 있음
    });
}
