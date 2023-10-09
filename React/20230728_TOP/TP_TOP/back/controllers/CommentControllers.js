const { User, Board, Comment,Recomment } = require("../models")

// // 댓글을 보여줄 수 있는 컨트롤러
// exports.commentlist = async(req,res)=>{
//     try {
        
//         const userdata = await User.findOne({ where: { id }})
//         const data = await Comment.findAll({
//             include:[{model:Recomment}]
//         })
//         res.json(data,userdata)
//     } catch (error) {
//         console.log("commentlist 오류터짐")
//         console.log(error)
//     }
// }

// 댓글 작성 컨드롤러
exports.createComment = async (req, res) => {
    const userId = req.decoded
    const UserFront_id = userId.front_id
    const userinfo = await User.findOne({where : {user_id:UserFront_id}})
    const userid = userinfo.id;
    const { board_id, detail } = req.body

    try {
        await Comment.create({
            board_id,
            detail: detail,
            user_id:userid,
        })
        res.send("create success")
        res.send()
    } catch (error) {
        console.log(error)
    }
}

// 댓글 수정 컨트롤러
exports.editComment = async (req, res) => {
    const { id } = req.params
    const { detail } = req.body;
    try {
        await Comment.update({ detail }, { where: { id } })
        res.send("comment success")
    } catch (error) {
        console.log("댓글 수정 컨트롤러 에러")
        console.log(error)
    }
}

// 댓글 삭제 컨트롤러
exports.deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        await Comment.destroy({ where: { id } });
        res.send("delete success")
    } catch (error) {
        console.log("댓글 삭제 컨트롤러 에러남")
        console.error(error);
    }
};