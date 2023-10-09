const express = require("express");
const path = require("path");
const cors = require("cors"); // front & back 연결
const dot = require("dotenv").config();
const session = require("express-session");
const socketIo = require("socket.io");

const {sequelize} = require("./models");


// router
const signupRouter = require("./routers/signupRouter");
const loginRouter = require("./routers/loginRouter");

const mainRouter = require("./routers/mainRouter");
const mypageRouter = require("./routers/mypageRouter");
const insertRouter = require("./routers/insertRouter");
const searchRouter = require("./routers/searchRouter");

const userpageRouter = require("./routers/userpageRouter");
const searchedPostRouter = require("./routers/searchedPostRouter");

const notiRouter = require("./routers/notiRouter");
const livechatRouter = require("./routers/livechatRouter");

const adminRouter = require("./routers/adminRouter");
const detailRouter = require("./routers/detailRouter");
const editPostRouter = require("./routers/editPostRouter");
const followListRouter = require("./routers/followListRouter");

const app = express();

// view engine
app.set("view engine","html");
// view foler
app.set("views",path.join(__dirname,"..","frontEnd","page"));

// 파일형식별 미들웨어 세팅 (static path)
// fonts
app.use("/fonts",express.static(path.join(__dirname,"..","frontEnd","fonts")));

// css content type
app.use("/css",express.static(path.join(__dirname,"..","frontEnd","css"),{
    setHeaders : (res,filePath) => {
        if(path.extname(filePath) === ".css"){
            res.setHeader("Content-Type","text/css");
        }
    }
}));

// js content type
app.use("/js",express.static(path.join(__dirname,"..","frontEnd","js"),{
    setHeaders : (res,filePath) => {
        if(path.extname(filePath) === ".js"){
            res.setHeader("Content-Type","application/javascript");
        }
    }
}));

// image content type
app.use("/nav_icon_img",express.static(path.join(__dirname,"..","frontEnd","nav_icon_img"),{
    setHeaders : (res,filePath) => {
        if (path.extname(filePath) === ".png" ||
            path.extname(filePath) === ".webp" ||
            path.extname(filePath) === ".jpg" ||
            path.extname(filePath) === ".jpeg" ||
            path.extname(filePath) === ".gif" ||
            path.extname(filePath) === ".jfif"){
            res.setHeader("Content-Type","image/jpeg");
        }
    }
}));

app.use("/user_img",express.static(path.join(__dirname,"user_img"),{
    setHeaders : (res,filePath) => {
        if (path.extname(filePath) === ".png" ||
            path.extname(filePath) === ".webp" ||
            path.extname(filePath) === ".jpg" ||
            path.extname(filePath) === ".jpeg" ||
            path.extname(filePath) === ".gif" ||
            path.extname(filePath) === ".jfif"){
            res.setHeader("Content-Type","image/jpeg");
        }
    }
}));

app.use("/post_img",express.static(path.join(__dirname,"post_img"),{
    setHeaders : (res,filePath) => {
        if (path.extname(filePath) === ".png" ||
            path.extname(filePath) === ".webp" ||
            path.extname(filePath) === ".jpg" ||
            path.extname(filePath) === ".jpeg" ||
            path.extname(filePath) === ".jfif"){
            res.setHeader("Content-Type","image/jpeg");
        };
    }
}));

app.use("/socket.io",express.static(path.join(__dirname,"..","frontEnd","js"),{
    setHeaders : (res,filePath) => {
        if(path.extname(filePath) === ".js"){
            res.setHeader("Content-Type","application/javascript");
        }
    }
}));

// localhost 포트번호와 연결
app.use(cors({
    origin : "https://andybyungjoopark.com",
    credentials : true
}));


// body-parser 사용
app.use(express.urlencoded({extended : false}));
app.use(express.json());
// session 사용
app.use(session({
    secret : process.env.SESSION_KEY,
    resave : false,
    saveUninitialized : false
}));

