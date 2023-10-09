const socket = io.connect('localhost:8080');
let liveChatNoti = document.querySelector("#live_chat_noti_wrap");

// 대화 요청 보내기
function requestChat(senderID, receiverID) {
    console.log("대화 요청 하는 사람: ", senderID);
    console.log("대화 요청 받는 사람: ", receiverID);

    socket.emit("requestChat", senderID, receiverID); // 로그인 한 유저 아이디 보내기
}

// 대화 요청 수락
function approve(senderID, receiverID) {
    liveChatNoti.style.display = "none";
    socket.emit("approve", senderID, receiverID);
    location.href = `./livechatRoom.html#${senderID}#${receiverID}`;
}

// 대화 요청 거절
function reject(senderID, receiverID) {
    liveChatNoti.style.display = "none";
    socket.emit("reject", senderID, receiverID); // 로그인 한 유저 아이디 보내기
}

// 알림창 끄기
function closeNoti() {
    liveChatNoti.style.display = "none";
}