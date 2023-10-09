const {userInsert, userSelect, userRefresh} = require("../models/config.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { verify } = require("jsonwebtoken");

const createHash = (password)=>{
    return new Promise((resolve, reject)=>{
        bcrypt.hash(password, 10, (err,data)=>{
            if(err) reject(err);
            resolve(data);
        });
    });
}

const compare = (password, hash) =>{
    return new Promise((resolve, reject)=>{
        bcrypt.compare(password, hash, (err,same)=>{
            resolve(same);
            // same은 비교결과
        });
    });
}

exports.signup = async (req,res)=>{
    const {user_id, user_pw} = req.body;
    try {
        const hash = await createHash(user_pw);
        await userInsert(user_id, hash);
        res.redirect("/login");
    } catch (error) {
        console.log(error);
    }
}

exports.login = async (req,res)=>{
    const {user_id, user_pw} = req.body;
    try {
        const data = await userSelect(user_id);
        if(!data?.user_id){
            return res.send("아이디 없음");
        }

        const compare_pw = await compare(user_pw, data.user_pw);
        if(!compare_pw){
            return res.send("비밀번호 틀림");
        }
        // 액세스토큰--------------
        const accessToken = jwt.sign({
            user_id : data.user_id
        }, process.env.ACCESS_TOKEN_KEY,{
            expiresIn : "5s",
        });
        // refresh token 발급
        const refreshToken = jwt.sign({
            user_id : data.user_id
        }, process.env.REFRESH_TOKEN_KEY, {
            expiresIn : "20s"
        });

        await userRefresh(user_id, refreshToken);
        req.session.access_token = accessToken;
        req.session.refresh_token = refreshToken;
        res.send({access : accessToken, refresh : refreshToken});


    } catch (error) {
        console.log(error);
    }
}

// 유저 토큰 검증
exports.verifyLogin = async (req, res, next)=>{
    // next 함수를 실행시켜주면 다음 미들웨어로 이동
    // next();
    // res.send("여기서 끝");

    const {access_token, refresh_token} = req.session;
    jwt.verify(access_token, process.env.ACCESS_TOKEN_KEY, (err, acc_decoded)=>{
        if(err){
            // 썩은 토큰이면
            jwt.verify(refresh_token, process.env.REFRESH_TOKEN_KEY, async (err, ref_decoded)=>{
                if(err){
                    console.log("refresh token 만료");
                    res.send("다시 로그인 하세욥");
                }else{
                    const data = await userSelect(ref_decoded.user_id);
                    if(data.refresh == refresh_token){
                        const accessToken = jwt.sign({
                        user_id : ref_decoded.user_id
                        },process.env.ACCESS_TOKEN_KEY,{
                        expiresIn : "5s"
                        })
                        req.session.access_token = accessToken;
                        console.log("access_token 재발급");
                        next();
                    }else{
                        res.send("중복 로그인 방지");
                    }
                }
            });
        }else{
            console.log("로그인 정상 유지중");
            next();
        }
    });
}