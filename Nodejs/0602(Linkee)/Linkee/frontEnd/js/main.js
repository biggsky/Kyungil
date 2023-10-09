window.onload = () => {
    const name = username.value;
    console.log("로그인 한 유저 이름 : ", name);

    // rooms.options : 현재 옵션들의 배열
    // rooms.selectedIndex : 현재 옵션들의 value
    let room = rooms.options[rooms.selectedIndex].value; // 선택한 인덱스의 옵션 value 값
    console.log("선택한 방의 value : ", room);

    // 소켓 연결 시도 (1)
    const socket = io.connect("https://andybyungjoopark.com");
    socket.emit("joinRoom", room, name);

    rooms.onchange = (e) => {
        // 이벤트가 일어난 태그
        let el = e.target;
        console.log(el.selectedIndex);

        // 해당 유저가 room에서 떠남
        socket.emit("leaveRoom", room, name);
        room = rooms.options[el.selectedIndex].value;
        socket.emit("joinRoom", room, name);
    }

    // 유저가 방에 들어왔을 때 (3)
    socket.on("joinRoom", (room, name) => {
        msgWrap.innerHTML += `
        <li class="join_text">
            ${name}님이 ${room}에 입장하셨습니다.
        </li>
        `;
    });

    sendBtn.onclick = () => {
        socket.emit("chat", room, name, msg.value);
        msg.value = "";
    }

    socket.on("chat", (name, msg) => {
        msgWrap.innerHTML += `
        <li>
            ${name} : ${msg}
        </li>
        `;
    });

    // 유저가 방에서 나갔을 때
    socket.on("leaveRoom", (room, name) => {
        msgWrap.innerHTML += `
        <li class="leave_text">
            ${name}님이 ${room}에서 퇴장하셨습니다.
        </li>
        `;
    });

    sendBtn2.onclick = () => {
        socket.emit("chat2", msg2.value, name, msg.value);
        msg.value = "";
    }

    
    // 접속 중인 유저 띄우기
    socket.emit("userIn", name); 

    socket.on("userIn", (userId, userName) => {
        userWrap.innerHTML = "";
        userId.forEach((el, index) => {
            userWrap.innerHTML += `
            <div class="users">
                <div class="idBtn">
                    ${userName[index]} | ${userId[index]}
                </div>
            </div>
            `;

            let idBtns = document.querySelectorAll(".idBtn");
            console.log(idBtns);
            idBtns.forEach((el, index) => {
                idBtns[index].addEventListener("click", () => {
                    console.log("아이디 클릭해서 귓속말 보내기", index);
                    socket.emit("chat2", userId[index], name, msg.value);
                    msg.value = "";
                });
            });
        });
    });
}