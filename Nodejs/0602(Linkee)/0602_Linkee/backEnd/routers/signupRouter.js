const router = require("express").Router();
const {signUp1, login1, idCheck, nicknameCheck, loginalert, passwordalert, admin1, admin2, levelchange, deny, dayCnt, unAuth} = require("../controllers/userCon");

router.post("/", signUp1);

router.get("/idCheck/:id", idCheck);
router.get("/nicknameCheck/:id", nicknameCheck);


module.exports = router;