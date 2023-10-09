const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// 로그인 클릭시 실행되는 controllers
exports.loginClick = async (req, res) => {
  try {
    // front에서 보내는 id와 pw value값

    const front_id = req.body.user_id;
    const front_pw = req.body.user_pw;

    const useridExist = await User.findOne({ where: { user_id: front_id } });
    if (useridExist == null) {
      res.json("id_non-existent");
      // 프론트쪽에서 받아서 alert 를 띄우거나 경고창을 따로 띄워주기
    } else if (useridExist.is_accept == false) {
      res.json("is_accept_false");
    } else {
      const same = bcrypt.compareSync(front_pw, useridExist.user_pw);

      if (same) {
        let token = jwt.sign(
          {
            front_id,
          },
          process.env.ACCESSTOKENKEY,
          {
            expiresIn: "2h",
          }
        );
        // req.session.access_token = token;
        console.log(req.sessionID, "loggg");
        res
          .cookie("access_token", token, {
            httpOnly: true, //XSS공격을 막기위해 추가로 설정한 것
            sameSite: "None",
            secure: true,
          })
          .json("login_success");
        // 프론트쪽에서 받아서 화면 전환시킬것.
      } else {
        res.json("id_exist_but_pw_wrong");
        // 프론트쪽에서 받아서 alert를 띄워주거나 경고창 따로 띄워주기
      }
    }
  } catch (error) {
    console.log(error);
  }
  //   YdgmudAHhYIO5cV6QcHOly8jkCJYIX6h
  // n4-oGmlvYaMiqu3q2CTIkEVxCLbCxANe
};
