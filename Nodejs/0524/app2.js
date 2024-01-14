const express = require("express");
const socketio = require("socket.io");
const app = express();
const server = app.listen(8000, ()=>{
    console.log("server on🍕");
})

// socket 객체 생성
const io = socketio(server);


const path = require("path");
app.set("views",path.join(__dirname, "page"));
app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    res.render("main2");
});

io.sockets.on("connection", (socket)=>{
    // 클라이언트 접속했을때
    socket.on("message", (data)=>{
        // 모든 클라이언트에게 이벤트 푸쉬
        io.sockets.emit("message", data);
    });
});