var func = {};

function isLogin(session) {
    if (session) {
        return 1
    } else {
        return 0
    }
}
func.isLogin = isLogin;


module.exports = func;