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
const insertRouter = require("./routers/insertRouter");
const searchRouter = require("./routers/searchRouter");
const mypageRouter = require("./routers/mypageRouter");

const notiRouter = require("./routers/notiRouter");
const livechatRouter = require("./routers/livechatRouter");

const adminRouter = require("./routers/adminRouter");
const detailRouter = require("./routers/detailRouter");

const app = express();

// localhost 포트번호와 연결
app.use(cors({
    origin : "http://127.0.0.1:5500",
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
app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/main", mainRouter);
app.use("/insert", insertRouter);
app.use("/search", searchRouter);
app.use("/mypage",mypageRouter);
app.use("/noti", notiRouter);
app.use("/chat", livechatRouter);
app.use("/admin", adminRouter);
app.use("/detail", detailRouter);

// app.use('/socket.io', express.static(__dirname + 'node_modules/socket.io/client-dist'));

const server = app.listen(8080, () => {
    console.log("server opened");
});

const io = socketIo(server, {
    cors: {
        origin: '*',
        credentials: true
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
        let index = userID.indexOf(receiverID);
        console.log("요청 받는 사람: ", userID[index]);
        io.to(socketID[index]).emit("requestChat", senderID, receiverID);
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
        io.to(socketID[senderIndex], socketID[receiverIndex]).emit("approve", senderID, receiverID);
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