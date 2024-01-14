/* 
이미지 업로드
서버측 컴퓨터에 폴더에 저장 이미지 파일을
파일의 경로를 설정하고 서버측에서 이미지 파일을 가져와서 보여준다.


express path multer cors
multer 모듈을 사용해서 이미지 업로드할 것.
파일이 저장될 경로나 파일의 확장자
이름등을 설정해서 파일을 저장한다.



프로젝트 시작 package.json
모듈 설치
서버 대기상태
*/

const express = require("express");
const cors = require("cors");
const dot = require("dotenv").config();
const path = require("path");

const session = require("express-session");

const {sequelize} = require("./models");
const uploadRouter = require("./routers/upload");

const app = express();


// cors 도메인 허용 하기위해서

app.use(session({
    secret : process.env.SESSION_KEY,
    resave : false,
    saveUninitialized : false
    // 초기화여부
}));

sequelize.sync({force:false}).then(()=>{
    console.log("연결성공");
}).catch((err)=>{
    console.log(err);
});

app.use(cors({
    // 프론트 엔드 배포된 주소 ★★★★★★★★★
    origin : "http://127.0.0.1:5500",
    // 요청에서 쿠키를 포함시킬지
    credentials : true
}))

// body 객체 사용할지
app.use(express.urlencoded({extended:false}));

// 정적 파일 경로gka 추가했던것 처럼
// 폴더 명까지 경로
// console.log("이건뭐얌", path.join(__dirname, "uploads"));
app.use("/img", express.static( path.join(__dirname, "uploads")));


// 요청과 응답에서 json형식의 데이터를 전달받았을때
// 요청과 응답에서 json 파싱을 해서 자바스크립트 객체로 변환 시켜주는 미들웨어
// json메서드로 json 파싱
app.use(express.json());
app.use("/upload", uploadRouter);



app.listen(8000, ()=>{
    console.log("server on");
});


