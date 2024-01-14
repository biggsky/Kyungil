const {userInit, userInsert, userSelect} = require("./userModel");
// ctrl + space 누르면 안에 뭐가 있는지

userInit();

module.exports = {userInsert, userSelect};