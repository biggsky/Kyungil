"use strict";

var express = require("express");

var dot = require("dotenv").config();

require("dotenv").config();

var session = require("express-session");

var _require = require("./models"),
    sequelize = _require.sequelize;

var path = require("path");

var cors = require("cors");

var app = express();

var mainRouter = require("./routers/mainRouter"); // gptAPI 테스트 -----20230807 zerohoney


var testGPT = require("./routers/testGPT"); // 이미지를 받기위한 multer


var multer = require("multer"); // 회원가입,로그인 기능이 있는 라우터


var userRouter = require("./routers/user"); // Multer 설정


var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, path.join(".", "imgs"));
  },
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
var upload = multer({
  storage: storage
}); // 아마 form 데이터

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true
}));
app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false
}));
console.log("123123");
sequelize.sync({
  force: false
}).then(function (e) {
  console.log("sequelize 연결 성공");
})["catch"](function (err) {
  console.log(err);
});
app.use("/", mainRouter);
app.use("/user", upload.single("image"), userRouter); // gptAPI 테스트 -----20230807 zerohoney

app.use("/openAI", testGPT);
var server = app.listen(8080, function () {
  console.log("server on");
}); // rlt xptmxmtmxm