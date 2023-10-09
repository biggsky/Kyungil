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

exports.follow = async (req, res) => {
    const {user_id} = req.acc_decoded; // 로그인 한 유저
    const {id} = req.params; // 로그인 한 유저가 팔로우 한 유저
    try {
        const loginUser = await User.findOne({where : {user_id}});
        const targetUser = await User.findOne({where : {id}});

        let followingArr = JSON.parse(loginUser.following);
        let followerArr = JSON.parse(targetUser.follower);
        //console.log("로그인 유저의 following : ", followingArr)
        //console.log("타겟 유저의 follower : ", followerArr);

        if(loginUser.following == 0) {
            followingArr = [targetUser.id];
        }else {
            if(followingArr.includes(targetUser.id)) {
                let index = followingArr.indexOf(targetUser.id);
                followingArr.splice(index, 1); // 이미 배열에 있으면 빼내기 == 팔로우 취소
            }else {
                followingArr.push(targetUser.id); // 배열에 없으면 넣기 == 팔로우
            }
        }

        if(targetUser.follower == 0) {
            followerArr = [loginUser.id];
        }else {
            if(followerArr.includes(loginUser.id)) {
                let index = followingArr.indexOf(loginUser.id);
                followerArr.splice(index, 1); // 이미 배열에 있으면 빼내기 == 팔로우 취소
            }else {
                followerArr.push(loginUser.id)
            }
        }
        //console.log("로그인 유저의 following : ", followingArr);
        //console.log("타겟 유저의 follower : ", followerArr);

        let followingArrArr = JSON.stringify(followingArr)
        let followerArrArr = JSON.stringify(followerArr)

        await User.update({following : followingArrArr}, {where : {id : loginUser.id}});
        await User.update({follower : followerArrArr}, {where : {id : targetUser.id}});
    } catch (error) {
        console.log(error);
    }
}

exports.mypage = async (req,res,next)=>{
    try {
        const users = await User.findAll();
        // console.log(users[0]);
        // res.json(user);
        req.user = users;
        const posts = await Post.findAll();
        req.post = posts;
        next();
    } catch (error) {
        console.log(error);
    }
};

exports.editProfile = async (req,res)=>{
    try {
        const {nickname,profile_info} = req.body;
        const {acc_decoded} = req;
        const user_id = acc_decoded.user_id;
        console.log(acc_decoded);

        const user = await User.findOne({where : {user_id}});
        console.log(user);

        console.log(req.file);

        if(req.file == undefined){
            await User.update({
                nickname : nickname,
                profile_img : user.profile_img,
                profile_info : profile_info
            },
            {where : {user_id : user_id}});
        }else{
            await User.update({
                nickname : nickname,
                profile_img : req.file.filename,
                profile_info : profile_info
            },
            {where : {user_id : acc_decoded.user_id}});
        };

        res.redirect("/mypage");
    } catch (error) {
        console.log(error);
    };
};

exports.removeFollower = async (req, res) => {
    const {id} = req.params; // 삭제한 유저의 아이디
    console.log("이거다",id);
    const {user_id} = req.acc_decoded;
    try {
        const loginUser = await User.findOne({where : {user_id}});
        const targetUser = await User.findOne({where : {id}});
        console.log("target id", targetUser.id)

        let followerArr = JSON.parse(loginUser.follower); // 로그인 유저의 팔로워
        let followingArr = JSON.parse(targetUser.following); // 타겟 유저의 팔로잉

        if(followingArr.includes(loginUser.id)) {
            let index = followingArr.indexOf(loginUser.id);
            followingArr.splice(index, 1); // 이미 배열에 있으면 빼내기 == 팔로우 취소
        };

        if(followerArr.includes(targetUser.id)) {
            let index = followerArr.indexOf(targetUser.id);
            followerArr.splice(index, 1); // 이미 배열에 있으면 빼내기 == 팔로우 취소
        };

        let followingArrArr = JSON.stringify(followingArr)
        let followerArrArr = JSON.stringify(followerArr)

        console.log(followingArr)
        console.log(followerArr)
        await User.update({following : followingArrArr}, {where : {id : targetUser.id}});
        await User.update({follower : followerArrArr}, {where : {id : loginUser.id}});
    } catch (error) {
        console.log(error);
    }
};

exports.AllUser = async (req,res)=>{
    try {
        const allUser = await User.findAll();
        // console.log(allUser);
        res.json(allUser);
    } catch (error) {
        console.log(error);
    }
};