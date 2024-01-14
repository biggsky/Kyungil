/*
처음 프로젝트 만들었으면 이제

npm init -y
package.json를 기본값으로 설정해서 만들자

사용할 모듈 express ejs mysql path

1. express 가져오고
2. 서버인스턴스 만들고
3. 서버 대기상태

express 설치
npm i express

*/

// express 모듈 가져오고
const express = require("express");

// ejs 설치
// npm i ejs

// mysql2 설치
// npm i mysql2

const mysql2 = require("mysql2");

// path 가져오자
const path = require("path");

// 서버 인스턴스 만들어서 app에 바인딩
const app = express();

const _mysql = mysql2.createConnection({
    user : "root",
    password : "0501",
    database : "test6",
    // 다중 쿼리문 사용할 수 있는 옵션
    // multipleStatements : true
    multipleStatements : true
});



// express의 views 속성을 설정(파일들의 경로)
// express에서 서버사이드 렌더링을 지원하기위해 view엔진을 사용한다.
// view엔진이 템플릿 파일을 보여주는 역할을 해줌.
// 기본값은 views: 'C:\\Users\\Biggs\\Desktop\\csh\\_Nodejs\\0504\\views' 로 경로가 지정되어있고
app.set("views", path.join(__dirname, "page"));
// console.log(app);
// views: 'C:\\Users\\Biggs\\Desktop\\csh\\_Nodejs\\0504\\page' 우리가 설정할 경로로 바꿀수 있다.

// view엔진으로 ejs를 사용할 수 있게 설정
app.set("view engine", "ejs");

// express에서 bodyparser를 지원 한다.
// extended : 깊은 객체를 지원할지 안할지 권장 false
app.use(express.urlencoded({extended : false}));

app.get("/",(req,res)=>{
    // render 메서드 view엔진이 문자열을 html로 브라우저에 전달
    // 렌더링 해준다.
    // 첫번째 매개변수가 파일의 이름
    // 두번째는 매개변수 전달할 데이터
    res.render("main");
})

app.get("/signup", (req,res)=>{
    res.render("signup");
});

app.get("/login", (req, res)=>{
    res.render("login");
})

app.post("/login", (req,res)=>{
    // 요청에 대한 내용은 req 객체에 들어있다.
    // body 객체의 안에 들어있다 요청을 하면서 보낸 데이터
    // req.body === {user_id:"", user_pw:""}
    const {user_id, user_pw} = req.body;
    // console.log(user_id, user_pw);
    // 전달받은 데이터로
    // 데이터베이스에 아이디와 비밀번호가 동일한 내용이 있는지 확인하고 응답받은 데이터가 있다면
    // 사용자가 회원가입을 진행 했다는 내용이니 로그인 시켜준다.

    // user_id랑 user_pw를 가지고 데이터를 조회
    const sql = "SELECT * FROM users WHERE user_id = ? AND user_pw = ?";
    _mysql.query(sql,[user_id, user_pw],(err, result)=>{
        if(err){
            // 로그인 실패
            res.render("mypage");
        }else{
            // 로그인 성공
            console.log(result);
            res.render("mypage", {data:result[0]});
        }
    });

    // res.send("user_id : " + user_id + "user_pw" + user_pw);
});
// 스프레드연산자로 뽑는데??????

// 회원가입
app.post("/signup", (req,res)=>{
    const {user_id, user_pw} = req.body;
    console.log(user_id, user_pw);
    const sql = "INSERT INTO users (user_id, user_pw)VALUES(?,?)";
    _mysql.query(sql, [user_id, user_pw],(err)=>{
        // err 에러가 있다면 에러의 내용이 들어오는 객체
        if(err){
            res.render("signUpErr");
        }else{
            // 브라우저 url을 login페이지 url로 변경
            res.redirect("login");
        }
    });
});

// 게시판의 글목록 페이지
app.get('/list',(req,res)=>{
    const sql = "SELECT * FROM products";
    _mysql.query(sql,(err,result)=>{
        res.render("list", {data:result});
    });
    // res.render("list", {data: [ {id:4, name:2, number:3, series:4} ] });
});

// 게시판 등록 페이지
app.get('/insert', (req,res)=>{
    res.render("insert");
});

app.post('/insert',(req,res)=>{
    const {name, number, series}= req.body;
    const sql = "INSERT INTO products (name,number,series)VALUES(?,?,?)";
    _mysql.query(sql,[name,number,series],()=>{
        res.redirect("/list");
    });
});

// 삭제
app.get("/delete/:id",(req,res)=>{
    // /delete/2 == req.params = {id : 2}
    // req.params.id ==2 이값을 가지고 데이터베이스에 글 조회를 해서 보여줄수 있겠죠?
    // 글 목록이 쭉있고 1번글 2번글 3번글중에 글의 아이디를 조회해서 글의 내용을 페이지에 보여줄 수 있다.

    // const sql = "DELETE FROM products WHERE id = ?; SET @CNT = 0; UPDATE products SET products.id = @CNT:=@CNT+1; ALTER TABLE products AUTO_INCREMENT = 0;";
    const sql = "DELETE FROM products WHERE id = ?;SET @CNT = 0; UPDATE products SET products.id = @CNT:=@CNT+1; ";
    // a=AUTO_INCREMENT는 0부터 시작하는 건 맞지만 만약 6,7 등이 있고 4,5가 비워있을때도 6,7이 있기때문에 8부터 시작함
    // BUT cnt같은경우에는 모든 문자열을 1부터 초기화 해줌.


    // DELETE FROM products WHERE id = ? : 값을 제거하라는 명령어인 쿼리문
    // 테이블 products의 행에서 ?에 값을 넣어줄거고
    // 우리가 넘겨준 id값을 가지고있는 행을 찾아서 제거시킨다.

    // SET @CNT = 0 구문으로 카운트 0으로 초기화

    // UPDATE products.id = @CNT:@CNT+1 : products 테이블의 행의 아이디를 다시 갱신 시켜줌

    // ALTER TABLE products AUTO_INCREMENT = 0; : AUTO_INCREMENT 속성을 자동으로 1씩 증가시키는 속성을 0으로 변경


    // 수정하는 페이지
    app.get("/edit/:id", (req,res)=>{
        const sql = "SELECT * FROM products WHERE id = ?"
        const id = req.params.id;
        _mysql.query(sql,[id], (err,result)=>{
            res.render("edit", {data : result[0]});
        });
    });

    app.post("/edit/:id", (req, res)=>{
        const {name, number, series} = req.body;
        const sql = "UPDATE products SET name = ?, number=?, series=? WHERE id=?";
        const id = req.params.id;
        _mysql.query(sql,[name,number,series,id],()=>{
            res.redirect("/list");
        });
    });






    // id는 키값이어서 변경해서 쓸수있음
    _mysql.query(sql, [req.params.id], ()=>{
        res.redirect("/list");
    });
});

// PORT를 지정 해야하니까
const PORT = 8080;

app.listen(PORT, function(){
    console.log("맞아?");
});