const { UserInfo } = require("../model");
const { CompanyInfo } = require("../model");

const check = (para) => {
  let isOk = false;
  if (para != undefined) {
    isOk = true;
  }
  return isOk;
};

// get main page
exports.getMain = (req, res) => {
  res.render("main", { isOk: check(req.session.uuid) });
};
// -------------------------------

// get login page
exports.getLogin = (req, res) => {
  res.render("login", { isOk: check(req.session.uuid) });
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
    location: req.body.location,
  }).then((result) => {
    console.log(result);
  });
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
    attributes: ["uuid"],
    where: {
      id: req.body.id,
      pw: req.body.pw,
    },
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

// logout
// exports.userLogout = async (req, res) => {
//   var session = req.session;
//   try {
//     if (session.user) {
//       await req.session.destroy((err)=>{
//         if(err)
//         console.log(err)
//         else {
//           res.redirect("/");
//         }
//       })
//     }
//   }
//   catch (e) {
//     console.log(e)
//   }
//   res.redirect("/");
exports.userLogout = (req, res) => {
  // console.log('/process/logout 호출됨1');
  // console.log("세션값1", req.session);

  if (req.session) {
    // console.log("로그아웃");
    // console.log("세션값2", req.session);

    req.session.destroy((err) => {
      if (err) throw err;
      // console.log('세션 삭제하고 로그아웃됨');
      // console.log("세션값3", req.session);
      res.redirect("/"); // res.redirect('/public/login.html');
    });
  } else {
    // console.log('로그인 상태 아님1');
    // res.redirect('/');
  }
};
