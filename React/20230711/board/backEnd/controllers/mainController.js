const {User, Board, sequelize} = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res)=>{
    let incomingSignUpValue = req.body.data;
    try {
        const user = await User.findOne({where:{user_id:incomingSignUpValue.user_id}});
        if(user != null){
            return res.json("0");
        }

        const name = await User.findOne({where : {user_nickname : incomingSignUpValue.nickname}});
        if(name != null){
            return res.json("00");
        }

        const hash = bcrypt.hashSync(incomingSignUpValue.user_pw, 10);

        await User.create({
            user_id : incomingSignUpValue.user_id,
            user_pw : hash,
            user_nickname : incomingSignUpValue.nickname,
        });
        res.json("1");
        
    } catch (error) {
        console.log(error);
    }
}

exports.login = async (req,res)=>{
    try {
        // post
        let incomingloginvalue = req.body.data;
        // console.log("확인 : ",incomingloginvalue);

        let incomingId = incomingloginvalue.user_id;
        let user = await User.findOne({where:{user_id:incomingId}});
        if(user == null){
            return res.json("id_x");
        }
        let db_hashPw = user.dataValues.user_pw;
        let session_logon_nickname = user.dataValues.user_nickname;

        const same = bcrypt.compareSync(incomingloginvalue.user_pw, db_hashPw);
        let user_id = incomingloginvalue.user_id;

        if(same){
            let token = jwt.sign({
                user_id,
            },
            process.env.ACCESS_TOKEN_KEY,
            {
                expiresIn : "10m",
            });

            if(token){
                res.cookie('access_token', token, { httpOnly: true });
                res.cookie('session_logon_nickname', session_logon_nickname, {httpOnly : true});
                res.json({ login_pass:1, token, user_id });
            }
            // console.log("token :::::: ", token);
            // req.session.access_token = token;
            // res.json({ login_pass:1, token, user_id });
            
        }else{
            res.json("0");
        }
        
    } catch (error) {
        console.log(error);
    }
}

exports.boardinsert1 = async (req,res)=>{
    try {
        let boardInsertValue = req.body.data;
        // console.log(boardInsertValue.boardtitle);
        // console.log(boardInsertValue.boardcontent);

        let session_logon_nickname = req.cookies.session_logon_nickname;

        await Board.create({
            board_title : boardInsertValue.boardtitle,
            board_content : boardInsertValue.boardcontent,
            upload_nickname : session_logon_nickname,
        });
        res.json("1");
    } catch (error) {
        console.log(error);
    }
}

exports.boardlist1 = async(req,res)=>{
    try {
        const boardlist = await Board.findAll({});
        // console.log(boardlist);
        
        res.json(boardlist);
    } catch (error) {
        console.log(error);
    }
}

exports.detailfind1 = async (req, res)=>{
    try {
        let paramvalue = req.params.id;
        const data = await Board.findOne({where:{id:paramvalue} });
        if(data){
            let hashvalue_id_allvalue = data.dataValues;
            let session = req.cookies.session_logon_nickname;
    
            let uploadUserNickname = hashvalue_id_allvalue.upload_nickname;
    
            if(session == uploadUserNickname){
                res.json({hashvalue_id_allvalue, editpossible:true });
            }else{
                res.json({hashvalue_id_allvalue, editpossible:false });
            }
        }


    } catch (error) {
        console.log(error);
    }
}

exports.detailedit1 = async(req, res)=>{
    let editBoardValue = req.body.data;
    console.log(editBoardValue);
    try {
        await Board.update({
            board_title : editBoardValue.board_title,
            board_content : editBoardValue.board_content
            },
            {
                where:{id: editBoardValue.board_id}
            }
        );
        res.json("1");
    } catch (error) {
        console.log(error);
    }
}

exports.detaildelete1 = async (req,res)=>{
    let postvalue = req.body.data.board_id;
    await Board.destroy({where:{id: postvalue}});

    res.json("1");
}