
const { kMaxLength } = require("buffer");
const { threadId } = require("./index");
const cnn = require("./index");

exports.idCheck = (data, cb) => {
    var sql = `SELECT * FROM users Where id = "${data.id}"`;

    cnn.query( sql, function(err, rows) {
        // console.log( "결과값길이", rows.length );
        // console.log( "결과값", rows );
        if  (rows.length === 0) {
            cb({result: 0});         
        } else  {
            cb({result: 1});
        };
        if ( err ) throw err;
    });
}

// 회원가입
exports.postJoinMember = (data, cb) => {
    var sql = `INSERT INTO Users VALUES(unhex(replace(uuid(),'-','')), '${data.id}','${data.pw}','${data.name}','${data.email}','${data.location}');`;

    cnn.query( sql, function(err, rows){
        if ( err ) throw err;
        cb(rows);
    });
}

// 로그인
exports.userLogin = (data, cb) => {
    var sql = `SELECT * FROM Users Where id = "${data.id}" and pw = "${data.pw}";`;
    cnn.query( sql, function(err, result) {
        if ( err ) throw err;
        cb(result.length, data.id);
    });
}
// -----------------------

// if login success get uuid
exports.getUuid = (userId, cb) => {
    var sql = `SELECT uuid from Users WHERE id = "${userId}";`
    cnn.query( sql, function(err, uuid) {
        if ( err ) throw err;
        uuid = '0x'+uuid[0].uuid.toString("hex")
        cb(uuid);
    })
}
// -----------------------

