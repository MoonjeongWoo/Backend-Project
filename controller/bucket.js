const { CompanyInfo, ViewUserResume } = require("../model");

exports.companyBucket = (req, res) => {
    CompanyInfo.findOne({
        attributes: ['bucket'],
        where: { uuid: req.session.uuid }
    }).then((result) => {
        if (result.bucket != null){
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
                etc: result[0].dataValues.etc
            }
            resume[i] = userResume;
        })
    }
    res.send(resume)
    // res.send(1)
}


