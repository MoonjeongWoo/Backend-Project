const { checkLogin, userPic } = require("./Cfunc");
const { UserInfo } = require("../model");

exports.getMyPage = (req, res) => {
  if (req.session.uuid) {
    UserInfo.findAll({
      where: {
        uuid: req.session.uuid
      }
    }).then(async (result) => {
      var userPicUrl = await userPic(req.session.uuid);
      // console.log(userPicUrl)
      userPicUrl = userPicUrl.userPic;

      var data = {
        id: result[0].dataValues.id,
        pw: result[0].dataValues.pw,
        name: result[0].dataValues.name,
        email: result[0].dataValues.email,
        location: result[0].dataValues.location,
        userPicUrl: userPicUrl,
        isLogin: checkLogin(req.session.uuid),
      }

      res.render("myPage", { data: data });
    })
  } else {
    res.redirect('/');
  }
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