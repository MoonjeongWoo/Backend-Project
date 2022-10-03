const { CompanyInfo } = require("../model");
const { sequelize } = require("../model");
const { ViewUserResume } = require("../model");

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
exports.getOthers = (req, res) => {
  if (req.session.uuid !== undefined) {
    res.render("watchother");
  } else {
    res.render("/");
  }
};
exports.getBucket = (req, res) => {
  res.render("bucket");
};

var stack = [];
var career = "";
var location = "";

// 요소 선택시 해당하는 사람 출력
exports.sortUserByElement = async (req, res) => {
  var resumes = [];
  var idList = await joinQuery(req);
  if ( idList==0 ){
    res.send( { data: resumes })
  }else{
    for (var i = 0; i < idList.length; i++) {
      await ViewUserResume.findAll({
        where: { uuid: idList },
      }).then((result) => {
        resumes.push( result[i].dataValues )
      })
    }
    
    res.send( { data: resumes } )
  }
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

async function joinQuery(req) {
  var data = req.body.data;
  var element = req.body.element;
  var checkElement = [0, 0, 0];
  var checkWhere = 0;
  var query = "";
  var idResult = [];

  if (element == "career") {
    career = data;
  } else if (element == "location") {
    location = data;
  } else {
    stack = data.split("|");
    stack.splice(stack.length - 1);
  }

  if (stack.length != 0) {
    query += "elementStack AS stack ";
    checkElement[0] = 1;
  }
  
  
  if (career != "") {
    if (checkElement[0] == 0) {
      query += "elementCareer AS career ";
    } else {
      query += "JOIN elementCareer AS career ON stack.id = career.id ";
    }
    checkElement[1] = 1;
  }

  if (location != "") {
    if (checkElement[0] == 0 && checkElement[1] == 0) {
      query += "elementLocation AS career ";
    } else {
      if (checkElement[0] == 0) {
        query += "JOIN elementLocation AS location ON career.id = location.id ";
      } else {
        query += "JOIN elementLocation AS location ON stack.id = location.id ";
      }
    }
    checkElement[2] = 1;
  }

  query += "WHERE ";

  if (checkElement[0] == 1) {
    for (var i = 0; i < stack.length; i++) {
      if (checkWhere != 0) {
        query += "and ";
      }
      query += "stack." + "`" + `${stack[i]}` + "`" + "=1 ";
      checkWhere++;
    }
  }

  if (checkElement[1] == 1) {
    if (checkWhere != 0) {
      query += "and ";
    }
    query += `career.${career}=1 `;
    checkWhere++;
  }

  if (checkElement[2] == 1) {
    if (checkWhere != 0) {
      query += "and ";
    }
    query += `location.${location}=1 `;
  }

  if ( checkElement[0] + checkElement[1] + checkElement[2] == 0){
    return 0;
  }

  if (checkElement[0] == 1) {
    query = "SELECT stack.id FROM " + query;
  } else if (checkElement[1] == 1) {
    query = "SELECT career.id FROM " + query;
  } else {
    query = "SELECT location.id FROM " + query;
  }
  query += ";";
  
  const [result, metadata] = await sequelize.query(query);

  for (var i = 0; i < result.length; i++) {
    idResult.push(result[i].id);
  }

  idResult = new Set(idResult);
  idResult = Array.from(idResult);

  return idResult;
}
