/*
로그인 회원가입을 이제 만들 수 있다.

crypto
암호화

비밀번호를 만들때 단방향 암호화를 사용하는데
단방향 양방향 암호화 방식

- 단방향은 복호화가 불가능하다. (원본값을 알 수 없다. 비밀번호를 만들때 사용하고 원본의 값을 알아낼 수 가 없기에 안전하다.)

- 양방향은 복호화가 가능하다. (데이터를 전송할때 데이터를 암호화해서 안전하게 전달할때 사용)

우리가 사용하는 네이버 같은 사이트들이 비밀번호 찾기를 시도하면
비밀번호를 알려주거나 메일로 전송 해주지 않고 비밀번호 변경을 시켜준다.
원본 비밀번호를 알수가 없기 때문에

복호화는 암호문을 원본으로 변경 해주는것.

단방향 암호화는 원래값을 알 수 없게 복잡한 알고리즘으로 암호화 시켜주기 때문에
원본값을 복호화 할수가 없다.

crypto 모듈을 사용해서 암호화를 만들어보자
내장모듈이고 기본적인 암호화 알고리즘 기능을 제공해준다.
*/
const crypto = require("crypto");

// 임의의 비밀번호를 변수에 담아주자
const pw = "roseavenue";

// 해시화 : 알고리즘을 통해 데이터를 고정된 크기의 고유한 값으로 바꿔주는 것.
// 해시 객체 생성
let hashA = crypto.createHash("sha256")
// 사용할 알고리즘은 sha256암호 알고리즘 사용
// 데이터를 256비트의 고정 크기 해시 값으로 변환해주는 알고리즘
// 원본 데이터의 길이에 상관없이 항상 256비트(32바이트)의 해시 값을 생성한다.
// 64자리의 16진수로 표현
// 16진수는 컴퓨터의 포토샵 색상 코드에서도 사용되고 암호화 등에서도 사용된다.
/*
16 진수 구하기

10 진수는
1 2 3 4 5 6 7 8 9 10

16 진수는
1 2 3 4 5 6 7 8 9 A B C D E F 10

10진수를 16으로 나누고 나머지를 16진수로 표현 나눈 몫을 0이 될때 까지 반복
30 => 1E

30 => 몫 1 나머지가 14
나머지 14 => E

몫 1을 16 나누면 나머지가 1

1E

*/

// 비밀번호를 해시객체에 넣어주자
let hashing = hashA.update(pw); // 매개변수로 암호화 시킬 문자열
// console.log(hashing);

// Hash {
//     _options: undefined,
//     [Symbol(kHandle)]: Hash {},
//     [Symbol(kState)]: { [Symbol(kFinalized)]: false }
//   }

// 객체를 확인해보면 false 값이 있는데 아직 인코딩이 완료되지 않은 상태
// digest 메서드를 사용해서 해시값을 반환 매개변수로 반환받을 인코딩 방식 지정
let hashString = hashing.digest("hex");
// 해시값을 16진수의 문자열로 반환

console.log(hashString);

// 해시화를 하면 일정한 문자열이 나오는데

// salt 값을 사용해서 예측이 불가한 데이터를 만들어 주자
// 랜덤한 값을 우리가 만들어서 원본의 데이터에 추가해서 암호화 시켜주는것.

// salt 값은 지정을 했으면 .env에 넣어두면 되겠죠?

// salt값을 만들어 보자
// 난수 생성 메서드를 사용해서 salt 값을 만들어 보자

crypto.randomBytes(32, (err, result)=>{
    // 32bit 길이의 랜덤한 byte가 생성
    if(err){
        console.log(err);
    }else{
        // result를 16진수로 변경
        console.log(result.toString("hex"));
    }
});

// 이렇게 난수를 만들어서 회원가입할때 계정마다 salt값을 주고 사용하는 방법도 있다.(salt 값을 데이터 베이스에 같이 저장)
// 모든 패스워드가 고유의 salt값을 가지고 있게 만들 수 있다.

