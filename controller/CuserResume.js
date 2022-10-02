const { stringify } = require("querystring");
const { urlToHttpOptions } = require("url");
const { UserResume, UserInfo } = require("../model");
const { ElementCareer } = require("../model");
const { ElementStack } = require("../model");
const { ElementLocation } = require("../model");

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
    .then((result) => { // then 1 start here
      if (result === null) {
        var date = new Date();
        var today = new Intl.DateTimeFormat('kr').format(date);
        console.log("today", today);

        UserResume.create({
          uuid: req.session.uuid,
          stack: req.body.stack,
          career: req.body.career,
          portfolio: req.body.portfolio,
          etc: req.body.etc,
          createdDate: today,
          updatedDate: today
        })
          .then((result) => { // then 2 start here
            console.log("이력_1st: "/* , result */);

            UserInfo.findOne({
              attributes: ['location'],
              where: { uuid: req.session.uuid }
            })
              .then((result) => {
                // var dict = {"id": req.session.uuid};
                var loca = result["dataValues"]["location"];
                // // console.log("로카나와라", result["dataValues"]["location"]);
                // Object.assign(dict, {loca: 1});
                ElementLocation.create({
                  [loca]: 1,
                  "id": req.session.uuid
                })
              })

            var careerSplit = req.body.career.split('|');
            var totalCareer = 0;
            for (var i = 0; i < careerSplit.length - 1; i++) {
              if (i % 2 == 0) { totalCareer += Number(careerSplit[i]); }
            };
            if (totalCareer > 21) { totalCareer = 21 };

            totalCareer = String(totalCareer);
            ElementCareer.create({
              [totalCareer]: 1,
              id: req.session.uuid
            })
              .then((result) => {
                console.log("carE_1st: ")
              }).catch((err) => {
                console.log("carE_1st Error: ", err);
              });

            var stackSplit = req.body.stack.split('|');
            var stackDict = {};
            console.log(stackSplit);
            var sqlDict = { id: req.session.uuid };
            for (var i = 0; i < stackSplit.length - 1; i++) { stackDict[stackSplit[i]] = 1; };
            Object.assign(sqlDict, stackDict);
            ElementStack.create(sqlDict)
              .then((result) => {
                console.log("stckE_1st: ")
              }).catch((err) => {
                console.log("stckE_1st Error: ", err);
              });

          }) // then 2 end here
      } // if절 트루시 실행문 끝
      else {
        // 수정단계 시작
        var date = new Date();
        // var today = new Intl.DateTimeFormat('kr', {dateStyle: 'full', timeStyle: 'full'}).format(date);
        var today = new Intl.DateTimeFormat('kr').format(date);
        console.log("today", today);

        UserResume.update(
          {
            uuid: req.session.uuid,
            stack: req.body.stack,
            career: req.body.career,
            portfolio: req.body.portfolio,
            etc: req.body.etc,
            updatedDate: today
          },
          { where: { uuid: req.session.uuid } }
        ).then((result) => {
          console.log("이력_edit: ", result) // 수정 갯수

          var careerSplit = req.body.career.split('|');
          var totalCareer = 0;
          for (var i = 0; i < careerSplit.length - 1; i++) {
            if (i % 2 == 0) { totalCareer += Number(careerSplit[i]); }
          };
          if (totalCareer > 21) { totalCareer = 21 };
          totalCareer = String(totalCareer);
          ElementCareer.destroy({ where: { id: req.session.uuid } })
          ElementCareer.create(
            {
              [totalCareer]: 1,
              id: req.session.uuid
            }
          ).then((result) => {
            console.log("carE_edit: ")
          }).catch((err) => {
            console.log("carE_edit Error: ", err);
          });

          var stackSplit = req.body.stack.split('|');
          var stackDict = {};
          console.log(stackSplit);
          var sqlDict = { id: req.session.uuid };
          for (var i = 0; i < stackSplit.length - 1; i++) { stackDict[stackSplit[i]] = 1; };
          Object.assign(sqlDict, stackDict);
          ElementStack.destroy({ where: { id: req.session.uuid } });
          ElementStack.create(sqlDict)
            .then((result) => {
              console.log("stckE_edit: ")
            }).catch((err) => {
              console.log("stckE_edit Error: ", err);
            });

        }).catch((err) => {
          console.log("이력_edit Error: ", err);
        })
      } // else 실행문 끝
    }) // then 1 end here
} // saveIntroudce 끝
