const router = require("express").Router();
const {signUp, login, admin1, delete1 , insert1, edit, delete2, comment1, mypage1, nickupdate} = require("../controllers/Controller");
const {User, Post, Comment} = require("../models");

router.get("/", (req,res)=>{
    res.render("signUp");
});

router.post("/signUp", signUp);

router.get("/login", (req,res)=>{
    res.render("login");
})

router.post("/login", login);

router.get("/admin", async (req,res)=>{
    const user1 = await User.findAll({where:{admin:2}});
    res.render("admin", {data: user1}); 
});

router.get("/admin/:id", admin1);

router.get("/delete/:id", delete1);

router.get("/board", async (req,res)=>{
    // let x= req.params.id;
    // const data = await User.findOne({where:{user_id:}});
    const data2 = await Post.findAll({});
    // console.log("맞니니니닌", data2);
    const ses = req.session.user_id;
    //  복호화가 이미 된 상태
    // console.log("se 잘들어왔니", ses);
    res.render("board", {data: ses, data2: data2});
});

router.get("/insert", (req,res)=>{
    // let x= req.params.id;
    const ses = req.session.user_id;
    console.log(ses);
    res.render("insert", {data: ses});
});

router.post("/insert1", insert1);

router.get("/view/:id", async (req,res)=>{
    let x= req.params.id;
    const data = await Post.findOne({where:{id:x}});
    const data22 = await Comment.findAll({where:{comment_id:x}});
    res.render("view", {data:data, data22: data22});
});

router.post("/edit/:id", edit)

router.get("/view/delete/:id", delete2);

router.post("/comment/:id", comment1);

router.get("/mypage",  mypage1);

router.post("/nickupdate", nickupdate);

router.get("/logoff", (req,res)=>{
    // delete req.session.user_id;
    // delete req.session.access_token;
    res.clearCookie("connect.sid");
    res.redirect("/login");
});

module.exports = router;