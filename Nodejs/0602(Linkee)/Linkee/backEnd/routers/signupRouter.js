const router = require("express").Router();
const {signUp1, login1, idCheck, nicknameCheck, loginalert, passwordalert, admin1, admin2, levelchange, deny, dayCnt, unAuth} = require("../controllers/userCon");

const path = require("path");
router.get("/",(req,res)=>{
    const filePath = "/home/ubuntu/frontEnd/page/signup.html";
    res.sendFile(filePath);
});

router.post("/", signUp1);

router.get("/idCheck/:id", idCheck);
router.get("/nicknameCheck/:id", nicknameCheck);


module.exports = router;