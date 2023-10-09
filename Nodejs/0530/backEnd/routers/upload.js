const router = require("express").Router();
const { Upload } = require("../mid/imgUpload");
const { User } = require("../models");

// router.post("/", Upload.single("form에서 정한 파일의 name"), (req,res)=>{

// Upload.single 매개변수로 form에서 이미지 파일을 가지고 있는 input의 name을 작성해주자.
router.post("/", Upload.single("upload"), (req, res) => {
  const { file, body } = req;
  console.log("file, body ::::::", file, body);
  // 데이터 베이스에 이미지의 경로를 추가
  // /img/upload/~~~.png 로 저장됨

  res.send("파일 저장됨");
});

router.post("/insert", Upload.single("upload"), async (req, res) => {
  const { user_id1, user_pw1 } = req.body;
  // console.log(req);
  const { file } = req;

  // console.log(file.filename);
  // console.log("들어옴1?", user_id1);
  // console.log("들어옴2?", user_pw1);

  await User.create({
    user_id: user_id1,
    user_pw: user_pw1,
    img: file.filename,
  });

  res.send();
});

router.post("/login", Upload.single("upload"), async (req, res) => {
  const { user_id1, user_pw1 } = req.body;
  console.log(user_id1);

  const a = await User.findOne({ where: { user_id: user_id1 } });
  // console.log("a: ",a.dataValues.user_id);
  // console.log("b: ",a.dataValues.user_pw);
  // console.log(a);
  let res1 = 0;

  if (a != null) {
    if (user_id1 == a.dataValues.user_id && user_pw1 == a.dataValues.user_pw) {
      console.log("로그인완료");
      console.log(user_id1);
      req.session.user_id = user_id1;
      res1 = 1;
    } else {
      console.log("로그인 실패");
      res1 = 0;
    }
  }

  res.json(res1);
});

router.get("/profile", async (req, res) => {
  try {
    let ses = req.session.user_id;
    let param = req.params.id;
    console.log("세션", ses);

    const abc = await User.findOne({where:{user_id:ses}});
    let aa = abc.dataValues.img;


    // const { file } = req;
    // console.log("파일명 : ", file.filename);
    // console.log("이거임?", body);
    // res.send(file.filename);
    res.json(aa);
  } catch (error) {
    console.log(error);
  }
});

router.post("/profilechange", Upload.single("upload"), async (req,res)=>{
  const { file } = req;
  console.log("almost", file.filename);

  let ses = req.session.user_id;

  await User.update({img: file.filename}, {where:{user_id:ses}});


  res.json(file.filename);
});

module.exports = router;
