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
    UserResume.create({
        uuid: req.session.uuid,
        stack: req.body.stack,
        career: req.body.career,
        portfolio: req.body.range,
        etc: req.body.etc
    }).then(() => {
        // ElementCareer.create({
            
        // })
        // ElementLocation.create({
            
        // })
        // ElementStack.create({
            
        // })
    })  
}
// ----------------