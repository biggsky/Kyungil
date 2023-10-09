const { User, Board } = require("../models");

exports.BoardEdit = async (req, res) => {
  try {
    let param = req.params.id;

    const { title, detail } = req.body;
    const userId = req.decoded;
    const UserFront_id = userId.front_id;
    const userinfo = await User.findOne({ where: { user_id: UserFront_id } });
    const usernick = userinfo.nickname;
    const userID = userinfo.id;
    const tempImgArr = req.files.map((img) => {
      return img.filename;
    });

    const imgFiles = JSON.stringify(tempImgArr);

    // const { filename } = req.file
    await Board.update({
      title: title,
      detail: detail,
      images: imgFiles,
      likes: 0,
      views: 0,
      nickname: usernick,
      user_id: userID,
    },{
        where:{
            id : param,
        }
    });

    res.send("create success");
  } catch (error) {
    console.log("allboard 오류터짐");
    console.log(error);
  }
};
