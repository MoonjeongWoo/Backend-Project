const { UserInfo } = require("../model");
const { CompanyInfo } = require("../model");
const { isLogin } = require("./Cfunc");

// get main page
exports.getMain = (req, res) => {
  res.render("main", { isLogin: isLogin(req.session.uuid) });
};
// -------------------------------

// get joinmember page
exports.getJoinMember = (req, res) => {
  res.render("joinMember", { isLogin: isLogin(req.session.uuid) });
};
// -------------------------------

// get joinmember page _ Corp
exports.getJoinMemberCompany = (req, res) => {
  res.render("joinMemberCompany", { isLogin: isLogin(req.session.uuid) });
};
// -------------------------------

// get MyPage page
// exports.getMyPage = (req, res) => {
//   res.render("myPage");
// };
// -------------------------------


// save join member data in db
exports.postJoinMember = (req, res) => {
  UserInfo.create({
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
    email: req.body.email,
    location: req.body.location,
  }).then((result) => {
    console.log(result);
  });
};
// -------------------------------


// save join member data in db (기업 회원)
exports.postJoinMemberCompany = (req, res) => {
  CompanyInfo.create({
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
    email: req.body.email,
    location: req.body.location,
  }).then((result) => {
    console.log(result);
  });
};
// -------------------------------


// try login
exports.userLogin = (req, res) => {
  UserInfo.findAll({
    attributes: ["uuid"],
    where: {
      id: req.body.id,
      pw: req.body.pw,
    },
  }).then((result) => {
    if (result[0] != undefined) {
      if (!req.session.uuid) {
        req.session.uuid = result[0]["dataValues"].uuid;
        res.redirect('/')
      }
    }
  });
};

// try login (기업 회원)
exports.userLoginCompany = (req, res) => {
  CompanyInfo.findAll({
    attributes: ["uuid"],
    where: {
      id: req.body.id,
      pw: req.body.pw,
    },
  }).then((result) => {
    if (result[0] != undefined) {
      if (!req.session.uuid) {
        req.session.uuid = result[0]["dataValues"].uuid;
      }
    }
  });
};

// logout
exports.userLogout = (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.redirect("/"); // res.redirect('/public/login.ejs');
  });
};
