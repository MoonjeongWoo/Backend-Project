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
  UserResume.findOne({
    attributes: ['uuid'],
    where: {// id: req.body.id
      uuid: req.session.uuid}
  })
  .then((result)=>{
    console.log("체크1", result);
    if (result === null) {
      UserResume.create({
        uuid: req.session.uuid,
        stack: req.body.stack,
        career: req.body.career,
        portfolio: req.body.portfolio,
        etc: req.body.etc
      })
      .then((result) => {
        console.log("최초등록", result)
        
        var careerSplit = req.body.career.split('|');
        var totalCareer = 0;
        for (var i=0; i<careerSplit.length-1; i++){
          if (i%2 == 0){
            totalCareer += Number(careerSplit[i]);
          }
        }
        totalCareer = String(totalCareer);
        ElementCareer.create({
          [totalCareer]: 1,
          id: req.session.uuid
        })
        .then((result) => {
          console.log("커리어요소최초등록"/* , result */)
        }).catch((err) => {
          console.log("커리어요소최초등록 Error: ", err);
        })
      }).catch((err) => {
        console.log("최초등록 Error: ", err);
      })
    } else {
      UserResume.update(
        {
          uuid: req.session.uuid,
          stack: req.body.stack,
          career: req.body.career,
          portfolio: req.body.portfolio,
          etc: req.body.etc/* "수정" */
        },
        { where: {uuid: req.session.uuid} }
      )
      .then((result) => {
        console.log("수정등록", result) // 수정 갯수
        
        var careerSplit = req.body.career.split('|');
        var totalCareer = 0;
        for (var i=0; i<careerSplit.length-1; i++){
          if (i%2 == 0){
            totalCareer += Number(careerSplit[i]);
          }
        }
        totalCareer = String(totalCareer);
        ElementCareer.update(
          {
            [totalCareer]: 1,
            id: req.session.uuid
          },
          { where: {id: req.session.uuid} }
        )
        .then((result) => {
          console.log("커리어요소수정등록"/* , result */)
        }).catch((err) => {
          console.log("커리어요소수정등록 Error: ", err);
        })
      }).catch((err) => {
        console.log("수정등록 Error: ", err);
      })
    }
  })

  // ["dataValue"]
  // .then((result) => {
  //   // exist 1 no exist 0 
  //   if (result[0] != undefined) {
  //     res.send({result: 1})
  //   }else{
  //     res.send({result: 0})
  //   }
  // })

  

//   var careerSplit = req.body.career.split('|');
//   var totalCareer = 0;

//   for (var i=0; i<careerSplit.length-1; i++){
//     if (i%2 == 0){
//       totalCareer += Number(careerSplit[i]);
//     }
//   }

// totalCareer = String(totalCareer);
//   ElementCareer.create({
//     [totalCareer] : req.session.uuid,
//     id: req.session.uuid
//   }).then((result) => {
//     // console.log(result)
//   })
}