const { UserInfo } = require("../model");
const { CompanyInfo } = require("../model");
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
  UserInfo.create({
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
    email: req.body.email,
    location: req.body.location
  }).then((result) => {
    console.log(result);
  })
};
// -------------------------------


// save join member data in db (기업 회원)
exports.postJoinMemberCompany = (req, res) => {
  CompanyInfo.create({
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


// id 중복 확인
exports.idCheck = (req, res) => {
  UserInfo.findAll({
    attributes: ['id'],
    where: {
      id: req.body.id
    }
  }).then((result) => {
    // exist 1 no exist 0 
    if (result[0] != undefined) {
      res.send({ result: 1 })
    } else {
      res.send({ result: 0 })
    }
  })
}
// -------------------------------


// id 중복 확인 (기업 회원)
exports.idCheckCompany = (req, res) => {
  CompanyInfo.findAll({
    attributes: ['id'],
    where: {
      id: req.body.id
    }
  }).then((result) => {
    // exist 1 no exist 0 
    if (result[0] != undefined) {
      res.send({ result: 1 })
    } else {
      res.send({ result: 0 })
    }
  })
}
// -------------------------------