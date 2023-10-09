const router = require("express").Router();
const {loginClick} = require("../controllers/loginControllers");
const { isLogin } = require("../controllers/isLogin");

const {
  SaveUserInfo,
  ValidateDuplicateNickName,
  ValidateDuplicateUserId,
  Logout,GetLoginUser
} = require("../controllers/SignUpControllers");

// 회원가입
router.post("/duplicateId", ValidateDuplicateUserId);
router.post("/duplicateNickName", ValidateDuplicateNickName);
router.post("/signUp", SaveUserInfo);
router.post("/logout", isLogin, Logout);
router.get('/loginUser',isLogin,GetLoginUser)
module.exports = router;

// 로그인
router.post("/login", loginClick);

module.exports = router;
