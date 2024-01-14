import Block from "@core/block/block"
import {Chain} from "@core/chain/chain"
import {WebSocket, WebSocketServer} from "ws";
// npm i @types/ws

// 기본적인 연결 관련된것만 있는 모듈 ws

// 상태를 지정할때 사용
// run state work

enum MessageType {
    // 알기 쉽게 사용하려고 
    // 0, 1, 2 상태를 지정한다했을때

    // 마지막 블록을 요청할때
    lastBlock = 0, // string하면 안돼요? 문자로 해도 되는데 오타가 발생할수 있어서 => number로 오류가 최대한 없게

    // 전체 체인을 요청할때
    allBlock = 1,

    // 블록이 추가되서 알려줄때
    addBlock = 2,
}

// switch(0){
//     case lastBlock:
//         break;
    
//     case 1:
//         break;

//     default :
//         break;
// }

interface IMessage {
    // 메시지의 타입
    type : MessageType;

    // 메시지에 대한 값 데이터
    payload : any; 
}

class P2P extends Chain {
    // Chain 상속받아서 Chain에 있는 메서드를 사용하려고
    private sockets : Array<any> // 연결된 socket들 확인

    constructor() {
        super();
        this.sockets = [];
    }

    getSockets() : Array<WebSocket> {
        return this.sockets;
    }

    connectSocket(socket : any, type? : MessageType) :void{
        // 소켓을 연결하면
        // 하나의 포트가 동적으로 생기고 그 포트에서 소켓을 들고 있는데.
        // socket에는 고유의 포트가 들어있는 상태 충돌방지를 위해 애플리케이션 or 서비스 연결을 하면
        // 동적으로 포트를 지정해준다. (고유 포트)
        this.sockets.push(
            `${socket._socket.remoteAddress}:${socket._socket.remotePort}`
        );

        // socket.send() 메서드를 호출하면 이벤트가 실행된다.
        // message 이벤트 실행
        socket.on("message", (_data : string) =>{
            const data = JSON.parse(_data.toString());
            switch (data.type) {
                case MessageType.lastBlock:
                    // 0이 들어오면 여기
                    const message : IMessage = {
                        // type
                        type : MessageType.lastBlock, // 모든블록 타입이 실행되는지 확인

                        // 마지막 블록은 payload에 담아서
                        payload : [this.latestBlock()]
                    }

                    // 완성한 객체를 문자열로 치환해서 보낸다.
                    socket.send(JSON.stringify(message));
                    break;
                case MessageType.allBlock:
                    // 1이 들어오면 여기
                    break;
                case MessageType.addBlock:
                    // 2이 들어오면 여기
                    // 검증 로직은 여기에
                    const isValid = this.replaceChain(data.payload);
                    if(isValid.isError) break;
                    // 문제가 있으면 종료

                    //
                    const message2 : IMessage = {
                        type: MessageType.addBlock,
                        payload : data.payload
                    }

                    this.sockets.forEach((item)=>{
                        // 현재 접속한 유저들에게 메시지 전송
                        item.send(JSON.stringify(message2))
                    })
                    break;
                default:
                    break;
            }
        })
    }

    listen(port : number) : void {
        // 현재 로컬에서 서버 생성
        const server : WebSocketServer = new WebSocket.Server({port});

        server.on("connection" , (socket : WebSocket)=>{
            // 소켓 연결 시도하면
            console.log("new socket connection");

            // 연결한 소켓을 배열에도 추가해주고 message 이벤트도 등록
            this.connectSocket(socket);
        })
    }

    addToPeer(peer : string) : void{
        // 상대방이 내 ip에 접속 했을때
        // 소켓을 생성하고 연결한다.
        const socket : WebSocket = new WebSocket(peer);
        // 상대 소켓 서버 주소를 받아서 연결을 시도한다.
        socket.on("open", ()=>{
            // 연결이 성공하면 open 이벤트가 실행된다.
            console.log("연결 성공");
            this.connectSocket(socket, MessageType.addBlock);
        })
    }
    
}

export default P2P;
// ip 주소 연결해서 data를 받을예정

