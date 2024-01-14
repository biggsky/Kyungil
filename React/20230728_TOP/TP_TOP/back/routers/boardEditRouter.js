const router = require("express").Router();
const {BoardEdit} = require("../controllers/BoardEditControllers");
const multer = require("multer");
const {isLogin} = require("../controllers/isLogin");
const path = require("path");

// Multer 설정
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join("..",'front', "public","imgs","userplanimg"));
      // cb(null, path.join(__dirname,"..", "..", "..", "..", "..","var", "www", "front", "build", "imgs", "userplanimg"));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = path.extname(file.originalname)
      cb(null,  uniqueSuffix + fileExtension);
    },
});

const upload = multer({ storage: storage });

// router.post("/boardEdit", BoardEdit);
router.post("/boardEdit/:id",upload.array("uploadedFiles",5),isLogin,BoardEdit);

module.exports = router;
