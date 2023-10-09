const {User, Board} = require("../models");

// 로그인 bcrypt json webtoken
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.Login = async (req,res)=>{

    try {
        const {user_id, user_pw} = req.body;
        console.log(req.body);
        const user = await User.findOne({where : {user_id} });
        if(user == null){
            return res.send("가입 안한 아이디임~");
        }

        const same = bcrypt.compareSync(user_pw, user.user_pw);

        const {name, age} = user;
        if(same){
            // 페이로드, 키, 옵션
            let token = jwt.sign({
                // name : user.name,
                // age : user.age,
                name,
                age
            },process.env.ACCESS_TOKEN_KEY,{
                expiresIn : "20m"
            });
            req.session.access_token = token;
            req.session.user_id = user_id;
            // / : 여기서 경로는 백엔드의 도메인 경로 루트
            // 때문에 프론트의 경로를 작성 해주자
            // 이렇게 리다이렉트를 할게 아니면 프론트에서 응답 받은 값으로
            // 조건 분기 처리해서 페이지를 전환 시켜주면 된다.
            // return res.send("로그인 완료");
            
            // 이런 경우는 배포된 프론트의 경로
            // return res.redirect("http://127.0.0.1:");
            return res.redirect("http://127.0.0.1:5500/0526/frontEnd/main.html");
        }else{
            return res.send("비밀번호 틀림");
        }

    } catch (error) {
        console.log(error);
    }

}

exports.viewUser = async (req,res) => {
    // const {acc_decoded} = req;
    // const ses = req.session.user_id;

    // const user = await User.findOne({
    //     where : {name:acc_decoded.name}
    // })
    // res.json(user);

    const boa = await Board.findAll({});
    // json 형태로 데이터를 응답
    res.json(boa);
}

exports.viewBoard = async (req,res)=>{
    const {acc} = req;
    console.log("acc넌 누구냐", acc);
    // const user = ;
}

exports.boardInsert = async (req,res)=>{
    try {
        const {title, content} = req.body;
        const ses = req.session.user_id;
        console.log("아이디 :", ses);
        if(ses == null){
            return res.send("로그인 하세요!");
        }
        await Board.create({
            title : title,
            content : content,
            user_id : ses,
            primarykey : ses
        });
        res.redirect("http://127.0.0.1:5500/0526/frontEnd/main.html");
    } catch (error) {
        console.log(error);
    }
}

exports.boardView = async (req,res)=>{
    try {
        const param = req.params.id;
        const data1 = await Board.findOne({where:{id:param}});
        // console.log("원래data : ", data.dataValues);
        // const ses1 = data.dataValues;
        
        const ses = req.session.user_id;

        res.json({data1, ses});
    } catch (error) {
        console.log(error);
    }
}

exports.del1 = async (req,res)=>{
    try {
        const num = req.params.id;
        const abc = await Board.destroy({
            where:{id:num}
        })
        // console.log("who are you?", abc);
        res.json(abc);
    } catch (error) {
        console.log(error);
    }
}

exports.edit1 = async (req,res)=>{
    try {
        const aa = req.query;
        const param = req.params.id;
        console.log(aa);

        await Board.update({title:aa.a, content:aa.b},{where:{id:param}});
        // console.log(aa.a);
        // console.log(aa.b);
        res.json(param);
    } catch (error) {
        console.log(error);
    }
}

exports.mypage1 = async (req,res)=>{
    try {
        const ses = req.session.user_id;
        const data1 = await Board.findAll({where:{user_id:ses}});
        // console.log(data1);
        res.json(data1);
    } catch (error) {
        console.log(error);
    }
}

exports.del2 = async (req,res)=>{
    try {
        const param = req.params.id;

        let abc = await User.destroy({where:{user_id:param}});
        res.json(abc);
    } catch (error) {
        console.log(error);
    }
}