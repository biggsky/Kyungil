// jsonwebtoken 설치
// dotenv 설치
// npm i jsonwebtoken dotenv

const router = require("express").Router();
const dot = require("dotenv").config();
const jwt = require("jsonwebtoken");

router.post("/login", (req,res)=>{
    const name = "soon";
    const key = process.env.KEY
    let token = jwt.sign({
        // 토큰 타입
        type : "JWT",
        name : name,
    }, key,{
        // 토큰의 유효시간
        expiresIn : "3m",
        // 토큰 발급자
        issuer : name
    });
    console.log("token: ", token);
    req.session.token = token;//???????????????????????
    res.render("page2");
});

// 다른 곳에 로그인했으면 로그인을 중복 로그인을 방지해주자.
// 데이터베이스에 액세스토큰을 저장하고
// 로그인을 하면 액세스토큰을 갱신 시켜주는 작업

module.exports = router;


