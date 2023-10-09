const router = require("express").Router();
const { isLogin } = require("../controllers/isLogin");
const { SavePlan, GetPlan } = require("../controllers/planController");

router.post("/save", isLogin, SavePlan);
// router.get("/getPic", getAttractionPicture);

router.post("/getPlan", isLogin, GetPlan);

module.exports = router;
