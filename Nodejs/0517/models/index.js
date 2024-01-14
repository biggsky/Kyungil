const sql = require("./config");

const {createUserTable, idsearch, insert} = require("./userModel");
const {createBulletinTable, showtable, showone, add, Delete, edit} = require("./bulletinModel");

createUserTable();
createBulletinTable();

module.exports = {idsearch, insert, showtable, showone, add, edit, Delete};