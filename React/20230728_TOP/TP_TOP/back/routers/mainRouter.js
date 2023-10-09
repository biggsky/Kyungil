const router = require("express").Router();
const {
  testcon,
  // getAttractionPicture,
} = require("../controllers/mainControllers");

router.get("/", testcon);
// router.get("/getPic", getAttractionPicture);
module.exports = router;
