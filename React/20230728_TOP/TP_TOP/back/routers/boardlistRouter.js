const router = require("express").Router();
const {BoardList, get_board_Info} = require("../controllers/BoardListControllers");

// board 정보 가져오기
router.get("/boardlist", BoardList);

router.get("/get_board_Info/:id", get_board_Info);

module.exports = router;
