const { UserInfo } = require("../model");
const { CompanyInfo } = require("../model");
const { strToSha256 } = require("./Cfunc");

// get joinmember page
exports.getJoinMember = (req, res) => {
  res.render("joinMember");
};
// -------------------------------

// get joinmember page _ Corp
// exports.getJoinMemberCompany = (req, res) => {
//   res.render("joinMemberCompany");
// };
// -------------------------------

// save join member data in db
exports.postJoinMember = (req, res) => {
  var pw = strToSha256(req.body.id, req.body.pw);
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
  console.log(req.body)
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
    where: { id: req.body.id }
  }).then((result) => {
    console.log(result);
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
    where: { id: req.body.id }
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
