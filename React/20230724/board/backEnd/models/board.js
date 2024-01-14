const Sequelize = require("sequelize");

class Board extends Sequelize.Model{
    static init(seq){
        return super.init({
            title : {
                type: Sequelize.STRING(20),
                allowNull : false,
            },
            content : {
                type : Sequelize.STRING(200),
                allowNull : false,
            },
            user_id : {
                type : Sequelize.STRING(20),
                allowNull : false
            }
        }, {
            sequelize : seq,
            timestamps : true,
            modelName : "Board",
            tableName : "board_table",
            paranoid : true,
            charset : "utf8",
            collate : "utf8_general_ci"
        })
    }
}

module.exports = {Board};