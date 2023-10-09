const {idsearch, insert} = require("../models");
const bcrypt = require("bcrypt");

const createHash = (user_pw)=>{
    return new Promise((resolve, reject)=>{
        bcrypt.hash(user_pw, 10, (err, data)=>{
            if(err) reject(err)
            resolve(data);
        });
    });
}

const compare = (user_pw, hash)=>{
    return new Promise((resolve, reject)=>{
        bcrypt.compare(user_pw, hash, (err, data)=>{
            resolve(data);
        });
    });
}

exports.signup = async (req,res)=>{
    const {user_id, user_pw} = req.body;
    try {
        const hash = createHash(user_pw);
        await insert(user_id, hash);
        res.redirect("/login");
    } catch (error) {
        console.log(error);
    }
}

exports.login = async (req,res)=>{
    const {user_id, user_pw} = req.body
    try {
        const val = await idsearch(user_id);
        if(!val?.user_id){
            return res.send("아이디 없음");
        }
        const compare_pw = await compare(user_pw, val.user_pw);
        if(!compare_pw){
            return res.send("비밀번호 틀림");
        }
        res.redirect("/bulletin");
    } catch (error) {
        console.log(error);
    }
}

