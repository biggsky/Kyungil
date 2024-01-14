const router = require("express").Router();
const {loginClick1, signUpClick1, boardBtnClick1, listget1, listget2, boardUpdate1, boardDelete1} = require("../controllers/mainControllers")

// const {isLogin} = require("../")

router.post("/loginBtnClick", loginClick1);

router.post("/signUpBtnClick", signUpClick1);

router.post("/boardBtnClick", boardBtnClick1);

router.get("/listget", listget1);

router.get("/listget2/:id", listget2);

router.post("/boardUpdate/:id", boardUpdate1);

router.post("/boardDelete/:id", boardDelete1);

module.exports = router;