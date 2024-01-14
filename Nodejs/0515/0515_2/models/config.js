const mysql2 = require("mysql2/promise");

const mysql = mysql2.createPool({
    user: "root",
    password : "0501",
    database : "test12",
    multipleStatements : true
});

module.exports = mysql;