const Sequelize = require("sequelize");

class Post extends Sequelize.Model{
    // Model 메서드는 Sequelize에서 제공하는 모델 클래스를 생성하기 위한 기본 클래스.
    static init(sequelize){
        return super.init({
            msg: {
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
            collate : "utf8_general_ci"
        });
    }
    static associate(db){
        db.Post.belongsTo(db.User, {foreignKey : "user_id", targetKey : "id"});
    }
}

module.exports = Post;