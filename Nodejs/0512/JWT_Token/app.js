// 프로젝트 시작
// package.json 만들고
// express 대기상태
// page 폴더
// 경로 연결 view
// view 엔진 ejs
// body 객체 사용

const express = require("express");
const path = require("path");
const session = require("express-session");

const pageRouter = require("./routers/page");
const tokenRouter = require("./routers/token");
const verifyRouter = require("./routers/verify");

const app = express();

// 세션을 사용하기위해 설치할 모듈
// npm i express-session

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}));
app.use(session({
    // 세션을 발급할때 사용할 키 이것도 나중에는 소스코드 노출 안되게 바꿔놓자.
    secret : process.env.KEY2, 

    // 세션이 변경되거나 저장하고 불러올때 다시 저장할지 여부
    resave: false, 
    
    // 세션에 저장할 때 초기화 여부
    saveUninitialized : true,
}));
// 이게 없다면 세션이 만들어지지 않음

app.use(pageRouter);
app.use(tokenRouter);
app.use("/userVerify", verifyRouter);
// app.use("/userVerify", verifyRouter)는 Express 애플리케이션에서 "/userVerify" URL 경로로 들어오는 모든 요청(request)에 대해서 verifyRouter 모듈을 사용하도록 등록하는 메서드입니다.

app.listen(8080, ()=>{
    console.log("server on");
});