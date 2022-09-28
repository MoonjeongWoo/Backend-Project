var func = {};

function isLogin(session) {
    console.log('islog', session)
    if (session) {
        console.log(1)
        return 1
    } else {
        console.log(0)
        return 0
    }
}
func.isLogin = isLogin;


module.exports = func;