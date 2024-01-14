const router = require("express").Router();
const { verify } = require("jsonwebtoken");
// verify 함수가 내보내는 것이 함수 자체이기 때문에 
// 이를 중괄호로 감싸 객체를 생성하지 않고 바로 함수를 가져올 수 있다.
// jsonwebtoken 이라는 곳에서 module.exports = { verfiy} 이런식으로 보낸건가요?

// ?????????????????????????
const {Login, verifyLogin} = require("../controllers/usersController")


router.get("/", (req,res)=>{
    res.render("login");
});

router.post("/", Login)

// 로그인 상태에서 요청해야 하는 작업은
router.get("/mypage", verifyLogin, (req,res)=>{
    res.send("로그인 상태고 마이페이지 보여줄게");
});

module.exports = router;

