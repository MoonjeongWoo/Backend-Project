const { UserInfo } = require("../model");
const { createHash } = require('crypto');
const { DataTypes } = require("sequelize");

var func = {};

function checkLogin(uuid) {
    if (uuid) {
        return 1
    } else {
        return 0
    }
}
function strToSha256(id, pw){
    var pwHash = createHash('sha256').update(pw+id).digest('hex')
    return pwHash
}

function userPic(uuid) {
    return new Promise(function (resolve, reject) {
        if (uuid) {
            UserInfo.findOne({
                where: { uuid: uuid }
            }).then((result) => {
                if (result.dataValues.userPic == null) {
                    result.dataValues.userPic = "4DCD6250-55D8-4152-AAF8-D85B65F799EA_1_105_c.jpeg";
                }
                var data = {
                    name: result.dataValues.name,
                    userPic: result.dataValues.userPic
                }
                resolve(data);
            })
        } else {
            resolve()
        }
    })
}




func.checkLogin = checkLogin;
func.userPic = userPic;
func.strToSha256 = strToSha256;

module.exports = func;
