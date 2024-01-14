const Sequelize = require("sequelize");
const config = require("../config");

class User extends Sequelize.Model{
    static init(seq){
        return super.init({
            user_id : {
                type : Sequelize.STRING(20),
                allowNull : false,
            },
            user_pw : {
                type : Sequelize.STRING(64),
                allowNull : false
            },
            img : {
                type : Sequelize.STRING(800),
                allowNull : false
            }
        },{
            sequelize : seq,
            timestamps : true, // 추가 수정 자동 생성
            underscored : false, // 카멜 케이스 할거임?
            modelName : "User", // 노드 프로젝트에서 사용할 이름(조회 했을때 보임)
            tableName : "users", // 데이터 베이스 테이블의 이름
            paranoid : false, // 삭제 시간 표기 할거임?
            charset : "utf8", // 인코딩 방식은 꼭 작성 해야한다.
            collate : "utf8_general_ci", // 인코딩 방식은 꼭 작성 해야한다.
        });
    }
}
// console.log(config)
const sequelize = new Sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
)

const db = {};

db.sequelize = sequelize;
db.User = User;
User.init(sequelize);

module.exports = db;