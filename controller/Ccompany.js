const { UserInfo } = require("../model");

exports.getCompany = (req, res) => {
  res.render("company");
};


// 요소 선택시 해당하는 사람 출력
exports.sortUserByElement = (req, res) => {
  console.log(req.body);
  // var element = req.body.elements.split('|');
  // for ( var i = 0; i< element.length -1; i++){
  //   console.log(element[i]);
  // }


}