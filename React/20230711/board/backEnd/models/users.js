const Sequelize = require("sequelize");

class User extends Sequelize.Model{
    static init(seq){
        return super.init({
            user_id : {
                type : Sequelize.STRING(20),
                allowNull : false,
            },
            user_pw : {
                type : Sequelize.STRING(200),
                allowNull : false,
            },
            user_nickname : {
                type : Sequelize.STRING(10),
                allowNull : false
            }
        },{
            sequelize : seq,
            timestamps : true, //추가 수정 자동 생성
            modelName : "User",
            tableName : "user_table",
            paranoid : true,
            charset : "utf8",
            collate : "utf8_general_ci"
        });
    }
}

module.exports = {User};