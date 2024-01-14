const sql = require("./config");


exports.createUserTable = async ()=>{
    try {
        await sql.query("select * from users");
    } catch (error) {
        await sql.query("create table users(id INT AUTO_INCREMENT PRIMARY KEY, user_id varchar(20), user_pw varchar(128), refresh varchar(255))");
    }
};

exports.idsearch = async (user_id)=>{
    try {
        const [value] = await sql.query("select * from users where user_id = ?", [user_id]);
        // [value] = [[{}], {}]
        return value[0];
    } catch (error) {
        console.log(error);
    }
}

exports.insert = async (user_id, user_pw)=>{
    try {
        const [value] = await sql.query("select * from users where user_id = ?", [user_id]);
        if(value.length !== 0){
            console.log("아이디 중복됨");
            let err = new Error("아이디 중복됨");
            return err;
        }
        
        const pw = await user_pw;
        await sql.query("insert into users(user_id, user_pw)values(?,?)", [user_id, pw]);
    } catch (error) {
        console.log(error);
    }
}