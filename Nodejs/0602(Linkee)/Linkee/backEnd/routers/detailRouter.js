const router = require("express").Router();
const {isLogin} = require("../middleware/isLogin");

const {getProfile, getcontents, delBtn, getlike, likeClick, bigComment, smallComment1, c_comment_nick1, likebigcomment1, getbiglike1, likesmallComment1,loginUser,allBigComments} = require("../controllers/mainCon");
const { SmallComment } = require("../models");

router.get("/",isLogin,(req,res)=>{
    res.sendFile("/home/ubuntu/frontEnd/page/detail.html");
});

router.get('/getProfile', isLogin, getProfile);

router.get('/getcontents/:id', isLogin, getcontents);

router.get('/delBtn/:id', delBtn);

router.get('/getlike', isLogin, getlike);

router.get('/likeClick', isLogin, likeClick);

// 댓글
router.get('/bigComment/:id', isLogin, bigComment);

router.get('/smallComment/:id', isLogin, smallComment1);

router.get('/c_comment_nick', isLogin, c_comment_nick1);

router.get('/likebigcomment', isLogin, likebigcomment1);

router.get('/getbiglike', isLogin, getbiglike1);

router.get('/likesmallComment', isLogin, likesmallComment1);

router.get("/loginUser",isLogin,loginUser);

router.get("/allComments",isLogin,allBigComments);

module.exports = router;

