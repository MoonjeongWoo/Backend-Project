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
    // uuid: req.session.uuid,
    uuid: 'f975417f-5f55-4efd-b688-073f6a6920b2',
    stack: req.body.stack,
    career: req.body.career,
    portfolio: req.body.portfolio,
    etc: req.body.etc
  }).then((result) => { // 하는 중. 다시 시작
    // res.json(result);
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
    var dataSet = result["dataValues"];
    console.log("1", typeof dataSet, dataSet)
    console.log(typeof dataSet["career"]);
    console.log("2", typeof dataSet, dataSet)
    dataSet["career"].split("|");
    console.log("3", typeof dataSet, dataSet)
    var carYear = dataSet[0, 2];

    // console.log("1", typeof dataSet);
    console.log(dataSet["career"].split("|"));
    // var aaaa = dataSet["career"].split("|")
    // console.log("2", typeof (aaaa));
    
    // ElementCareer.create({
    //   1: dataSet
    // })
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
