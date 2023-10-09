const express = require("express");
const {c_register, c_idCheck, c_mylist, createBulletin, viewBulletin, addcomments, heartInsert} = require("../controllers/posts");

const router = express.Router();

// 예비
const mysql = require("../models/config");
const { idCheck } = require("../models/posts");

router.get("/register", async(req,res)=>{
    res.render("register");
});

router.post("/register1", async (req, res)=>{
    try {
        await c_register(req,res);
    } catch (error) {
        console.log(error);
    }
});

router.post("/login", async(req, res)=>{
    try {
        await c_idCheck(req,res);
    } catch (error) {
        console.log(error);
    }
});


router.get("/mypage", async(req,res)=>{
    // res.render("mypage");
    try {
        await c_mylist(req,res);
        
        // const [data] = await mysql.query("select * from bulletin where name=?",["1"]);
        // res.render("mypage", {data});
        // await c_mylist(req,res);
    } catch (error) {
        console.log(error);
    }
});

router.get("/bulletin", async(req, res)=>{
    try {
        // const blist1 = await viewBulletin(req,res);
        const [blist1] = await mysql.query("SELECT * from bulletin");
        res.render("bulletin", {blist1});
        // console.log("얌", {blist1});
        // res.redirect("/bulletin");
        // res.render("bulletin");
    } catch (error) {
        console.log("게시판 리스트 보내는거 실패2");        
    }
});




router.get("/bread/:id", async(req,res)=>{
    // let urlt = req.originalUrl;
    // console.log(urlt);

    // let [one] = "1";
    // res.render("bread", {one});
    // let hash1 = location.hash;
    // console.log(hash1);
    const {id} = req.params;
    console.log(id);

    try {
        const [content1] = await mysql.query("SELECT * from bulletin WHERE b_id=?;", [id]);
        const [c_list] = await mysql.query("SELECT * from comments WHERE b_id=?;", [id]);
        const [onoff] = await mysql.query("SELECT * from b_like WHERE (b_id=? && user_id=?)", ["아이디2", id]);
        // console.log("확인중", onoff);
        // if(onoff == ""){
        //     console.log("비웠음");
        // }
        
        // console.log(content1);
        // console.log(c_list);
        res.render("bread", {content1, c_list});
    } catch (error) {
        console.log("상세보기 불러오기 에러");
    }
});

router.post('/bread2', (req, res) => {
    const data = req.body.data;
    // const data = "이거야?";
    console.log(data);
     
    // 세션 값으로 판별해서
    res.json(data);
    // res.json({result: data});
    // 다시 응답을 보내줌
  });

router.post("/bread/:id", async(req,res)=>{
    const {id} = req.params;
    // console.log("여기?",id);
    await addcomments(req,res);
    res.redirect("/bread/"+id);
});

router.post("/heart", async(req, res)=>{
    try {
        await heartInsert(req, res);
    } catch (error) {
        console.log("에러남");
    }
});

router.get("/", async (req,res)=>{
    try {
        const data = await ViewPostAll(req, res);
        res.render('main', {data});
    } catch (error) {
        console.log("게시글 리스트 화면 그리다 에러남~");
    }
});

router.post("/createb", async(req, res)=>{
    // let {ta} = req.body;
    // let input1 = req.body.input;
    await createBulletin(req,res);
    res.redirect("/bulletin");
});






module.exports = router;

