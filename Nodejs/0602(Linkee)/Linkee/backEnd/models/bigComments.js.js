const Sequelize = require("sequelize");

class BigComment extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            content : {
                type : Sequelize.TEXT,
                allowNull : false
            },
            likes : {
                type : Sequelize.INTEGER(255)
            }
        }, {
            sequelize,
            timestamps : true,
            modelName : "BigComment",
            tableName : "bigComments",
            charset : "utf8",
            collate : "utf8_general_ci"
        });
    }

    static associate(db) {
        db.BigComment.belongsTo(db.User, {foreignKey : "user_id", targetKey : "id"});
        db.BigComment.belongsTo(db.Post, {foreignKey : "post_id", targetKey : "id"});
        
        db.BigComment.hasMany(db.LikeBigComment, {foreignKey : "comment_id", sourceKey : "id"});
        db.BigComment.hasMany(db.SmallComment, {foreignKey : "comment_id", sourceKey : "id"});
    }
}

class LikeBigComment extends Sequelize.Model {
    static init(sequelize) {
        return super.init({},
            {
            sequelize,
            timestamps : true,
            modelName : "LikeBigComment",
            tableName : "likeBigComment",
            charset : "utf8",
            collate : "utf8_general_ci"
        });
    }

    static associate(db) {
        db.LikeBigComment.belongsTo(db.User, {foreignKey : "user_id", targetKey : "id"});
        db.LikeBigComment.belongsTo(db.BigComment, {foreignKey : "comment_id", targetKey : "id"});
    }
}

module.exports = {BigComment, LikeBigComment};