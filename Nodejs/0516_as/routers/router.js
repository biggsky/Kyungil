const router = require("express").Router();
const {login, signup, verifyLogin} = require("../controllers/usersController");
const cookie = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { verify } = require("jsonwebtoken");

router.get("/login", (req,res)=>{
    res.render("login");
});
router.get("/join", (req,res)=>{
    res.render("join");
});

router.post("/login", login);

router.post("/join", signup);

router.post("/refresh", (req,res)=>{
    if(req.cookies?.refresh){
        const refreshToken = req.cookies.refresh;
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY, (err, decode)=>{
            // err가 있으면 다시 로그인 하세요~
            if(err){
                res.send("로그인을 다시 해주세요");
            }else{
                const accessToken = jwt.sign({
                    id : user.id
                },process.env.ACCESS_TOKEN_KEY,{
                    expiresIn : "20s"
                });
                res.render("join", {accessToken});
            }
        });
    }else{
        res.send("로그인 해주세요");
    }
});

router.get("/abc", verifyLogin, (req,res)=>{
    res.send("로그인 상태고 마이페이지 보여줄게");
});

module.exports = router;