// sequelize 연결
sequelize.sync({force : false}).then((e) => {
    console.log("Sequelize 연결 성공")
}).catch((err) => {
    console.log(err);
});


// 정적 폴더 경로
app.use("/post_img", express.static(path.join(__dirname, "post_img")));
app.use("/user_img", express.static(path.join(__dirname, "user_img")));


// router 연결
app.use("/detail",detailRouter);
app.use("/signup", signupRouter);
app.use("/", loginRouter);
app.use("/main", mainRouter);
app.use("/mypage",mypageRouter);
app.use("/insert", insertRouter);
app.use("/search", searchRouter);
app.use("/mypage",mypageRouter);
app.use("/noti", notiRouter);
app.use("/livechat", livechatRouter);
app.use("/admin", adminRouter);
app.use("/userpage",userpageRouter);
app.use("/searchedPost",searchedPostRouter);
app.use("/editPost",editPostRouter);
app.use("/followList",followListRouter);

const server = app.listen(8080, () => {
    console.log("server opened");
});

const io = socketIo(server,{
    cors : {
        origin : "https://andybyungjoopark.com",
        credentials : true
    }
});


let socketID = [];
let userID = [];

io.on("connection", (socket) => {
    // 접속 중인 유저
    socket.on("userIn", (id) => {
        socketID.push(socket.id);
        userID.push(id);
        console.log("접속 중인 유저 아이디 : ", userID);
        console.log("접속 중인 유저의 소켓 아이디 : ", socketID);

        io.emit("userIn", socketID, userID);
    });

    // 유저 연결 해제
    socket.on("disconnect", () => {
        let index = socketID.indexOf(socket.id);
        console.log("유저 연결 해제 : ", userID[index], socket.id);

        socketID = socketID.filter((value) => value != socket.id);
        userID = userID.filter((value) => value != userID[index]);

        console.log(socketID);
        console.log(userID);

        io.emit("userIn", socketID, userID);
    });

    // 채팅 방 요청 알림창
    socket.on("requestChat", (senderID, receiverID) => {
        // let senderIndex = userID.indexOf(senderID);
        let receiverIndex = userID.indexOf(receiverID);
        console.log("요청 받는 사람: ", userID[receiverIndex]);
        // io.to(socketID[senderIndex]).emit("requestChat", senderID, receiverID);
        io.to(socketID[receiverIndex]).emit("requestChat", senderID, receiverID);
    });

    // 대화 요청 거절
    socket.on("reject", (senderID, receiverID) => {
        let index = userID.indexOf(senderID);
        io.to(socketID[index]).emit("reject", senderID, receiverID);
    });

    // 대화 요청 수락
    socket.on("approve", (senderID, receiverID) => {
        let senderIndex = userID.indexOf(senderID);
        let receiverIndex = userID.indexOf(receiverID);
        io.to(socketID[senderIndex]).emit("approve", senderID, receiverID);
        io.to(socketID[receiverIndex]).emit("approve", senderID, receiverID);
    });

    // 채팅
    socket.on("chat", (senderID, receiverID, chatInput) => {
        let senderIndex = userID.indexOf(senderID);
        let receiverIndex = userID.indexOf(receiverID);
        io.to(socketID[senderIndex]).emit("chat", senderID, receiverID, chatInput);
        io.to(socketID[receiverIndex]).emit("chat", senderID, receiverID, chatInput);
    });

    // 채팅방 나감
    socket.on("leaveRoom", (leavedUser, leftUser) => {
        console.log(leavedUser);
        console.log(leftUser);
        let leftIndex = userID.indexOf(leftUser);
        io.to(socketID[leftIndex]).emit("leaveRoom", leavedUser);
    });

    // 게시글 좋아요 클릭시
    socket.on("detail_page_like_click_noti_emit", (receiverID) =>{
        let receiverIndex = userID.indexOf(Number(receiverID));
        console.log("receiverIndex :",receiverIndex);
        io.to(socketID[receiverIndex]).emit("detail_page_like_click_noti_send");
        console.log("게시글 클릭됨");
    });
});