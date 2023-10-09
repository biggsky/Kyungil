// 채팅방 만들기
// 방을 따로 나눠서
// 유저간에 귓속말

// 모듈 express socket.io ejs
// package.json
// 서버 대기상태
// view엔진 세팅
// socket 연결

const express = require("express");
const path = require("path");
const socketio = require("socket.io");
const app = express();

app.set("views", path.join(__dirname,"page"));
app.set("view engine","ejs");

const server = app.listen(8000,()=>{
    console.log("server on~");
})

app.get('/', (req,res)=>{
    res.render("main");
})

let userId = [];
let userArr = [];
let userNum = [];
const io = socketio(server);
io.on("connection", (socket)=>{
    // 유저가 접속 시
    console.log("유저 접속");
    // 유저 접속시 배열에 유저의 아이디를 추가
    userId.push(socket.id);
    // 현재 접속중인 유저 아이디
    // console.log(userId);
    socket.on("joinRoom", (room, name)=>{
        // 
        userArr.push(socket.id);
        userNum.push(name);

        console.log("room : ", room);
        console.log("배열 : ", userId);
        console.log("userNum", userNum);
        // 방에 유저가 접속 하면
        // join 메서드로 방에 입장 시킨다
        // 방의 개념
        socket.join(room);
        // 현재 방에 있는 클라이언트에게 이벤트 푸쉬
        // 어느 방에 누가 접속 했는지
        io.to(room).emit("joinRoom", room, name);
        io.to(room).emit("list", userArr, userNum);
    })

    socket.on("leaveRoom", (room, name)=>{
        // 유저가 방에서 나가면
        // 유저가 방에서 제외되게 해주고
        socket.leave(room);
        // 어느방에서 누가 나갔는지 해당 방에 있는 유저들에게 이벤트 푸쉬
        io.to(room).emit("leaveRoom", room, name);
    })


    socket.on("disconnect", ()=>{
        console.log("유저 나감");
        // 나간 유저를 제외한 배열을 userId에 넣고
        userId = userId.filter((value)=> value != socket.id);
        // 현재 접속중인 유저 아이디
        console.log(userId);
    })

    socket.on("chat", (room, name, msg)=>{
        io.to(room).emit("chat", name, msg);
    })
    socket.on("chat2", (id,name,msg, arr)=>{
        io.to(id).emit("chat", name, "귓속말 : " + msg, "이거"+ arr);
    })
})
