/*
게시판을 만들었는데
MVC 패턴으로 만들어보려고 합니다.
많이 사용하고 표준 기본적인 디자인 패턴
유지보수와 확장성을 고려해서 개발할 수 있다.
협업간의 코드의 표준화도 용이하다.

MVC 패턴은 model-view-controller

model : 데이터를 다루는 로직
글선택 글 작성 등등의 기능들 어플리케이션의 동작을 관리하는 폴더

view : 사용자가 볼 수 있는 화면의 데이터를 표시 해주는 역할

controller : model과 view의 사이에서 동작을 제어해주는 역할
model의 상태를 가지고 view에 반영 시켜주는 것.

이런 패턴으로 작업을 하면 유지보수와 코드의 표준화를 유지할 수 있다.

package.json 부터 만들자
기본값으로 설정해서 만들어보세요.
npm init -y

express 까지 만들기
express 설치
npm i express

서버 인스턴스 생성하고 대기상태로 만들자

ejs 설치 받자
npm i ejs

mysql2 설치
npm i mysql2

한번에 설치 하는 명령어
npm i express ejs mysql2
*/


const express = require("express");
const postRoute = require("./routes/posts"); //router
const path = require("path");
const app = express();
const PORT = 8000;

// view 엔진으로 보여줄 파일들의 경로 설정
app.set("views", path.join(__dirname, "page"));

// view 엔진으로 ejs 사용하도록 설정
app.set("view engine", "ejs");

// body 객체 사용하기 위해 미들웨어 추가
// 깊은 객체 사용할지? extended : false === 사용 안함. 사용할 일이 없다.
app.use(express.urlencoded({extended : false}));

// 정적인 파일을 사용하기위해 미들웨어 추가
// 정적인 파일을 모아놓은 경로를 지정 public 폴더로 지정
// 앞에 매개변수 경로를 지정하지 않았을 경우에는 기본적으로 / 루트경로로 지정한다.
app.use(express.static(path.join(__dirname, "public")));

// 이렇게 지정한 경우에는 ejs단에 /css/파일명으로 접근을 하면된다.
// 정적 파일 경로도 나눌수있다.
// app.use("/css", express.static(path,join(__dirname, "public")));

// postRoute객체에 get메서드로 / 루트경로 지정했을때
// "/posts" 이 경로로 추가되어서 라우팅 된다.
// /posts 붙어야 루트경로로 요청이 된다.
// 게시글은 /posts 붙어야 루트경로로 요청이된다.

app.use("/posts", postRoute);

app.listen(PORT, ()=>{
    console.log("SERVER WELL DONE");
});


