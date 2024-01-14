const Sequelize = require("sequelize");

class Livechat extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            people : {
                type : Sequelize.STRING(50),
                allowNull : false
            },
            activated : {
                type : Sequelize.INTEGER
            }
        }, {
            sequelize,
            timestamps : true,
            modelName : "Livechat",
            tableName : "livechat",
            charset : "utf8",
            collate : "utf8_general_ci"
        });
    }
}

module.exports = {Livechat};