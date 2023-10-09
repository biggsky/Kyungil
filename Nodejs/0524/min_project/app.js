/*
비행기 좌석을 만드는데 1번 비행기 2번 비행기 3번 비행기 나누어서 3개로
좌석을 예약 할 수 있게 

사용할 모듈
socket.io, express, ejs
서버 대기
view 세팅
소켓 연결 까지
*/
const express = require("express");
const app = express();

// 선택된 자리들을 보여줄 배열
let seats = [];

let temp = [
    [1, 1, 0, 1, 2, 1, 2, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1]
];
let temp2 = [
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1]
];
let temp3 = [
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1]
];

let seatsArr = [temp, temp2, temp3];

// 선택한 비행기의 인덱스
let index = 0;

const path = require("path");
app.use(express.urlencoded({extended:false}));
app.get("/",(req,res)=>{
    res.render("main");
});
app.get("/seats/:id", (req,res)=>{
    index = req.params.id;
    seats = seatsArr[index];
    // 요청에 대한 응답으로 seatsArr 배열에서 id로 전달한 인덱스로 호출한 배열을 응답해준다.
    res.send(seats);
});
const server = app.listen(8000, ()=>{
    console.log("server on");
});
app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");

const socketio = require("socket.io");

const io = socketio(server);

io.sockets.on("connection", (socket)=>{
    socket.on("reserve", (data)=>{
        console.log("예약");
        let seatTemp = seatsArr[data.selectCount];
        seatTemp[data.y][data.x] = 2;
        io.sockets.emit("reserve", data);
    });
});