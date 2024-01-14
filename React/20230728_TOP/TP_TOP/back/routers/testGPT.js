const { saveUserPlan } = require("../controllers/gptControllers");

const router = require("express").Router();
router.post("/", saveUserPlan);
router.get("/test", (req, res) => {
  res.json({ name: "good" });
});
module.exports = router;
