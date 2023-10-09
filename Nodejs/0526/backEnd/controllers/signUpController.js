const {User} = require("../models");
const bcrypt = require("bcrypt");

exports.signUp = async (req,res) =>{
    try {
        const {name, age, user_id, user_pw} = req.body;
        const user = await User.findOne({where:{user_id}});
        if(user != null){
            // 유저 조회 된거니까 중복 회원 가입 막음
            return res.send("중복 회원가입임~");
        }

        const hash = bcrypt.hashSync(user_pw, 10);
        await User.create({
            name,
            age,
            user_id,
            user_pw : hash
        });
        res.redirect("http://127.0.0.1:5500/0526/frontEnd/login.html");
    } catch (error) {
        console.log(error);
    }
}