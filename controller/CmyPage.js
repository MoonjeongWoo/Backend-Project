const { UserInfo } = require("../model");
const { strToSha256 } = require("./Cfunc");
const { ElementLocation } = require("../model");

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
            // userPic: req.file.filename
        },
        {
            where: { uuid: req.session.uuid }
        }
    )
        .then(() => {
            var newLoca = req.body.location;
            ElementLocation.destroy({ where: { id: req.session.uuid } });
            ElementLocation.create(
                {
                    [newLoca]: 1,
                    "id": req.session.uuid
                }
            )
                .then((result) => {
                    // console.log("지역요소수정등록")
                }).catch((err) => {
                    console.log("지역요소수정등록 Error: ", err);
                })
        })
}

// 회원정보 삭제 (탈퇴)
exports.delAccount = (req, res) => {
    UserInfo.destroy({ where: { id: req.body.id } })
    // const row = UserInfo.findOne({
    //   where: { id: req.body.data.id } // 일단 하나만
    // }).then((row) => { row.destory(); }
    // )
}
