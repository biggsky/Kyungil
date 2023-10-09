/*
    TCP server, Client를 둘다 만들어보자.
*/
const net = require("net");
const PORT = 8080;

// 클라이언트와 서버가 요청 응답으로 주고 받는 메시지는 
// 헤더랑 바디로 나눠지고 
// 헤더의 내용은 전달하는 메시지의 정보를 전달하고 
// 바디에는 전달하는 데이터의 내용이 들어있어요~

// HTTP1.1 기본 버전 프로토콜
// GET(데이터 요청) /URL HTTP1.1
// host : 127.0.0.1:8080
// ....
// Content-type: text/html

// 요청 메소드
// GET : 데이터의 요청을 의미(필요한 데이터를 응답 받는 것) 가져오는것
// POST : 데이터의 입력을 의미(데이터를 추가해주기 위해서) 데이터를 보내기 위해서
// PUT : 데이터의 수정을 의미
// DELETE : 데이터를 삭제 하기위해서 사용.
// OPTIONS : 웹서버가 지원하는 메소드의 종류를 요청할때.

// HTTP 프로토콜 버전
// HTTP 버전은 1.0 1.1 2.0이 있는데
// 우리가 배울건 1.1 버전이에요~
// 1.1 WWW에서 사용되는 기본 프로토콜
// HTTP 버전이에요~
// 1997년도에 도입이 되었고 지금까지도 많이 사용중이다.

// body의 내용
// Buffer.from 메서드를 사용해서 문자열을 바이트 데이터로 변환 해준다.
// 변환하는 이유는 HTTP 응답은 바이트 데이터로 전송되기 때문
// body 문자열을 그대로 작성해버리면 인코딩에 문제가 생길수가 있기 때문에
const body = Buffer.from("<div> <p>Hello nodejs!</p> </div>");

// Header, body 로 구분해서 읽는다.
// response header + body = request message

const response = `HTTP/1.1 200 OK
Connection : keep-alive
Keep-Alive : timeout=4
Content-type : text/html
Content-length : ${body.length}     

 ${body.toString()}
`




/*
상태 코드 : 요청에 대한 응답의 결과를 나타낸 숫자 코드
1xx : 거의 없어요..
2xx : 성공
3xx : 리다이렉트
4xx : 페이지가 없어 (요청한 페이지가 없어~ 404)
5xx : 서버 터진거임

가장 많이 사용하는 상태코드는 200과 404 성공과 실패
Connection : 클라이언트와 서버의 연결 상태 keep-alive 속성은 클라이언트가 다음 요청을 보낼때까지 연결 유지

Keep-Alive : 연결을 유지하는 시간을 지정 timeout=4 == 연결을 4초동안 유지하고 연결을 종료

Content-type : 전송되는 데이터의 타입 text/html == HTML 타입의 데이터 전송

Content-length : 전송되는 데이터의 길이. 데이터의 끝을 알려주는 역할을 한다.
*/

const server = net.createServer((client)=>{
    // 클라이언트가 접속시 실행
    // 인코딩 설정
    // setEncoding 메서드로 인코딩 방식을 설정할 수 있다.
    // client.setEncoding('utf8');

    // 클라이언트가 데이터를 보내서 데이터를 받으면 실행되는 콜백 함수
    client.on("data", (data)=>{
        // console.log(data)    // 데이터의 타입 buffer
        // 바이너리형식??????

        // write 메서드로 클라이언트에 응답을 보냄
        client.write(response);
    })

    // 클라이언트와 연결이 종료되면 실행되는 이벤트
    client.on('close', ()=>{
        console.log('접속이 종료됨..');
    })
})

server.on("connection", ()=>{
    console.log("client가 접속했어");
})

server.listen(PORT, ()=>{
    console.log('server 잘열림 포트는 : '+ PORT);
})


