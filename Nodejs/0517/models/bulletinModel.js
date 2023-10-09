const sql = require("./config");


exports.createBulletinTable = async ()=>{
    try {
        await sql.query("select * from bulletin");
    } catch (error) {
        await sql.query("create table bulletin (id INT AUTO_INCREMENT PRIMARY KEY, user_id varchar(20), title varchar(20), content varchar(500))");
    }
}

exports.showtable = async()=>{
    try {
        const [arr] = await sql.query("select * from bulletin");
        return arr;
    } catch (error) {
        console.log(error);
    }
}

exports.showone = async (id)=>{
    try {
        const [one]= await sql.query("select * from bulletin where id=?",[id]);
        return one[0];
    } catch (error) {
        console.log(error);
    }
}

exports.edit = async (title, content, id)=>{
    try {
        await sql.query("update bulletin set title = ?,content = ? where id = ?", [title, content, id]);
    } catch (error) {
        console.log(error);
    }
}

exports.Delete = async (id)=>{
    try {
        await sql.query("delete from bulletin where id=?; set @cnt=0; update bulletin set bulletin.id=@cnt:=@cnt+1; alter table bulletin auto_increment = 0", [id]);
    } catch (error) {
        console.log(error);
    }
}

exports.add = async (title, content)=>{
    try {
        await sql.query("insert into bulletin (title, content) values(?,?)", [ title, content]);
    } catch (error) {
        console.log(error);
    }
}