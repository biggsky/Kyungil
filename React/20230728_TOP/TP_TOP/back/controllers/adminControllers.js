const {User} = require("../models")

// 모든 유저 정보 가져오기
exports.getUsers = async (req, res) => {
    try {
        const data = await User.findAll();
        res.json(data);
    } catch (error) {
        console.log(error)
    }
}

// 승인
exports.authUser = async (req, res) => {
    const user_id = req.params.id;
    try {
        await User.update({is_accept : true}, {where : {user_id}})
        res.json("success")
    } catch (error) {
        console.log(error);
    }
}

// 강등
exports.unauthUser = async (req, res) => {
    const user_id = req.params.id;
    try {
        await User.update({is_accept : false}, {where : {user_id}})
        res.json("success")
    } catch (error) {
        console.log(error);
    }
}

// 거절 & 삭제
exports.deleteUser = async (req, res) => {
    const user_id = req.params.id;
    try {
        await User.destroy({where : {user_id}})
        res.json("success")
    } catch (error) {
        console.log(error);
    }
}