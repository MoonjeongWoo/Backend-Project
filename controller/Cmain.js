const { UserInfo } = require("../model");
const { CompanyInfo } = require("../model");

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
  res.render("joinMember");
};
// -------------------------------

// get joinmember page _ Corp
exports.getJoinMemberCompany = (req, res) => {
  res.render("joinMemberCompany");
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
    location: req.body.location
  }).then((result) => {
    console.log(result)
  })
};
// -------------------------------

// save join member data in db (기업 회원)
exports.postJoinMemberCompany = (req, res) => {
  CompanyInfo.create({
    // uuid: "unhex(replace(uuid(),'-',''))",
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
    email: req.body.email,
    location: req.body.location
  }).then((result) => {
    console.log(result)
  })
};
// -------------------------------


// try login
exports.userLogin = (req, res) => {
  UserInfo.findAll({
    attributes: ['uuid'],
    where: {
      id: req.body.id,
      pw: req.body.pw
    }
  }).then((result) => {
    if (result[0] != undefined) {
      if (!req.session.user) {
        req.session.uuid = result[0]["dataValues"].uuid;
      }
      var data = { result: 1 };
    } else {
      var data = { result: 0 };
    }

    // login success return 1 fail return 0 
    res.send(data);
  });
};


// try login (기업 회원)
exports.userLoginCompany = (req, res) => {
  CompanyInfo.findAll({
    attributes: ['uuid'],
    where: {
      id: req.body.id,
      pw: req.body.pw
    }
  }).then((result) => {
    if (result[0] != undefined) {
      if (!req.session.user) {
        req.session.uuid = result[0]["dataValues"].uuid;
      }
      var data = { result: 1 };
    } else {
      var data = { result: 0 };
    }
    // login success return 1 fail return 0 
    res.send(data);
  });
};