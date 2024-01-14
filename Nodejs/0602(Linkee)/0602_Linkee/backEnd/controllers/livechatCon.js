const {User, Livechat} = require("../models");

// 맞팔 유저가 로그인 되어있는지 확인
exports.loginUser = async (req, res) => {
    const {user_id} = req.acc_decoded;
    try {
        const user = await User.findOne({where : {user_id}});
        const userAll = await User.findAll();

        res.json({user, userAll});
    } catch (error) {
        console.log(error);
    }
}