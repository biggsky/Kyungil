const {userInsert, userSelect} = require("../models");
const bcrypt = require("bcrypt");

/* 
모듈 추가 암호화 모듈
강력한 암호화를 지원하고 쉽게 사용 가능하다.

bcrypt 모듈 사용하자
npm i bcrypt
$2a$[cost]$[salt][hash]

$2a$ : 사용 알고리즘 고정
[cost] : 키 스트레칭 횟수 입력한 값이 2의 ^으로 들어간다. 
10을 입력하면 2^10 / 많이 사용하는 횟수가 10
기본적으로 10을 많이 사용해요. 이거보다 더 높이면 많이 느려질 수 있다.
10을 입력하면 2^10 = 1024번
[salt] : 인코딩된 salt값 문자열의 일부분을 salt 값으로 사용한다. 알고리즘에서
[hash] : 비밀번호와 salt 값을 합하고 해시해서 인코딩된 값.

bcrypt : 보안에 집착하기로 유명한 OpenBSD에 사용
반복횟수를 늘려 연산속도를 늦출 수 있기 때문에 연산능력이 증가해도
공격에 대비 할 수 있다.
암호화된 문자열 중에서 일부분을 salt값으로 사용하고 있다.
*/
const createHash = (password)=>{
    return new Promise((resolve, reject)=>{
        // hash 메서드로 해시값을 만들어 줄 수 있다.
        bcrypt.hash(password, 10, (err,data)=>{
            if(err) reject(err);
            resolve(data);
        });
    });
}

const compare = (password, hash) =>{
    return new Promise((resolve, reject)=>{
        // compare 메서드를 사용해서 문자열과 해시값을 전달해주고 매개변수로
        // 검증 결과를 확인 한다.
        bcrypt.compare(password, hash, (err,same)=>{
            resolve(same)

        })
    });
}

// 회원가입
exports.SignUp = async (req,res)=> {
    const {user_id, user_pw} = req.body;
    try {
        const hash = await createHash(user_pw);
        await userInsert(user_id, hash);
        res.redirect("/login");
    } catch (error) {
        console.log(error);
    }
};

// 로그인
exports.Login = async (req,res)=>{
    const {user_id, user_pw} = req.body;
    try {
        const data = await userSelect(user_id);
        if(!data?.user_id){
            return res.send("아이디 없음");
        }

        const compare_pw = await compare(user_pw, data.user_pw);
        console.log("compare_pw : ", compare_pw); // true false 로 뜸
        if(!compare_pw){
            return res.send("비밀번호 틀림");
        }

        res.send("로그인됨");
    } catch (error) {
        console.log(error);
    }
}

