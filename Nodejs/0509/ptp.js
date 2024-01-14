const express = require("express");
const app = express();

const path = require("path");
const postRoute = require("./routers/routers");

app.set("views", path.join(__dirname, "pages"));
app.set("view engine", "ejs");

const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({extended : false}));
// 주석처리하면 회원가입할때 에러남

app.get("/", (req,res)=>{
    res.render("main");
});


// 
app.get("/createb", (req, res)=>{
    res.render("createb");
});

app.get("/heart1", (req,res)=>{
    res.render("heart1");
});

app.get("/bread", (req, res)=>{
    res.render("bread");
});

// app.get("/mypage", (req, res)=>{
//     res.render("mypage");
// });

// 

app.use(express.static(path.join(__dirname, "public")));

app.use("/", postRoute);

const port = 8000;
app.listen(port, ()=>{
    console.log("server on");
});
