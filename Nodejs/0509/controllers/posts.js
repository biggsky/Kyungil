const { posts } = require("../models");

exports.c_register = async function (req, res) {
  const { name, pw } = req.body;
  try {
    const data = await posts.register(name, pw);
    if (data == 0) {
      return res.send("아이디 있음");
    } else {
      res.redirect("/");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.c_idCheck = async function (req, res) {
  const { name, pw } = req.body;
  try {
    const data = await posts.idCheck(name, pw);
    if (!data) {
      return res.send("존재하지 않는 아이디");
    }

    const data1 = await posts.pwCheck(pw);
    if (!data1) {
      return res.send("비밀번호가 틀립니다!");
    } else {
      res.redirect("/bulletin");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.c_mylist = async function(req,res){
  try {
    let ses = req.body.input;
    console.log("0", ses);
    // console.log("아이엠",data[0]);
    // const aaa = "1";
    // const [data] = await posts.mylist(aaa);
    // return 0;
    // console.log(data[0]);
    // return res.render("mypage", {data});
  } catch (error) {
    console.log(error);
  }
  
}

exports.createBulletin = async function (req, res) {
  const { tt, ta } = req.body;
  // 게시판 글 제목 / 글내용
  let input1 = req.body.input;
  try {
    await posts.createBulletin(tt, ta, input1);
  } catch (error) {
    console.log("게시판 글작성(controllers) 부분 에러");
  }
};

exports.viewBulletin = async function (req, res) {
  try {
    await posts.viewBulletin();
  } catch (error) {
    console.log("게시판 리스트 불러오는거 실패");
  }
};

exports.addcomments = async function (req, res) {
  const { c_name, c_text, c_val } = req.body;
  console.log(c_name);
  console.log(c_text);
  try {
    await posts.addcomments(c_name, c_text, c_val);
  } catch (error) {
    console.log("게시판 추가 실패");
  }
};

exports.heartInsert = async function (req, res) {
  const { b_id, user_id } = req.body;
  try {
    await posts.heartInsert(b_id, user_id);
  } catch (error) {
    console.log("좋아요 컨트롤러안 실패");
  }
};
