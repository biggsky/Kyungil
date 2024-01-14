const router = require("express").Router();
const {isLogin} = require("../middleware/isLogin");

const {signUp, login, boardinsert1, boardlist1, detailfind1, detailedit1, detaildelete1} = require("../controllers/mainController");

router.post("/register", signUp);

router.post("/login", login);

router.post("/boardinsert", isLogin, boardinsert1);

// 게시판 글들 가져오기
router.get("/boardlist", boardlist1);

router.get("/detailfind/:id", isLogin, detailfind1);

router.post("/detailedit", isLogin, detailedit1);

router.post("/detaildelete", isLogin, detaildelete1);


module.exports = router;