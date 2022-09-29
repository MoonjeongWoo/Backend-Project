const { UserInfo } = require("../model");

var func = {};

function isLogin(session) {
    if (session) {
        return 1
    } else {
        return 0
    }
}

function userPic(session) {
    return new Promise(function (resolve, reject) {
        if (session) {
            UserInfo.findOne({
                where: { uuid: session }
            }).then((result) => {
                resolve(result.dataValues.userPic)
            })
        }else{
            resolve()
        }
    })
}

func.isLogin = isLogin;
func.userPic = userPic;

module.exports = func;
