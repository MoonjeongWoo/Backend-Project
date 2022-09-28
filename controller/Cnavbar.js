const { isLogin } = require("./Cfunc");

exports.getMyPage = (req, res) => {
  if(req.session.uuid){
   res.render("myPage", { isLogin: isLogin(req.session.uuid) });
   }else{
    res.redirect('/');
   }
  // res.render("myPage");
};

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
        res.redirect("/myPage");
      }
    }
  });
};