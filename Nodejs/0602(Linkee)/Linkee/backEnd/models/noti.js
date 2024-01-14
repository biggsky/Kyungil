const Sequelize = require("sequelize");

class Noti extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            receiverID : { // 알림 받는 사람의 아이디 (users.id)
                type : Sequelize.INTEGER,
                allowNull : false
            },
            senderID : { // 알림 보내는 사람의 아이디 (users.id)
                type : Sequelize.INTEGER,
                allowNull : false
            },
            followNoti : { // 팔로우 알림
                type : Sequelize.INTEGER
            },
            bigCommentNoti : { // 댓글 알림 (해당 게시글의 아이디 posts.id)
                type : Sequelize.INTEGER
            },
            smallCommentNoti : { // 대댓글 알림 (해당 댓글의 아이디 bigComments.id)
                type : Sequelize.INTEGER
            },
            likePostNoti : { // 게시물 좋아요 알림 (해당 게시글의 아이디 posts.id)
                type : Sequelize.INTEGER
            },
            likeBigNoti : { // 댓글 좋아요 알림 (해당 댓글 아이디 bigComments.id)
                type : Sequelize.INTEGER
            },
            likeSmallNoti : { // 대댓글 좋아요 알림 (해당 대댓글 아이디 smallComments.id)
                type : Sequelize.INTEGER
            }
            
        }, {
            sequelize,
            timestamps : true,
            modelName : "Noti",
            tableName : "notis",
            charset : "utf8",
            collate : "utf8_general_ci"
        });
    }
}

module.exports = {Noti};