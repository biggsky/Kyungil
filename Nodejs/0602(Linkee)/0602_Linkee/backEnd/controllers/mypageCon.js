const {User,Post} = require("../models");

exports.myPost = async (req,res)=>{
    const {acc_decoded} = req;
    const {user_id} = acc_decoded;
    
    try {
        const user = await User.findOne({where : {user_id}});
        const posts = await Post.findAll({where : {user_id : user.id}});
        const data = posts.map((user)=>user.get({plain : true}));

        // console.log(user.user_id);

        const response = {
            data : data,
            user : user
        };
        res.json(response);
    } catch (error) {
        console.log(error);
        console.log("Unable to show the table in the controller");
    }
};