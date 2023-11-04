const router = require("express").Router();
const {loginBtnClick} = require("../controllers/mainControllers");

router.post("/loginBtnClick", loginBtnClick);

module.exports = router;
