const mysql2 = require("mysql2/promise");

const mysql = mysql2.createPool({
    user: "root",
    password: "0501",
    database: "0516",
    multipleStatements : false
});


// module.exports = mysql;

// ----------------------------

exports.userInit = async () =>{
    try {
        await mysql.query("select * from users");
    } catch (error) {
        await mysql.query("create table users(id INT AUTO_INCREMENT PRIMARY KEY, user_id VARCHAR(20), user_pw VARCHAR(128), refresh VARCHAR(500))");
    }
}

exports.userSelect = async (user_id)=>{
    try {
        const [result] = await mysql.query("select * from users where user_id = ?", [user_id]);
        return result[0];
    } catch (error) {
        console.log(error);
    }
}

exports.userInsert = async(user_id, user_pw) =>{
    try {
        const [user] = await mysql.query("select * from users where user_id =?", [user_id]);

        if(user.length != 0){
            let err = new Error("중복 아이디임");
            console.log(err);
            return err;
        }

        await mysql.query("insert into users(user_id, user_pw)values(?,?)", [user_id, user_pw]);
    } catch (error) {
        console.log(error);
    }
}

exports.userRefresh = async (user_id, refresh)=>{
    try {
        await mysql.query("UPDATE users SET refresh =? WHERE user_id = ?", [refresh, user_id]);
    } catch (error) {
        console.log(error);
    }
}

exports.userInit();

module.exports = {
    userSelect : exports.userSelect, 
    userInsert : exports.userInsert,
    userRefresh : exports.userRefresh
};
