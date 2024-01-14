const express = require("express");
const dot = require("dotenv").config();
require("dotenv").config();
const session = require("express-session");
const { sequelize } = require("./models");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const mainRouter = require("./routers/mainRouter");
// gptAPI 테스트 -----20230807 zerohoney
const testGPT = require("./routers/testGPT");
// 이미지를 받기위한 multer
const multer = require("multer");
// 회원가입,로그인 기능이 있는 라우터
const userRouter = require("./routers/user");
const postRouter = require("./routers/postRouter");
const planRouter = require("./routers/planRouter");
const mypageRouter = require("./routers/mypageRouter");
const adminRouter = require("./routers/adminRouter");
const boardRouter = require("./routers/boardlistRouter");
const boardEditRouter = require("./routers/boardEditRouter");

// // Multer 설정
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(".", "imgs"));
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// nginix 설정
// location / {
//   # First attempt to serve request as file, then
//   # as directory, then fall back to displaying a 404.
// root /home/front/build;
//   try_files $uri /index.html;

// }

// location /api/ {
// proxy_set_header HOST $host;
// proxy_pass http://127.0.0.1:8080/;
// proxy_redirect off;
// proxy_http_version 1.1;
//   proxy_set_header Upgrade $http_upgrade;
//   proxy_set_header Connection 'upgrade';
//   proxy_set_header Host $host;
//   proxy_cache_bypass $http_upgrade;
// }
// 아마 form 데이터
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      // "https://www.hyunss.com", //aws 
      "http://localhost:3000", // 로컬
    ],
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: { sameSite: "none", secure: true, maxAge: 600000, httpOnly: true }, // 이 부분에서 secure 옵션을 true로 설정합니다.
  })
);

// app.get('/static/js/main.5518ef4c.js', (req, res) => {
//   res.type('application/javascript');
//   // 나머지 응답 처리 로직
// });

sequelize
  .sync({ force: false })
  .then((e) => {
    console.log("sequelize 연결 성공");
  })
  .catch((err) => {
    console.log(err);
  });

// --------------------------------------- /api/~~ 추가해줌
app.use("/", mainRouter);
app.use("/post", postRouter);
app.use("/user", userRouter);
app.use("/mypage", mypageRouter);
app.use("/admin", adminRouter);
app.use("/board", boardRouter);
app.use("/board", boardEditRouter);



// gptAPI 테스트 -----20230807 zerohoney
app.use("/openAI", testGPT);
// 플랜을 저장하고 관리하는 라우터
app.use("/plan", planRouter);
// --------------------------------------- /api/~~ 추가해줌
const server = app.listen(8080, () => {
  console.log("server on");
});

// rlt xptmxmtmxm
