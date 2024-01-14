const Sequelize = require("sequelize");

class Post extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            content : {
                type : Sequelize.TEXT,
                allowNull : false
            },
            likes : {
                type : Sequelize.INTEGER(255)
            },
            view_cnt : {
                type : Sequelize.INTEGER(255)
            },
            img : {
                type : Sequelize.STRING(200)
            }
        }, {
            sequelize,
            timestamps : true,
            modelName : "Post",
            tableName : "posts",
            charset : "utf8",
            collate : "utf8_general_ci",
        });
    }

    static associate(db) {
        db.Post.belongsTo(db.User, {foreignKey : "user_id", targetKey : "id"}); // posts.user_id == users.id
        db.Post.hasMany(db.LikePost, {foreignKey : "post_id", sourceKey : "id"}); // posts.id == likePost.post_id
        db.Post.hasMany(db.BigComment, {foreignKey : "post_id", sourceKey : "id"}); // posts.id == bigComments.post_id
    }
}

class LikePost extends Sequelize.Model {
    static init(sequelize) {
        return super.init({},
            {
            sequelize,
            timestamps : true,
            modelName : "LikePost",
            tableName : "likePost",
            charset : "utf8",
            collate : "utf8_general_ci"
        });
    }

    static associate(db) {
        db.LikePost.belongsTo(db.User, {foreignKey : "user_id", targetKey : "id"}); // likePost.user_id == users.id
        db.LikePost.belongsTo(db.Post, {foreignKey : "user_id", targetKey : "id"}); // likePost.user_id == users.id
    }
}

module.exports = {Post, LikePost};