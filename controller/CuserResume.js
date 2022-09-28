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
  // var stackModi = req.body.stack.split("|");
  // console.log("stackmodi", stackModi);
  UserResume.create({
    uuid: req.session.uuid,
    // uuid: 'f975417f-5f55-4efd-b688-073f6a6920b2',
    stack: req.body.stack,
    career: req.body.career,
    portfolio: req.body.portfolio,
    etc: req.body.etc
  // }).then((result) => { // 하는 중. 다시 시작
  }).then(() => { // 하는 중. 다시 시작
    // console.log(result["dataValues"]);
    // {
    //   createdAt: Fn { fn: 'NOW', args: [] },
    //   updatedAt: Fn { fn: 'NOW', args: [] },
    //   uuid: '5bc4a117-102e-4426-b163-b2c9c933a494',
    //   stack: 'Linux|',
    //   career: '',
    //   portfolio: '',
    //   etc: ''
    // }
    // var dataDic = result["dataValues"];
    // dataDic["career"].split("|");
    // var carArr = dataDic["career"].split("|");
    var carArr = req.body.career.split("|");
    var sumNum = 0;
    for (var i = 0; i < carArr.length - 1; i++) {
      if (i % 2 == 0) {
        sumNum += Number(carArr[i]);
      }
      // console.log(carArr[i])
    };
    sumNum = String(sumNum);
    ElementCareer.create({
      [sumNum]: req.session.uuid
    })
    // ElementCareer.create({
    //   [sumNum]: req.session.uuid
    //   // [sumNum]: String(req.session.uuid)
    // });
    // console.log(sumNum)
  }).catch(err => {
    console.error(err);
  });
}
  //     UserResume.findOne({
  //         attributes: ['stack', "career", "portpolio", "etc", "location"],
  //           where: {uuid: req.session.uuid}
  //       })
  //       .then((result) => {
  //           res.render("editProfile", {nowData: result});
  //           // console.log(data);
  //       })
  //     }
  //     })

  // ElementCareer.create({

  // })
  // ElementLocation.create({

  // })
  // ElementStack.create({

  // })
// };
// ----------------
