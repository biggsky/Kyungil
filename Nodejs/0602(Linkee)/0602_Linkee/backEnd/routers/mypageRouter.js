const router = require("express").Router();

const {isLogin} = require("../middleware/isLogin");
const {myPost} = require("../controllers/mypageCon");

router.get("/mypost",isLogin,myPost);

module.exports = router;