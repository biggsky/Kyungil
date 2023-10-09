const config = require("./config");
const Sequelize = require("sequelize");

// 
class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            // name : {
            //     type: Sequelize.STRING(20),
            //     allowNull : false,
            // },
            user_id : {
                type: Sequelize.STRING(20),
                allowNull : false,
            },
            user_pw : {
                type: Sequelize.STRING(300),
                allowNull : false,
            },
            user_nick : {
                type: Sequelize.STRING(20),
                allowNull : false,
            },
            grade : {
                type : Sequelize.INTEGER,
                allowNull : false,
            },
            admin : {
                type : Sequelize.INTEGER,
                allowNull : false,
                // 0은 관리자, 1은 회원수락상태, 2는 회원요청상태
            }
        },{
            sequelize,
            timestamps : true,
            underscored: false,
            modelName : "User",
            tableName : "users",
            paranoid : false,
            charset : "utf8",
            collate : "utf8_general_ci",
        });
    }
    static associate(db){
        // db.User.hasMany(db.Post, {foreignKey: "user_id", sourceKey : "id"});
    }
}

// ----

class Post extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            title : {
                type: Sequelize.STRING(20),
                allowNull : false,
            },
            message: {
                type: Sequelize.STRING(200),
                allowNull : false,
            },
            user_id: {
                type: Sequelize.STRING(20),
                allowNull : false,
            }
        },{
            sequelize,
            timestamps : true,
            modelName : "Post",
            tableName : "posts",
            paranoid : false,
            charset : "utf8",
            collate : "utf8_general_ci",
        });
    }
    static associate(db){
        // db.Post.belongsTo(db.User, {foreignKey: "user_id", targetKey : "id"});
    }
}


// 

class Comment extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            comment_id :{
                type : Sequelize.INTEGER,
                allowNull : false,
            },
            userid : {
                type: Sequelize.STRING(20),
                allowNull : false,
            },
            message: {
                type: Sequelize.STRING(200),
                allowNull : false,
            }
        },{
            sequelize,
            timestamps : true,
            modelName : "Comment",
            tableName : "comments",
            paranoid : false,
            charset : "utf8",
            collate : "utf8_general_ci",
        });
    }
    static associate(db){
        // db.Post.belongsTo(db.User, {foreignKey: "user_id", targetKey : "id"});
    }
}

// 

const sequelize = new Sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
);

const db = {};
db.sequelize = sequelize;
db.User = User;
db.Post = Post;
db.Comment = Comment;
User.init(sequelize);
Post.init(sequelize);
Comment.init(sequelize);
User.associate(db);
Post.associate(db);
Comment.associate(db);

module.exports = db;


