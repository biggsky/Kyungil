const {User,LikeBoard,Board} = require("../models")

// exports.Boardlikeslist = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const commentArr = await Comment.findAll({
//       where: { board_id: id }, include: {
//         model: LikeBoard
//       }
//     })
//     const temp = commentArr.map((value) => {
//       return {
//         ...value, LikeBoard: value.dataValues.LikeBoard.map((value2) => {
//           return value2.dataValues
//         })
//       }

//     })

//     // const data = await LikeComment.findAll()
//     res.json(data)
//   } catch (error) {
//     console.log("likeslist 오류터짐")
//     console.log(error)
//   }
// }

exports.updatBoardLikes = async (req, res) => {
   
    const board_id = req.body.board_id
    const userData = req.decoded;
    const UserId = userData.front_id
    // req.decoded에 있는 email을 이용해서 User.findOne으로 해당 유저의 id를 찾고 그 아이디를 user_id에 삽입
  
    try {
      const user = await User.findOne({ where: { user_id: UserId }})
      const user_id = user.id;
      const likeBoardData = await LikeBoard.create( { board_id,user_id } );
      res.send(likeBoardData)
     
    } catch (error) {
      console.log("BoardupdateLikes에서 오류남")
     console.log(error)
    }
  }
  // 하트 삭제 컨트롤러
  exports.BoarddeleteLikes = async (req, res) => {

    const userData = req.decoded;
    const UserId = userData.front_id;
    
    try {
      const user = await User.findOne({ where: { user_id: UserId }});
      // const board = await Board.findOne({ where: { user_id: boardId } });
      const user_id = user.id;
      const boardId = req.params.id
      console.log("777777777777777777",boardId)
      // const board_id = board.id
      await LikeBoard.destroy({ where: { user_id: user_id,board_id:boardId } });
      res.send("BoarddeleteLikes success");
    } catch (error) {
      console.log("BoarddeleteLikes error");
      console.log(error);
     
    }
  }