const router = require("express").Router();
const {signUp1, login1, idCheck, nicknameCheck, loginalert, passwordalert, admin1, admin2, levelchange, deny, dayCnt, unAuth} = require("../controllers/userCon");

router.get("/loginalert/:id", loginalert);
router.get("/passwordalert", passwordalert);


module.exports = router;