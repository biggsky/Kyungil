/*
프로젝트 시작하기
package.json
서버 객체 만들고
서버 대기상태
body 객체 사용
세션 사용 ( 세이브 옵션은 다 false 초기화 옵션 false)
dotenv 사용하고
mysql2 사용
videw 엔진 경로 사용 view엔진은 ejs
jwt 토큰 사용

cookie-parser는 사용할 필요없음(세션 사용할 예정)

설치 명령어
npm i express dotenv express-session mysql2 ejs
*/

const express = require("express");
const session = require("express-session");
const dot = require("dotenv").config();
const app = express();

const joinRouter = require("./routers/joinRouter");
const loginRouter = require("./routers/loginRouter");

const path = require("path");
const jwt = require("jsonwebtoken");

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}));
app.use(session({
    // 세션 발급에 사용할 비밀키 노출 안되게 env로 만들자
    secret : process.env.SESSION_KEY,

    // 세션을 저장하고 불러올때 세션을 다시 저장할지 여부
    resave : false,

    // 세션에 저장할때 초기화 여부
    saveUninitialized : false
}));

app.use("/join", joinRouter);
app.use("/login", loginRouter);


app.listen(8000, ()=>{
    console.log("server on~");
});
