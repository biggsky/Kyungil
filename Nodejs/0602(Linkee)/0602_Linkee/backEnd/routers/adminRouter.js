const router = require("express").Router();
const {signUp1, login1, idCheck, nicknameCheck, loginalert, passwordalert, admin1, admin2, levelchange, deny, dayCnt, unAuth, postCnt} = require("../controllers/userCon");

// admin 
router.get("/admin1", admin1);
router.get("/admin2", admin2);
router.get("/levelchange/:id", levelchange);
router.get("/deny/:id", deny);

router.get("/dayCnt", dayCnt);
router.get("/postCnt", postCnt);

router.get("/unAuth/:id", unAuth);

module.exports = router;