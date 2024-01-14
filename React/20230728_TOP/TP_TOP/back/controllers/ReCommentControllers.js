const {Comment, Recomment,User} = require("../models")

// // 대댓글을 보여줄 수 있는 컨트롤러
exports.recommentlist =async(req,res)=>{
    try {
        // const userdata = await User.findOne({ where: { id }})
        const temp = await Recomment.findAll({ include: [{ model: User }] })
        console.log("999999999",temp)
        const data = temp.map((value) => {
            
            return { ...value.dataValues, User: value.dataValues.User.profile_img,
                UserNickname: value.dataValues.User.nickname }
        })
        console.log("98888888888888888",data)
        
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}
// 대댓글 작성 컨트롤러
exports.createRecomment = async(req,res)=>{
    // const {id} = req.decoded;
    const {comment_id, detail}=req.body
    comment_id.commentIndex
    const userId = req.decoded
    const UserFront_id = userId.front_id
    const userinfo = await User.findOne({where : {user_id:UserFront_id}})
    const userid = userinfo.id;

    try {
        await Recomment.create({
            comment_id :comment_id.commentIndex,
            // nickname : nickname,
            detail : detail,
            user_id:userid,
        })
        res.send("recomment success")
    } catch (error) {
        console.log("대댓글 작성 컨트롤러레서 오류남")
        console.log(error)
    }
}


// 대댓글 삭제 컨트롤러
exports.deleteRecomment = async(req,res)=>{
    try {
        const { id } = req.params;
        await Recomment.destroy({ where: { id } });
        res.send("delete success")
      } catch (error) {
          console.log("대댓글 삭제 컨트롤러 에러남")
        console.error(error);
      }
}