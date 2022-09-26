const { UserInfo } = require("../model");
const { CompanyInfo } = require("../model");

// get main page
exports.getMain = (req, res) => {
  res.render("main");
};
// -------------------------------

// get login page
exports.getLogin = (req, res) => {
  res.render("new_login");
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