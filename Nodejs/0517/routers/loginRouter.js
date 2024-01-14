const {login} = require("../controllers/userControllers");
const router = require("express").Router();


router.get("/", (req,res)=>{
    res.render("login");
});

router.post("/", login);

module.exports = router;