// const { sign } = require("crypto");
const {signup} = require("../controllers/userControllers");
const router = require("express").Router();

router.get("/", (req,res)=>{
    res.render("join");
});

router.post("/", signup);

// 라우터는 띄워주는 역할

module.exports = router;