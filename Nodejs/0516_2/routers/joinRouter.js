const router = require("express").Router();
const {SignUp} = require("../controllers/usersController");

router.get("/", (req,res)=>{
    res.render("join");
});

router.post("/", SignUp);
// 동일
// router.post("/", (req,res)=>{

// });

module.exports = router;