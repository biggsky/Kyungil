const mysql2 = require("mysql2/promise");

const mysql = mysql2.createPool({
    user: "root",
    password: "0501",
    database : "0517",
    multipleStatements : true
});

module.exports = mysql;