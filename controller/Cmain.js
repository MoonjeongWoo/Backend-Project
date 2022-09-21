const Main = require("../model/Main");

// get main page
exports.getMain = (req, res) => {
  res.render("main");
};
// -------------------------------

// get login page
exports.getLogin = (req, res) => {
  res.render("login");
};
// -------------------------------

// get joinmember page
exports.getJoinMember = (req, res) => {
  res.render("joinmember");
};
// -------------------------------

// save join member data in db
exports.postJoinMember = (req, res) => {
  Main.postJoinMember(req.body, function (result) {
    res.send(result);
  });
};
// -------------------------------

// try login
exports.userLogin = (req, res) => {
  Main.userLogin(req.body, function (result, userId) {
    if (result != 0) {
      console.log('userid', userId)
      if (!req.session.user) {
        Main.getUuid(userId, function(uuid) {
          req.session.user = uuid;
          console.log("uuid", uuid)
        })
      } else {
        console.log('session 이미 있음')
      }
      var data = { result: 1 }
    } else {
      var data = { result: 0 }
    }
    
    // login success return 1 fail return 0 
    res.send(data);
  })
}

// id exist check
exports.idCheck = (req, res) => {
    Main.idCheck (req.body, function(result){
        res.send(result);
        // result 값이 0이면 중복 id 없음, 1 이면 중복 아이디 있음
    });
};



// 시퀄 전환 시작

// const { Main } = require("../model");

// exports.idCheck = (req, res) => {
//     var data = {
//         id: req.body.id // testing...
//     };
//     Main.findAll({
//         where: {
//             id: data[id]
//         }
//     }).then((result)=>)
// }