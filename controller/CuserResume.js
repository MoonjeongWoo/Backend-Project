const { stringify } = require("querystring");
const { urlToHttpOptions } = require("url");
const { UserResume } = require("../model");
const { ElementCareer } = require("../model");
const { ElementLocation } = require("../model");
const { ElementStack } = require("../model");

// get introduce page
exports.getIntroduce = (req, res) => {
  res.render("introduce");
};
// ----------------

// save introduce
exports.saveIntroudce = (req, res) => {
  UserResume.create({
    uuid: req.session.uuid,
    stack: req.body.stack,
    career: req.body.career,
    portfolio: req.body.portfolio,
    etc: req.body.etc,
  })
  .then((result, err) => {
    console.log(result)
  })

  var careerSplit = req.body.career.split('|');
  var totalCareer = 0;

  for (var i=0; i<careerSplit.length-1; i++){
    if (i%2 == 0){
      totalCareer += Number(careerSplit[i]);
    }
  }

totalCareer = String(totalCareer);
  ElementCareer.create({
    [totalCareer] : req.session.uuid,
    id: req.session.uuid
  }).then((result) => {
    // console.log(result)
  })
}