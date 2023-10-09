const mysql2 = require("mysql2/promise");

const mysql = mysql2.createPool({
    user: "root",
    password: "0501",
    multipleStatements : true,
    database : "0509"
});

mysql.getConnection((err, res)=>{
    console.log(err);
});

module.exports = mysql;