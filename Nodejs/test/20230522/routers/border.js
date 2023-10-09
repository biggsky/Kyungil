const router = require("express").Router();
const {isLogin} = require("../middleware/login");
const {
borderMain,
borderView, 
createBorder,
updataBorder,
borderDel} = require('../controllers/borderController');

router.get('/',isLogin,borderMain);

router.get('/view/:id', isLogin, borderView);

router.post('/create_border',isLogin, createBorder);

router.post('/view_update/:id', isLogin, updataBorder);

router.get("/del/:id",isLogin, borderDel);

module.exports = router;