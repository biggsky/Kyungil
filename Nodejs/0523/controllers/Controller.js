const {User, Post, Comment} = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUp = async(req,res)=>{
    try {
        const {user_id, user_pw, user_nick} = req.body;
        const user = await User.findOne({where: {user_id}});
        if(user != null){
            return res.send("중복된 아이디");
        }
        const hash = bcrypt.hashSync(user_pw, 10);
        User.create({
            user_id,
            user_pw : hash,
            user_nick,
            grade : 1,
            admin : 2
        });
        res.redirect("/login");
    } catch (error) {
        console.log(error);
    }
}

exports.login = async (req,res)=>{
    try {
        const {user_id, user_pw} = req.body;
        const user = await User.findOne({where:{user_id}});
        if(user == null){
            return res.send("회원가입한 유저가 아닙니다~");
        }
        if(user.admin == 2){
            return res.send("회원요청상태입니다. 관리자 승인을 기다리세요~");
        }
        
        const same = bcrypt.compareSync(user_pw, user.user_pw);
        if(same){
            let token = jwt.sign({
                id: user.id,
            },process.env.ACCESS_TOKEN_KEY,{
                expiresIn : "1m"
            });
            req.session.access_token = token;
            req.session.user_id = user_id;
            if(user.admin == 0){
                return res.redirect("/admin");
            }

            res.redirect("/board");
        }else{
            res.send("비밀번호 확인 하세요~");
        }
        
    } catch (error) {
        console.log(error);
    }
}

exports.admin1 = async (req,res)=>{
    await User.update(
        {admin : 1},{where : {user_id : req.params.id}}
    );
    res.redirect("/admin");
}

exports.delete1 = async (req,res)=>{
    await User.destroy({
        where : {user_id : req.params.id}
    });
    res.redirect("/admin");
}

exports.insert1 = async (req,res)=>{
    const {title, content, userid} = req.body;
    try {
        await Post.create({
            title : title,
            message : content,
            user_id : userid
        });

        const count = await Post.findAll({where:{user_id:userid}});
        console.log("해보장", count.length);
        if(count.length==2){
            await User.update(
                {grade:2},
                {where:{user_id:userid}}
            )
        }

        res.redirect("/board");
    } catch (error) {
        console.log(error);
    }
}

exports.edit = async (req,res)=>{
    const {title, content} = req.body;

    const param = req.params.id;
    try {
        await Post.update(
            {title : title, message: content},{where : {id : param}}
        );
        res.redirect("/board");
    } catch (error) {
        console.log(error);
    }
}

exports.delete2 = async (req,res)=>{
    const param = req.params.id;
    await Post.destroy({
        where : {id : param}
    });

    res.redirect("/board");
}

exports.comment1 = async (req,res)=>{
    const {comment} = req.body;
    const id = req.params.id;
    const ses = req.session.user_id;

    const abc = await User.findOne({where:{user_id:ses} });
    console.log(abc);
    if(abc.grade == 1){
        return res.send("등급업 하세요~");
    }

    await Comment.create({
        comment_id : id,
        userid: ses, 
        message : comment
    });

    const data = await Comment.findAll({});
    res.redirect("/view/"+id);
}

exports.mypage1 = async (req,res)=>{
    const ses = req.session.user_id;
    const data = await User.findOne({where: {user_id:ses}});
    const data2 = await Post.findAll({where: {user_id:ses}});
    const data3 = await Comment.findAll({where: {userid:ses}});

    // let nick = data.user_nick;

    res.render("mypage", {data:data, data2: data2, data3: data3});
}

exports.nickupdate = async (req,res)=>{
    const {nick} = req.body;
    const ses = req.session.user_id;
    await User.update(
        {user_nick : nick},{where : {user_id : ses}}
    );
    res.redirect("/mypage");
}

