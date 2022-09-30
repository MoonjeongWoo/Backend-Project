const { UserInfo } = require("../model");
const { strToSha256 } = require("./Cfunc");


exports.updateProfile = (req, res) => {
    // console.log(req.file.filename)
    pw = strToSha256(req.body.id, req,body.pw)
    UserInfo.update(
        {
            id: req.body.id,
            pw: pw,
            name: req.body.name,
            email: req.body.email,
            location: req.body.location,
            userPic: req.file.filename
        },
        {
            where: {
                uuid: req.session.uuid
            }
        }
    )

}