const { UserInfo } = require("../model");
const { ElementLocation } = require("../model");

exports.updateProfile = (req, res) => {
    // console.log(req.file.filename)
    UserInfo.update(
        {
            id: req.body.id,
            pw: req.body.pw,
            name: req.body.name,
            email: req.body.email,
            location: req.body.location,
            // userPic: req.file.filename
        },
        {
            where: { uuid: req.session.uuid }
        }
    )
        .then((result) => {
            console.log('레큐바디', req.body.location);
            console.log('리절트', result["dataValues"]);
            var newLoca = req.body.location;
            ElementLocation.destroy({ where: { id: req.session.uuid } });
            ElementLocation.create(
                {
                    [newLoca]: 1,
                    "id": req.session.uuid
                }
            )
                    .then((result) => {
                        console.log("지역요소수정등록")
                    }).catch((err) => {
                        console.log("지역요소수정등록 Error: ", err);
                    })
            
        })

}