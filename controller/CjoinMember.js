const { UserInfo } = require("../model");
const { CompanyInfo } = require("../model");
const { strToSha256 } = require("./Cfunc");
const { ElementLocation } = require("../model");

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

// save join member data in db
exports.postJoinMember = (req, res) => {
  var pw = strToSha256(req.body.id, req.body.pw)
  var data = {
    result: 1
  }
  UserInfo.create({
    id: req.body.id,
    pw: pw,
    name: req.body.name,
    email: req.body.email,
    location: req.body.location,
  }).then((result) => {
    res.send(data)
  })
};
// -------------------------------

// save join member data in db (기업 회원)
exports.postJoinMemberCompany = (req, res) => {
  var pw = strToSha256(req.body.id, req.body.pw)
  var data = {
    result: 1
  }
  CompanyInfo.create({
    id: req.body.id,
    pw: pw,
    name: req.body.name,
    email: req.body.email,
    location: req.body.location,
  }).then((result) => {
    res.send(data)
  })
};
// -------------------------------

// id 중복 확인
exports.idCheck = (req, res) => {
  UserInfo.findAll({
    attributes: ["id"],
    where: {
      id: req.body.id,
    },
  }).then((result) => {
    // exist 1 no exist 0
    if (result[0] != undefined) {
      res.send({ result: 1 });
    } else {
      res.send({ result: 0 });
    }
  });
};
// -------------------------------

// id 중복 확인 (기업 회원)
exports.idCheckCompany = (req, res) => {
  CompanyInfo.findAll({
    attributes: ["id"],
    where: {
      id: req.body.id,
    },
  }).then((result) => {
    // exist 1 no exist 0
    if (result[0] != undefined) {
      res.send({ result: 1 });
    } else {
      res.send({ result: 0 });
    }
  });
};
// -------------------------------

//회원정보 수정 화면
exports.readyToEdit = (req, res) => {
  UserInfo.findOne({
    attributes: ["id", "pw", "name", "email", "location"],
    where: { uuid: req.session.uuid },
  }).then((result) => {
    res.render("editProfile", { nowData: result });
    // console.log(data);
  });
};

//회원정보 수정 반영
exports.editProfile = (req, res) => {
  UserInfo.update(
    {
      id: req.body.id,
      pw: req.body.pw,
      name: req.body.name,
      email: req.body.email,
      location: req.body.location,
    },
    {
      where: {
        uuid: req.session.uuid,
      },
    }
  );
};

// 회원정보 삭제 (탈퇴)
exports.delAccount = (req, res) => {
  UserInfo.destroy({
    where: { id: req.body.id }
  });
  // const row = UserInfo.findOne({
  //   where: {
  //     id: req.body.data.id // 일단 하나만
  //   }
  // }).then((row) => {
  //   row.destory();
  // })
};
// -------------------------------

