
// const { kMaxLength } = require("buffer");
// const cnn = require("./index");

// exports.idCheck = (data, cb) => {
//     var sql = `SELECT * FROM users Where id = "${data.id}"`;

//     cnn.query( sql, function(err, rows) {
//         // console.log( "결과값길이", rows.length );
//         // console.log( "결과값", rows );
//         if  (rows.length === 0) {
//             cb({result: 0});         
//         } else  {
//             cb({result: 1});
//         };
//         if ( err ) throw err;
//     });
// }

// // 회원가입
// exports.postJoinMember = (data, cb) => {
//     var sql = `INSERT INTO Users VALUES(unhex(replace(uuid(),'-','')), '${data.id}','${data.pw}','${data.name}','${data.email}','${data.location}');`;

//     cnn.query( sql, function(err, rows){
//         if ( err ) throw err;
//         cb(rows);
//     });
// }

// // 로그인
// exports.userLogin = (data, cb) => {
//     var sql = `SELECT * FROM Users Where id = "${data.id}" and pw = "${data.pw}";`;
//     cnn.query( sql, function(err, result) {
//         if ( err ) throw err;
//         cb(result.length, data.id);
//     });
// }
// -----------------------

// 시퀄 컨버젼 시작.

const Main = ( Sequelize, DataTypes ) => {
    const model = Sequelize.define( // Sequelize 모델 정의. 3가지 인자 = 모델(테이블)이름, 컬럼 정의, 모델의 옵션 정의
        "users",
        {
            uuid: {
                type: DataTypes.UUID,
                priamryKey: true,
            },
            id: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            pw: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            location: {
                type: DataTypes.STRING(10),
                allowNull: false
            }
        },
        {
            tableName: "users",
            FreezeTableName: true,
            timestamps: false
        }
    );
    return model;
};

module.exports = Main;