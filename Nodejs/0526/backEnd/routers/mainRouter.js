const router = require("express").Router();
const {isLogin} = require("../middleware/loginMiddleware");
const {Login, viewUser, viewBoard, viewInsertPage, boardInsert, boardView, del1, edit1, mypage1, del2} = require("../controllers/loginController");
const {signUp} = require("../controllers/signUpController");

// router.get("/", isLogin, viewBoard);


// ----------
router.post("/signUp", signUp);
// ----------


// ----
router.post("/login", Login);

router.get("/login/view", isLogin, viewUser);
// ----

router.post("/insert", boardInsert);


router.get("/boardview/:id", isLogin, boardView);

router.get("/del/:id", isLogin, del1);

router.get("/edit/:id", isLogin, edit1);

router.get("/mypage", isLogin, mypage1);

router.get("/delete/:id", isLogin, del2);

module.exports = router;
