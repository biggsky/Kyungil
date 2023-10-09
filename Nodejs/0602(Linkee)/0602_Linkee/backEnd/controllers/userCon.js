const { User, LoginCount, Post } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { where } = require("sequelize");

exports.signUp1 = async (req, res) => {
  try {
    const { user_id, user_name, nickname, user_pw } = req.body.data;

    if (user_id == "") {
      return;
    }
    const user = await User.findOne({ where: { user_id: user_id } });
    if (user != null) {
      // return res.send("중복 회원가입임!");
      return;
    }

    const user_nick = await User.findOne({ where: { nickname: nickname } });
    if (user_nick != null) {
      return;
    }

    const hash = bcrypt.hashSync(user_pw, 10);
    await User.create({
      user_id: user_id,
      user_name: user_name,
      nickname: nickname,
      user_pw: hash,
      user_id: user_id,
      level: 0,
      follower: 0,
      following: 0,
      profile_img: "default_profile.jpeg"
    });
    res.json("1");
    // res.redirect("http://127.0.0.1:5500/frontEnd/page/login.html");

  } catch (error) {
    console.log(error);
  }
};

exports.idCheck = async (req, res) => {
  try {
    let param = req.params.id;
    const idCheck = await User.findOne({ where: { user_id: param } });
    if (idCheck != null) {
      res.json("0");
    } else {
      res.json("1");
    }
    // console.log(idCheck);
  } catch (error) {
    console.log(error);
  }
};

exports.nicknameCheck = async (req, res) => {
  try {
    let param = req.params.id;
    const nickCheck = await User.findOne({ where: { nickname: param } });
    if (nickCheck != null) {
      res.json("0");
    } else {
      res.json("1");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.login1 = async (req, res) => {
  try {
    // const {user_id, user_pw} = req.body;

    // if(user_pw == ""){
    //     return;
    // }
    // const user = await User.findOne({where:{user_id:user_id}});
    // if(user == null){
    //     // return res.send("가입 안한 아이디임!");
    //     return;
    // }

    // const same = bcrypt.compareSync(user_pw, user.user_pw);
    // // const {name, age} = user;
    // if(same){
    //     let token = jwt.sign({
    //         user_id,
    //     },process.env.ACCESS_TOKEN_KEY,{
    //         expiresIn : "60m"
    //     });
    //     req.session.access_token = token;
    //     req.session.user_id = user_id;
    //     return res.redirect("http://127.0.0.1:5500/0602_Linkee/frontEnd/page/main.html");
    // }else{
    //     // return res.send("비밀번호 틀림");
    //     return;
    // }
  } catch (error) {
    console.log(error);
  }
};
exports.loginalert = async (req, res) => {
  try {
    let param = req.params.id;
    const loginId = await User.findOne({ where: { user_id: param } });
    if (loginId == null) {
      res.json("0");
    } else {
      res.json("1");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.passwordalert = async (req, res) => {
  try {
    let param = req.query;
    let user_id = param.user_id;
    let pw = param.user_pw;
    const user = await User.findOne({ where: { user_id } });

    if(user.level == 0){
      return res.json("2");
    }
    else if(user.level == 9){
        return res.json("9");
    }
    
    const same = bcrypt.compareSync(pw, user.user_pw);

    if (same) {
      let token = jwt.sign({
          user_id,
        },
        process.env.ACCESS_TOKEN_KEY,
        {
          expiresIn: "60m",
        },
      );
      req.session.access_token = token;
      req.session.user_id = user_id;
      req.session.iidd = user.id;
      // 여기에다가 만들면 됨
      // let time = new Date();
      // time.setHours(time.getHours() + 9);
      // let koreanTime = time.toISOString().replace('Z', '');

      let currentDate = new Date();
      let koreanDateTime = currentDate.toLocaleString('ko-KR');
      let split1 = koreanDateTime.split("오");

      let timecompare = await LoginCount.findOne({where:{date:split1}});
      if(timecompare == null){
        await LoginCount.create({
          date : split1[0],
          cnt : "1",
        });
      }else{
        let plus = Number(timecompare.cnt) + 1;
        await LoginCount.update({cnt : plus}, {where:{date:split1}});
      }


      
      res.json("1");
    } else {
      res.json("0");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.admin1 = async (req,res)=>{
  try {
    const signUp = await User.findAll({where: {level:0} });
    res.json(signUp);
  } catch (error) {
    console.log(error);
  }
}

exports.admin2 = async (req,res)=>{
  try {
    const acceptUser = await User.findAll({where: {level:1} });
    res.json(acceptUser);
  } catch (error) {
    console.log(error);
  }
}

exports.levelchange = async (req,res)=>{
  let param = req.params.id;
  await User.update({level: 1}, {where:{user_id:param}});
  res.json("1");
}

exports.deny = async (req,res)=>{
  let param = req.params.id;
  await User.destroy({where:{user_id:param}});
  res.json("1");
}

exports.dayCnt = async (req,res)=>{
  let currentDate = new Date();
  let koreanDateTime = currentDate.toLocaleString('ko-KR');
  let split1 = koreanDateTime.split("오");
  let aaa= await LoginCount.findOne({where:{date: split1[0]}});
  if(aaa != null){
    res.json(aaa.dataValues.cnt);
  }else{
    res.json("0");
  }
}

exports.postCnt = async (req,res)=>{
  let allpostNumber = await Post.findAll({});
  res.json(allpostNumber.length);
}

exports.unAuth = async (req,res)=>{
  let param = req.params.id;
  await User.update({level: 0}, {where:{user_id:param}});
  res.json("1");
}

