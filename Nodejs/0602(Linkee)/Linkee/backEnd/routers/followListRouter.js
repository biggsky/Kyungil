const router = require("express").Router();
const {isLogin} = require("../middleware/isLogin");

router.get("/",isLogin,(req,res)=>{
    res.sendFile("/home/ubuntu/frontEnd/page/followList.html");
});

module.exports = router;