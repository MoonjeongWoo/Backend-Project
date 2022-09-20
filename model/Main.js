const {cnn} = require("./index");

exports.postJoinMember = (data, cb) => {
    // var uuid = ;
    // unhex()
    let sql = `INSERT INTO users VALUES("1", '${data.id}','${data.pw}','${data.name}','${data.email}','${data.location}');`;
    console.log(sql);
    // cnn.query( sql, function(err, rows){
    //     if ( err ) throw err;
    //     cb(rows);
    // });
}