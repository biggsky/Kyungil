const {User, Post, BigComment, Noti, SmallComment} = require("../models");

// 팔로우 알림
exports.addFollowNoti = async (req, res) => {
    // 팔로우 보낸 사람 (현재 로그인 된 유저)
    const {user_id} = req.acc_decoded;
    const sender = await User.findOne({where : {user_id}});
    // 팔로우 받는 사람
    const {id} = req.params;

    try {
        await Noti.create({
            receiverID : id,
            senderID : sender.id,
            followNoti : "1"
        })
    } catch (error) {
        console.log(error);
    }
}
// 댓글 알림
exports.addBigCommentNoti = async (req, res) => {
    // 댓글 작성한 사람 (현재 로그인 된 유저)
    const {user_id} = req.acc_decoded;
    const sender = await User.findOne({where : {user_id}});
    // 게시글 id
    const {id} = req.params;
    // 게시글을 작성한 사람
    const post = await Post.findOne({where : {id}});
    const receiver = post.user_id;

    try {
        await Noti.create({
            receiverID : receiver,
            senderID : sender.id,
            bigCommentNoti : id
        })
    } catch (error) {
        console.log(error);
    }
}
// 대댓글 알림
exports.addSmallCommentNoti = async (req, res) => {
    // 대댓글 작성한 사람 (현재 로그인 된 유저)
    const {user_id} = req.acc_decoded;
    const sender = await User.findOne({where : {user_id}});
    // 댓글 id
    const {id} = req.params;
    // 댓글을 작성한 사람
    const comment = await BigComment.findOne({where : {id}});
    const receiver = comment.user_id;

    try {
        await Noti.create({
            receiverID : receiver,
            senderID : sender.id,
            smallCommentNoti : id
        })
    } catch (error) {
        console.log(error);
    }
}
// 게시물 좋아요 알림
exports.likePostNoti = async (req, res) => {
    // 좋아요 누른 사람 (현재 로그인 된 유저)
    const {user_id} = req.acc_decoded;
    const sender = await User.findOne({where : {user_id}});
    // 게시물 id
    const {id} = req.params;
    // 게시물을 작성한 사람
    const comment = await Post.findOne({where : {id}});
    const receiver = comment.user_id;

    try {
        await Noti.create({
            receiverID : receiver,
            senderID : sender.id,
            likePostNoti : id
        })
    } catch (error) {
        console.log(error);
    }
}
// 댓글 좋아요 알림
exports.likeBigNoti = async (req, res) => {
    // 좋아요 누른 사람 (현재 로그인 된 유저)
    const {user_id} = req.acc_decoded;
    const sender = await User.findOne({where : {user_id}});
    // 댓글 id
    const {id} = req.params;
    // 댓글을 작성한 사람
    const comment = await BigComment.findOne({where : {id}});
    const receiver = comment.user_id;

    try {
        await Noti.create({
            receiverID : receiver,
            senderID : sender.id,
            likeBigNoti : id
        })
    } catch (error) {
        console.log(error);
    }
}
// 대댓글 좋아요 알림
exports.likeBigNoti = async (req, res) => {
    // 좋아요 누른 사람 (현재 로그인 된 유저)
    const {user_id} = req.acc_decoded;
    const sender = await User.findOne({where : {user_id}});
    // 대댓글 id
    const {id} = req.params;
    // 대댓글을 작성한 사람
    const comment = await SmallComment.findOne({where : {id}});
    const receiver = comment.user_id;

    try {
        await Noti.create({
            receiverID : receiver,
            senderID : sender.id,
            likeSmallNoti : id
        })
    } catch (error) {
        console.log(error);
    }
}

exports.getNoti = async (req, res) => {
    const {user_id} = req.acc_decoded;
    const user = await User.findOne({where : {user_id}});

    try {
        // 로그인 된 유저가 받은 모든 알림
        const noti = await Noti.findAll({where : {receiverID : user.id}});

        // 모든 유저, 모든 게시물
        const users = await User.findAll();
        const posts = await Post.findAll();

        console.log(users);

        if(noti.length == 0) { // 알림이 없으면 0 보냄
            res.json("0");

        }else {
            res.json({noti, user, users, posts});
        }
        
    } catch (error) {
        console.log(error);
    }
}

exports.deleteNoti = async (req, res) => {
    const {user_id} = req.acc_decoded;
    try {
        const user = await User.findOne({where : {user_id}});
        await Noti.destroy({where : {receiverID : user.id}});
        res.json("1");
    } catch (error) {
        console.log(error);
    }
}