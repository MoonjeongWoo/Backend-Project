const { UserInfo } = require("../model");
const { CompanyInfo } = require("../model");
const { isLogin } = require("./Cfunc");

// get main page
exports.getMain = (req, res) => {
  console.log('this', isLogin(req.session.uuid) )
  console.log('gogo1', req.session.uuid);
  
  res.render("main", { isLogin: isLogin(req.session.uuid) });
};
// -------------------------------

// get login page
exports.getLogin = (req, res) => {
  res.render("login", { isLogin: isLogin(req.session.uuid) });
  // res.render("login", {isLogin: isLogin});
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
        console.log('login sucess', req.session.uuid)
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
    if (req.session) {
      req.session.destroy(function (err) {
        if (err) {
          throw err;
        }
        res.redirect("/");
      });
    } else {
      // console.log('로그인 상태 아님1');
      // res.redirect('/');
    }
  }
};
