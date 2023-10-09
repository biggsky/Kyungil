const router = require("express").Router();

const {isLogin} = require("../middleware/isLogin");
// levelCheck 가져오기

const {getNoti, deleteNoti} = require("../controllers/notiCon");

router.get('/', isLogin, getNoti);

router.get('/delBtn', isLogin, deleteNoti);

module.exports = router;