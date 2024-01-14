const express = require("express");
const app = express();
const path = require("path");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
const dot = require("dotenv").config();
const session = require("express-session");

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");


app.use(express.urlencoded({extended:false}));
app.use(cookie());

app.get("/", (req,res)=>{
    res.render("login");
});

app.use(session({
    // 세션 발급에 사용할 비밀키 노출 안되게 env로 만들자
    secret : process.env.SESSION_KEY,

    // 세션을 저장하고 불러올때 세션을 다시 저장할지 여부
    resave : false,

    // 세션에 저장할때 초기화 여부
    saveUninitialized : false
}));

const router = require("./routers/router");
app.use("/", router);


app.listen(8000, (req,res)=>{
    console.log("server on");
});