const Sequelize = require("sequelize");

class Board extends Sequelize.Model {
    static init(seq){
        return super.init({
            board_title : {
                type : Sequelize.STRING(50),
                allowNull : false,
            },
            board_content : {
                type : Sequelize.STRING(500),
                allowNull : false,
            },
            upload_nickname : {
                type : Sequelize.STRING(10),
                allowNull : false
            }
        },{
            sequelize : seq,
            timestamps : true,
            modelName : "Board",
            tableName : "board_table",
            paranoid : true,
            charset : "utf8",
            collate : "utf8_general_ci"
        });
    }
}

module.exports = {Board};