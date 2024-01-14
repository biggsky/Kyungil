const router = require("express").Router();

const {isLogin} = require("../middleware/isLogin");
// levelCheck 가져오기

const {uploadImg} = require("../middleware/uploadImg");
const {insertPost, getOriginalPost, editPost} = require("../controllers/insertCon");

router.post('/', isLogin, uploadImg.single("img"), insertPost);

router.get('/editPost/:id', isLogin, getOriginalPost);
router.post('/editPost/:id', isLogin, uploadImg.single("img"), editPost);


module.exports = router;