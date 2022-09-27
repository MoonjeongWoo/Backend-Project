const { UserInfo } = require("../model");
const { CompanyInfo } = require("../model");

exports.getCompany = (req, res) => {
  if (req.session.uuid !== undefined) {
    res.render("company");
  } else {
    res.redirect("/");
  }

  //res.render("company");
  /*세션값이 있는지 먼저 검사 하고,
    없으면 메인 페이지로 돌아가서,
    로그인 유도
  */
};

// 요소 선택시 해당하는 사람 출력
exports.sortUserByElement = (req, res) => {
  console.log(req.body);
  // var element = req.body.elements.split('|');
  // for ( var i = 0; i< element.length -1; i++){
  //   console.log(element[i]);
  // }
};
exports.Companysession = (req, res) => {
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
    res.send(req.session.uuid);
  });
};
