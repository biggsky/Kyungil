const {User, Post, LikePost} = require("../models");
const {Op} = require("sequelize");

exports.viewAll = async (req, res) => {
    try {
        const users = await User.findAll({where : {level : 1}});
        const posts = await Post.findAll();

        res.json({users, posts});
    } catch (error) {
        console.log(error);
    }
}

exports.searchName = async (req, res) => {
    const {user_id} = req.acc_decoded;
    console.log(user_id);
    const {nickname} = req.body;
    console.log("검색한 닉네임 : ", nickname);

    try {
        const user = await User.findOne({where : {nickname}});

        if(user_id === nickname) {
            // 검색한 이름과 로그인 된 유저 이름이 동일하면 마이페이지로 이동
            res.json("same");
        }else {
            // 검색한 유저 페이지로 이동
            res.json(user);
        }
    } catch (error) {
        console.log(error);
    }
}

exports.searchedPost = async (req, res) => {
    const {id} = req.params;
    console.log(id);
    try {
        const posts = await Post.findAll({where: {content: {[Op.like]: `%#${id} %`,}}});
        console.log(posts);
        const userAll = await User.findAll();

        res.json({userAll, posts});

    } catch (error) {
        console.log(error);
    }
}

exports.searchUser = async (req, res) => {
    const {user_id} = req.acc_decoded;
    const {id} = req.params;
    try {
        const loginUser = await User.findOne({where : {user_id}});
        const user = await User.findOne({where : {nickname : id}});
        const posts = await Post.findAll({where : {user_id : user.id}});
        res.json({loginUser, user, posts});
    } catch (error) {
        console.log(error);
    }
}