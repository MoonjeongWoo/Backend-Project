const { UserInfo, CompanyInfo } = require("../model");
const { checkLogin, userPic, strToSha256 } = require("./Cfunc");

// get main page
exports.getMain = async (req, res) => {
  var data = {};
  var userPicUrl = await userPic(req.session.uuid);
  var isLogin = checkLogin(req.session.uuid);

  if (userPicUrl != undefined){
    data["username"] = userPicUrl.name;
    data["userPicUrl"] = userPicUrl.userPic;
    data["isLogin"] = isLogin;
  }else{
    data["isLogin"] = isLogin;
  }
  res.render("main", { data: data });
};
// -------------------------------

// try login
exports.userLogin = (req, res) => {
  pw = strToSha256(req.body.id, req.body.pw);
  UserInfo.findAll({
    attributes: ["uuid"],
    where: {
      id: req.body.id,
      pw: pw,
    },
  }).then((result) => {
    if (result[0] != undefined) {
      if (!req.session.uuid) {
        req.session.uuid = result[0]["dataValues"].uuid;
        res.send({ login: 1 });
      }
    } else {
      res.send({ login: 0 });
    }
  });
};

// try login (기업 회원)
exports.userLoginCompany = (req, res) => {
  pw = strToSha256(req.body.id, req.body.pw);
  CompanyInfo.findAll({
    attributes: ["uuid"],
    where: {
      id: req.body.id,
      pw: pw,
    },
  }).then((result) => {
    if (result[0] != undefined) {
      if (!req.session.uuid) {
        req.session.uuid = result[0]["dataValues"].uuid;
        res.send({ login: 3 });
      } else {
        res.send({ login: 4 });
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
