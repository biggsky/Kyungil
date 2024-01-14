const router = require("express").Router();
const dot = require("dotenv").config();
const jwt = require("jsonwebtoken");

// 로그인했다고 가정할때 토큰 생성
router.post("/login", (req,res)=>{
    const name = "name1";
    const key = process.env.KEY;
    let token = jwt.sign({
        type:"JWT",
        nam : name
    }, key,{
        expiresIn : "1m",
        issuer : name
    });
    req.session.token = token;
    res.render("page1");
});


router.post("/login2", (req,res)=>{
    const token = req.session.token;
    const key = process.env.KEY;
    console.log("key: ",key);
    jwt.verify(token,key,(err,decoded)=>{
        if(err){
            console.log("로그인 유지 실패");
            res.send("토큰 썩음");
        }else{
            console.log("로그인 유지중");
            console.log(decoded);
            console.log(decoded.type);
            console.log(decoded.nam);
            console.log("----------");
            console.log(decoded.exp);
            console.log(decoded.iss);
            res.send(decoded);
        }
    });
});

module.exports = router;
