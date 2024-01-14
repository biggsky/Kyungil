const {User, Board} = require("../models");

exports.loginClick1 = async (req,res)=>{
    try {
        let formloginid = req.body.data.user_id;
        let formloginpw = req.body.data.user_pw;
        
        const userConfirm = await User.findOne({where:{user_id:formloginid, user_pw:formloginpw}});
        // console.log("컨펌:", userConfirm);
        if(userConfirm == null){
            setTimeout(() => {
                return res.json("0");
            }, 1000);
        }else{
            setTimeout(() => {
                req.session.user_id = formloginid;
                return res.json("1");
            }, 1000);
        }
    } catch (error) {
        console.log(error);
    }
}

exports.signUpClick1 = async (req,res)=>{
    try {
        let reqbody = req.body.data;
        let data = await User.findOne({where:{user_id: reqbody.user_id}});
        if(data == null){
            await User.create({
                user_id : reqbody.user_id,
                user_nickname : reqbody.user_nickname,
                user_pw : reqbody.user_pw,
            });
            setTimeout(() => {
                return res.json("1");
            }, 1000);
        }else{
            // new Error('중복')
            setTimeout(() => {
                return res.json("0");
            }, 1000);
        }

    } catch (error) {
        // if(error.msg=='중복'){}
        console.log(error);
    }
}

exports.boardBtnClick1 = async (req,res)=>{
    try {
        let titlecontentvalue = req.body.data;
        let session = req.session.user_id;
        // console.log(session);
        await Board.create({title:titlecontentvalue.title, content:titlecontentvalue.content, user_id: session });

        return res.json("1");

    } catch (error) {
        console.log(error);
    }
}

exports.listget1 = async (req,res)=>{
    try {
        const data = await Board.findAll({});
        // console.log(data[0].dataValues);
        // console.log(data[1].dataValues);
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}

exports.listget2 = async(req, res)=>{
    try {
        let params = req.params.id;
        // console.log("파람", params);
        const data = await Board.findOne({where:{id: params} });
        return res.json(data);
    } catch (error) {
        console.log(error);
    }
}

exports.boardUpdate1 = async(req,res)=>{
    try {
        let params = req.params.id;
        let updatevalue = req.body.data;

        await Board.update({title: updatevalue.title , content: updatevalue.content },{where:{id:params}});

        return res.json("1");
    } catch (error) {
        console.log(error);
    }
}

exports.boardDelete1 = async(req,res)=>{
    try {
        let param = req.params.id;
        console.log(param);
        await Board.destroy({where:{id:param}});
        return res.json("1");

    } catch (error) {
        console.log(error);
    }
}