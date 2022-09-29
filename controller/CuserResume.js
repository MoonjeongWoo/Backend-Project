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
    where: { uuid: req.session.uuid }
  })
    .then((result) => {
      if (result === null) {
        UserResume.create({
          uuid: req.session.uuid,
          stack: req.body.stack,
          career: req.body.career,
          portfolio: req.body.portfolio,
          etc: req.body.etc
        })
          .then((result) => { // then 2 start here
            console.log("이력최초등록"/* , result */);

            var careerSplit = req.body.career.split('|');
            var totalCareer = 0;
            for (var i = 0; i < careerSplit.length - 1; i++) {
              if (i % 2 == 0) { totalCareer += Number(careerSplit[i]); }
            };
            totalCareer = String(totalCareer);
            ElementCareer.create({
              [totalCareer]: 1,
              id: req.session.uuid
            })
              .then((result) => {
                console.log("커리어요소최초등록")
              }).catch((err) => {
                console.log("커리어요소최초등록 Error: ", err);
              });

            var stackSplit = req.body.stack.split('|');
            var stackArr = [];
            console.log(stackSplit);
            var sqlDict = { id: req.session.uuid };
            for (var i = 0; i < stackSplit.length - 2; i++) { stackArr[stackSplit[i]] = 1; };
            Object.assign(sqlDict, stackArr);
            ElementStack.create(sqlDict)
              .then((result) => {
                console.log("스택요소최초등록: ", result)
              }).catch((err) => {
                console.log("스택요소최초등록 Error: ", err);
              });


            }) // then 2 end here
            
            
            // if절 트루시 실행문 끝부분을 찾아라
      } else {
              UserResume.update(
                {
                  uuid: req.session.uuid,
                  stack: req.body.stack,
                  career: req.body.career,
                  portfolio: req.body.portfolio,
                  etc: req.body.etc
                },
                { where: { uuid: req.session.uuid } }
              )
                .then((result) => {
                  console.log("이력수정등록", result) // 수정 갯수

                  var careerSplit = req.body.career.split('|');
                  var totalCareer = 0;
                  for (var i = 0; i < careerSplit.length - 1; i++) {
                    if (i % 2 == 0) { totalCareer += Number(careerSplit[i]); }
                  };
                  totalCareer = String(totalCareer);
                  ElementCareer.update(
                    {
                      [totalCareer]: 1,
                      id: req.session.uuid
                    },
                    { where: { id: req.session.uuid } }
                  )
                    .then((result) => {
                      console.log("커리어요소수정등록")
                    }).catch((err) => {
                      console.log("커리어요소수정등록 Error: ", err);
                    })
                }).catch((err) => {
                  console.log("수정등록 Error: ", err);
                })