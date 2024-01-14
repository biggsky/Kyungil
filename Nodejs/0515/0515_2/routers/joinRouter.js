const router = require("express").Router();
const {SignUp} = require("../controllers/usersController");

router.get("/", (req,res)=>{
    res.render("join");
});

router.post("/", SignUp)

module.exports = router;

// SignUp =>  
// exports.SignUp = async (req,res)=>{
//     const {user_id, user_pw } = req.body;
//     try {
//         await userInsert(user_id, user_pw);
//         res.redirect("/login");
//     } catch (error) {
//         console.log(error);
//     }
// }
// 라고 보면됨.


