const {User,Board} = require("../models")



exports.BoardList = async (req, res) => {
    try {
        const temp = await Board.findAll({ include: [{ model: User }] })
        const data = temp.map((value) => {
            
            return { ...value.dataValues, User: value.dataValues.User.profile_img }
        })
        res.json(data)
    } catch (error) {
        console.log("allboard 오류터짐")
        console.log(error)
    }

  }

  exports.get_board_Info = async (req, res)=>{
    try {
        let param = req.params.id;
        const temp = await Board.findOne({
            where: {
              id: param,
            }
          });

          let title = temp.dataValues.title;
          let detail = temp.dataValues.detail;
          let images = temp.dataValues.images;

        // const data = temp.map((value) => {
            
        //     return { ...value.dataValues, User: value.dataValues.User.profile_img }
        // })
        res.json({title, detail, images})

    } catch (error) {
        console.log(error);
    }
  }