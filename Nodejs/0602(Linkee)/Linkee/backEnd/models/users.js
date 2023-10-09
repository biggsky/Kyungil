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
            user_name : {
                type : Sequelize.STRING(10),
                allowNull : false,
            },
            nickname : {
                type : Sequelize.STRING(10),
                allowNull : false,
            },
            profile_img : {
                type : Sequelize.STRING(100),
                allowNull : true,
            },
            profile_info : {
                type : Sequelize.STRING(100),
                allowNull : true,
            },
            level : {
                type : Sequelize.INTEGER,
                allowNull : false,
            },
            follower : {
                type : Sequelize.TEXT,
                allowNull : false,
            },
            following : {
                type : Sequelize.TEXT,
                allowNull : false,
            },
        },{
            sequelize : seq,
            timestamps : true, // 추가 수정 자동 생성
            modelName : "User", // 노드 프로젝트에서 사용할 이름(조회 했을때 보임)
            tableName : "users", // 데이터 베이스 테이블의 이름
            paranoid : true, // 삭제 시간 표기 할거임?
            charset : "utf8", // 인코딩 방식은 꼭 작성 해야한다.
            collate : "utf8_general_ci", // 인코딩 방식은 꼭 작성 해야한다.
        });
    }

    static associate(db) {
        db.User.hasMany(db.Post, {foreignKey : "user_id", sourceKey : "id"});
        db.User.hasMany(db.LikePost, {foreignKey : "user_id", sourceKey : "id"});
        db.User.hasMany(db.BigComment, {foreignKey : "user_id", sourceKey : "id"});
        db.User.hasMany(db.LikeBigComment, {foreignKey : "user_id", sourceKey : "id"});
        db.User.hasMany(db.SmallComment, {foreignKey : "user_id", sourceKey : "id"});
        db.User.hasMany(db.LikeSmallComment, {foreignKey : "user_id", sourceKey : "id"});
    }
}

class LoginCount extends Sequelize.Model{
    static init(seq){
        return super.init({
            date : {
                type : Sequelize.STRING(50),
                allowNull : false,
            },
            cnt : {
                type : Sequelize.INTEGER,
                allowNull : false,
            }
        },{
            sequelize : seq,
            timestamps : false,
            underscored : false,
            modelName : "LoginCount",
            tableName : "logincount",
            charset : "utf8",
            collate : "utf8_general_ci"
        });
    }
}

module.exports = {User, LoginCount};