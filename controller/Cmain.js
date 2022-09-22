const { Main } = require("../model");

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
  Main.create({
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
  Main.findAll({
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

// id 중복 확인
exports.idCheck = (req, res) => {
  Main.findAll({
    attributes: ['id'],
    where: {
      id: req.body.id
    }
  }).then((result) => {
    // exist 1 no exist 0 
    if (result[0] != undefined) {
      res.send({result: 1})
    }else{
      res.send({result: 0})
    }
  })
}
