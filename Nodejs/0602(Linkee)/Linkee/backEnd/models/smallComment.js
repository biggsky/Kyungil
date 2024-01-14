const Sequelize = require("sequelize");

class SmallComment extends Sequelize.Model {
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
            modelName : "SmallComment",
            tableName : "smallComments",
            charset : "utf8",
            collate : "utf8_general_ci"
        });
    }

    static associate(db) {
        db.SmallComment.belongsTo(db.User, {foreignKey : "user_id", targetKey : "id"});
        db.SmallComment.belongsTo(db.BigComment, {foreignKey : "comment_id", targetKey : "id"});
        
        db.SmallComment.hasMany(db.LikeSmallComment, {foreignKey : "comment_id", sourceKey : "id"});
        db.SmallComment.hasMany(db.LikeSmallComment, {foreignKey : "user_id", sourceKey : "id"});
    }
}

class LikeSmallComment extends Sequelize.Model {
    static init(sequelize) {
        return super.init({},
            {
            sequelize,
            timestamps : true,
            modelName : "LikeSmallComment",
            tableName : "likeSmallComment",
            charset : "utf8",
            collate : "utf8_general_ci"
        });
    }

    static associate(db) {
        db.LikeSmallComment.belongsTo(db.User, {foreignKey : "user_id", targetKey : "id"}); // likePost.user_id == users.id
        db.LikeSmallComment.belongsTo(db.SmallComment, {foreignKey : "comment_id", targetKey : "id"}); // likePost.user_id == users.id
    }
}

module.exports = {SmallComment, LikeSmallComment};