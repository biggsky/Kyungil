const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const { isLogin } = require("../controllers/isLogin");

const {
  allBoard,
  createBoard,
  detailBoard,
  editBoard,
  deleteBoard,
} = require("../controllers/postController");
const {
  commentlist,
  createComment,
  editComment,
  deleteComment,
} = require("../controllers/CommentControllers");
const {
  recommentlist,
  createRecomment,
  deleteRecomment,
} = require("../controllers/ReCommentControllers");
const {
  likeslist,
  updateLikes,
  deleteLikes,
} = require("../controllers/likecommentController");
const {
  Boardlikeslist,
  updatBoardLikes,
  BoarddeleteLikes,
} = require("../controllers/boardlikeController");

// Multer 설정
// 배포시 경로 설정 잘하자
// path.join(__dirname, "..", "..", "front", "build", "imgs", "userplanimg")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join("..", "front", "public", "imgs", "userplanimg"));
    // cb(null, path.join(__dirname,"..","..","..","..","..","var", "www", "front", "build", "imgs", "userplanimg"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, uniqueSuffix + fileExtension);
  },
});

const upload = multer({ storage: storage });
router.get("/allboard", isLogin, allBoard);
router.post("/write", upload.array("uploadedFiles", 5), isLogin, createBoard);
router.get("/detail/:id", detailBoard);
router.post("/edit/:id", upload.array("uploadedFiles", 5), editBoard);
router.get("/delete/:id", deleteBoard);

// router.get("/commentlist", isLogin, commentlist);
router.post("/createComment", isLogin, createComment);
router.post("/commentEdit/:id", isLogin, editComment);
router.get("/commentDelet/:id", isLogin, deleteComment);

router.get("/recommentlist", isLogin, recommentlist);
router.post("/createRecomment", isLogin, createRecomment);
router.get("/deleteRecomment/:id", isLogin, deleteRecomment);

router.post("/updatelikes/:id", isLogin, updateLikes);
router.get("/deleltlikes/:id", isLogin, deleteLikes);

router.post("/updateboardlikes/:id", isLogin, updatBoardLikes);
router.get("/deleltboardlikes/:id", isLogin, BoarddeleteLikes);

module.exports = router;
