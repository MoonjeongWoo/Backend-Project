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


exports.postJoinMember = (data, cb) => {
    // let sql = `select * from users`;
    let sql = `INSERT INTO users VALUES(unhex(replace(uuid(),'-','')), '${data.id}','${data.pw}','${data.name}','${data.email}','${data.location}');`;
    // console.log(sql);
    cnn.query( sql, function(err, rows){
        console.log(rows);
        if ( err ) throw err;
        cb(rows);
    });
    
}