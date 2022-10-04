const { json } = require("body-parser");
const { CompanyInfo, ViewUserResume } = require("../model");

exports.companyBucket = (req, res) => {
    CompanyInfo.findOne({
        attributes: ['bucket'],
        where: { uuid: req.session.uuid }
    }).then((result) => {
        if (result.bucket != null) {
            res.send(result.bucket)
        }
    })
}

exports.getViewUserResume = async (req, res) => {
    var resume = {};

    for (var i = 0; i < req.body.userUuid.length; i++) {
        await ViewUserResume.findAll({
            where: { uuid: req.body.userUuid[i] },
        }).then((result) => {
            console.log(result)
            var userResume = {
                name: result[0].dataValues.name,
                email: result[0].dataValues.email,
                location: result[0].dataValues.location,
                stack: result[0].dataValues.stack,
                career: result[0].dataValues.career,
                portfolio: result[0].dataValues.portfolio,
                etc: result[0].dataValues.etc,
                uuid: result[0].dataValues.uuid
            }
            resume[i] = userResume;
        })
    }
    res.send(resume)
    // res.send(1)
}

exports.ruleOut = (req, res) => {
    CompanyInfo.findOne({
        attributes: ['bucket'],
        where: { uuid: req.session.uuid }
    }).then((result) => {
        var theBucket = JSON.parse(result.bucket);
        const isUUID = (element) => element === req.body.uuid;
        var idx = theBucket.findIndex(isUUID);
        console.log(idx);

        // console.log(theBucket.findindex(req.body.uuid));
        // console.log("체크체크", typeof result.bucket) // ["047007f5-54f7-41e1-ae75-2cccb17f1c94","64dd76cc-f18a-4308-a70a-a00fb1354a27"]
        // console.log("췍췍2", req.body); // { index: '1' }
        // var theBucket = JSON.parse(result.bucket);
        // console.log(typeof req.body.index);
        if (idx > -1) {
            theBucket.splice(idx, 1);
            console.log("췍췍4", theBucket)
        }

        // CompanyInfo.update(
        //     {bucket: JSON.stringify(theBucket)},
        //     {where: { uuid: req.session.uuid }}
        // )
    })
}