// salt값을 만들어 주는 함수
const createSalt = () => {
    // 암호화에 시간이 좀 걸리기때문에
    return new Promise((resolve, reject)=>{
        // 랜덤 바이트 길이는 64
        crypto.randomBytes(64, (err, result)=>{
            if(err) reject(err);
            // 실패시 err 객체 reject 메서드로 반환
            // 성공하면 resolve 메서드로 결과를 16진수로 변환해서 반환
            resolve(result.toString("hex"))  //16진수로 변환
        });
    });
}

/* salt 값도 사용을 하고
키 스트레칭 기법
키 스트레칭 기법은 해시함수를 여러번 반복 시켜서 시간을 일부러 오래 걸리게 만드는 기법
해킹을 시도할때 비밀번호들을 대입해서 해킹을 시도하는 경우 암호화 작업을 일부러 오래 걸리게 만들어서 해킹을 어렵게 만든다.
무차별로 비밀번호를 대입하는 공격을 힘들게 만든다.
해킹범 짜증나게 하자

pbkdf2 메서드를 사용해서 키 스트레칭 기법 사용
*/

const createHash = (salt, password)=>{
    return new Promise((resolve, reject)=>{
        crypto.pbkdf2(
            password, // 해싱할 값을 문자열로 넣어 주고
            salt, // salt 값
            165165, // 키 스트레칭 반복 횟수, 반복횟수가 많아질수록 어렵게 암호가 되는데 시간도 오래 걸린다.
            64, // 해시값의 바이트 64 바이트
            "sha256", // 해시화 알고리즘
            (err, hash)=>{
                if(err) reject(err);
                resolve(hash.toString("hex")); // 에러가 아니면
            }
        )
    });
}

const test = async() =>{
    const salt = await createSalt();
    const hash = await createHash(salt, pw);
    console.log(hash);
}
test();

// 간단하게 회원가입 만들어보자.
// 이번 방식은 salt라는 값을 각각의 회원마다 고유의 salt값을 가지게 만들거임.

/* 
프로젝트 시작
package.json 만들고
사용할 모듈은 express mysql2 path ejs
서버 객체 만들고
서버대기상태
view 엔진 파일 경로 설정
view 엔진 ejs 사용
body 객체 사용

npm init -y
npm i express mysql2 ejs
*/

const express = require("express");
const path = require("path");
const mysql2 = require("mysql2/promise");
const app = express();

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}));

const mysql = mysql2.createPool({
    user : "root",
    password : "0501",
    database : "test13",
    multipleStatements : true
});

// 테이블 초기화
const usersInit = async () =>{
    try {
        await mysql.query("SELECT * FROM users");
    } catch (error) {
        await mysql.query("CREATE TABLE users(id INT AUTO_INCREMENT PRIMARY KEY, user_id VARCHAR(20), user_pw VARCHAR(128), salt VARCHAR(128))");
    }
}

usersInit();

app.get("/", (req,res)=>{
    res.render("join");
});

app.get("/login", (req,res)=>{
    res.render("login");
});

app.post("/join", async (req,res)=>{
    const {user_id, user_pw} = req.body;
    const salt = await createSalt();
    const hash = await createHash(salt, user_pw);
    await mysql.query("INSERT INTO users (user_id, user_pw, salt)VALUES(?,?,?)",[user_id, hash, salt]);
    res.redirect("/login");
});

app.post("/login", async (req,res)=>{
    const {user_id, user_pw} = req.body;
    const [result] = await mysql.query("SELECT * FROM users WHERE user_id = ?;", [user_id]);
    if(result[0]?.salt){
        // if(result[0] && result[0].salt)
        const salt = result[0].salt;
        const hash = await createHash(salt, user_pw);
        if(hash == result[0].user_pw){
            res.send("로그인 됨");
        }else{
            res.send("비밀번호 틀렸음");
        }
    }else{
        res.send("유저 없음");
    }
});

app.listen(8000, ()=>{
    console.log("server on");
});

