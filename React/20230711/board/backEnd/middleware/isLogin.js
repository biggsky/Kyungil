const jwt = require("jsonwebtoken");

exports.isLogin = (req,res,next) =>{
    // const {access_token} = req.session;
    // console.log("access_token 값 : ", req.session);

    const access_token = req.cookies.access_token;
    console.log(access_token);

    jwt.verify(access_token, process.env.ACCESS_TOKEN_KEY, (err, acc_decoded)=>{
        if(err){
            res.send("토큰 발급시간 만료!");
        }else{
            req.acc_decoded = acc_decoded;
            next();
        }
    });

}