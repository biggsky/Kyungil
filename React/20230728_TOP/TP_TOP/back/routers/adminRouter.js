const router = require("express").Router();
const {
  getUsers,
  authUser,
  unauthUser,
  deleteUser,
} = require("../controllers/adminControllers");

router.get("/users", getUsers);
router.post("/auth/:id", authUser);
router.post("/unauth/:id", unauthUser);
router.post("/del/:id", deleteUser);

module.exports = router;
