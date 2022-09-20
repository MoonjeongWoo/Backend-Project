const {cnn} = require("./index");

exports.postJoinMember = (data, cb) => {
    var uuid = (unhex(replace(uuid(),'-','')));
    let sql = `INSERT INTO users VALUES('${uuid}, ${data.id}','${data.pw}','${data.name}','${data.email}','${data.location}');`;
    console.log(sql);
    // cnn.query( sql, function(err, rows){
    //     if ( err ) throw err;
    //     cb(rows);
    // });
}