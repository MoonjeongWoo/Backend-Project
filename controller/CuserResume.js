const { UserResume } = require("../model");
const {ElementCareer} = require("../model");
const {ElementLocation} = require("../model");
const {ElementStack} = require("../model");

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
        stack: req.body.stack,
        career: req.body.career,
        portfolio: req.body.portfolio,
        etc: req.body.etc
    })
    // .then((result, err) => { // 하는 중
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
    })  
}   
// ----------------