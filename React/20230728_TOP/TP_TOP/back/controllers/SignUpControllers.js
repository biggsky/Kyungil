const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.SaveUserInfo = async (req, res) => {
  const { user_id, user_pw, nickname, email } = req.body;

  try {
    const data = await User.findOne({
      where: {
        user_id,
      },
    });
    if (data) {
      res.send("already user exist");
    } else {
      bcrypt.hash(user_pw, 10, async (err, hash) => {
        if (err) {
          console.log(err);
          res.send("Error hashing password in SaveUserInfo");
        } else {
          const result = await User.create({
            user_id,
            user_pw: hash,
            nickname,
            email,
            is_accept: false,
            profile_img : 'default_profile.jpeg'
          });
          res.send("user signUp success");
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.status(404);
  }
};

exports.ValidateDuplicateUserId = async (req, res) => {
  const { user_id } = req.body;

  try {
    const userInfo = await User.findOne({ where: { user_id } });
    if (userInfo) {
      res.send("already user exist");
    } else {
      res.send("success");
    }
  } catch (error) {
    console.log(error);
    res.status(404);
  }
};
exports.ValidateDuplicateNickName = async (req, res) => {
  const { nickname } = req.body;

  try {
    const userInfo = await User.findOne({ where: { nickname } });
    if (userInfo) {
      res.send("already user exist");
    } else {
      res.send("success");
    }
  } catch (error) {
    console.log(error);
    res.status(404);
  }
};

exports.Logout = async (req, res) => {
  try {
    res.clearCookie("access_token", {
      httpOnly: true,
      sameSite: "None",
      secure: true,
    });
    console.log("쿠키 없앰");
    res.send("success");
  } catch (error) {
    console.log(error);
  }
};


exports.GetLoginUser = async (req, res) => {
  try {
    const { front_id } = req.decoded;
    const userInfo = await User.findOne({ where: { user_id: front_id } });
    userInfo.user_pw = "";
    res.json(userInfo);
  } catch (error) {
    console.log(error);
    res.send("fail");
  }
};
