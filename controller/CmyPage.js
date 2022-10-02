const { UserInfo } = require("../model");
const { strToSha256, userPic } = require("./Cfunc");
const { ElementLocation } = require("../model");

exports.updateProfile = async (req, res) => {
    var pw = strToSha256(req.body.id, req.body.pw)
    
    if ( req.file != undefined){
        var filename = req.file.filename;
    }else{
        var filename = await userPic(req.session.uuid);
        filename = filename.userPic;
    }

    UserInfo.update(
        {
            id: req.body.id,
            pw: pw,
            name: req.body.name,
            email: req.body.email,
            location: req.body.location,
            userPic: filename
        },
        { where: { uuid: req.session.uuid } }
    ).then(() => {
        var newLoca = req.body.location;
        ElementLocation.destroy({ where: { id: req.session.uuid } });
        ElementLocation.create({
            [newLoca]: 1,
            "id": req.session.uuid
        })
    })
    res.send()
};

// 기업 회원 정보 수정 (아직 안된 것: 프론트페이지 연결, route 등록)
exports.updateProfileCompany = async (req, res) => {
    var pw = strToSha256(req.body.id, req.body.pw)
    
    if ( req.file != undefined){
        var filename = req.file.filename;
    }else{
        var filename = await userPic(req.session.uuid);
        filename = filename.userPic;
    };

    CompanyInfo.update(
        {
            id: req.body.id,
            pw: pw,
            name: req.body.name,
            email: req.body.email,
            location: req.body.location,
            userPic: filename
        },
        { where: { uuid: req.session.uuid } }
    );
    res.send()
};

// 회원정보 삭제 (탈퇴)
exports.delAccount = (req, res) => {
    UserInfo.destroy({ where: { id: req.body.id } })
};

// 기업 회원정보 삭제 (아직 안된 것: 프론트페이지 연결, route 등록)
exports.delAccountCompany = (req, res) => {
    CompanyInfo.destroy({ where: { id: req.body.id } })
};
