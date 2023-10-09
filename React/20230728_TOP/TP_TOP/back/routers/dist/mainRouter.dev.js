"use strict";

var router = require("express").Router();

var _require = require("../controllers/mainControllers"),
    testcon = _require.testcon;

router.get("/", testcon); // router.get("/getPic", getAttractionPicture);

module.exports = router;