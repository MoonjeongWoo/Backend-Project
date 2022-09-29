const { UserInfo } = require("../model");


exports.updateProfile = (req, res) => {
    // console.log(req.file.filename)
    UserInfo.update(
        {
            id: req.body.id,
            pw: req.body.pw,
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