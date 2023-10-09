const Sequelize = require("sequelize");
class User extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            // 컬럼의 내용
            name : {
                type : Sequelize.STRING(20),
                allowNull : false,
            },
            age : {
                type : Sequelize.INTEGER,
                allowNull : false,
            },
            user_id : {
                type : Sequelize.STRING(20),
            },
            user_pw : {
                type : Sequelize.STRING(64),
            }
        },{
            // 테이블의 내용
            sequelize,
            timestamps : true, // 생성 시간, 업데이트 시간 자동으로 생성
            underscored : false, // 카멜 케이스 설정 유무
            modelName : "User", // 모델 이름
            tableName : "users", // 복수형으로 테이블 이름 설정
            paranoid : false, // 삭제시간 생성 유무
            charset : "utf8", // 인코딩 방식은 꼭 설정 해야한다.
            collate : "utf8_general_ci", // 인코딩 방식은 꼭 설정 해야한다.
        })
    }

    static associate(db){
        db.User.hasMany(db.Post, {foreignKey : "user_id", sourceKey : "id"});
    }
}

module.exports = User;