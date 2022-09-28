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
  // UserResume.create({
  //   uuid: req.session.uuid,
  //   stack: req.body.stack,
  //   career: req.body.career,
  //   portfolio: req.body.portfolio,
  //   etc: req.body.etc,
  // })
  // .then((result, err) => { // 하는 중
  //   console.log(result)
  // })

  var careerSplit = req.body.career.split('|');
  var totalCareer = 0;

  for (var i=0; i<careerSplit.length-1; i++){
    if (i%2 == 0){
      totalCareer += Number(careerSplit[i]);
    }
  }

totalCareer = String(totalCareer);
  ElementCareer.create({
    [totalCareer] : "42fb6f32-73bb-4900-8b4e-4a99a25437ec",
    id: '1'
  }).then((result) => {
    // console.log(result)
  })
}
// ----------------
