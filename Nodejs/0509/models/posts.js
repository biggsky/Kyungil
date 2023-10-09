const mysql = require("./config");

const posts = {
  register: async function (n, p) {
    try {
      const [result] = await mysql.query("SELECT * FROM user WHERE name = ?", [n]);
      if(result[0]){
        return 0;
      }
      await mysql.query("INSERT INTO user(name, password) VALUES(?,?);", [n,p]);
    } catch (error) {
      console.log(error);
    }
  },
  idCheck : async function(name, pw){
    try {
      const [data] = await mysql.query("select * from user where name=?",[name]);
      return data[0];
    } catch (error) {
      console.log(error);
    }
  },
  pwCheck :async function(pw){
    try {
      const [data] = await mysql.query("select * from user where password=?",[pw]);
      return data[0];
    } catch (error) {
      console.log(error);
    }
  },
  mylist : async function(name){
    try {
      const [data] = await mysql.query("select * from bulletin where name=?",[name]);
      return data[0];
    } catch (error) {
      console.log(error);
    }
  },

  initTable: async function () {
    // await mysql.query("CREATE TABLE b_like(like_id INT AUTO_INCREMENT PRIMARY KEY, user_id VARCHAR(20), b_id VARCHAR(20))");
    try {
      // const [result] = await mysql.query("SELECT * from user");
      // const [bulletin] = await mysql.query("SELECT * from bulletin");
      // const [bulletin] = await mysql.query("SELECT * from comments");
      // const [bulletin] = await mysql.query("SELECT * from comments");

    } catch (error) {
      // await mysql.query("CREATE TABLE user( id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20), password VARCHAR(20))");
      // await mysql.query("CREATE TABLE bulletin(b_id INT AUTO_INCREMENT PRIMARY KEY,user_id VARCHAR(20), name VARCHAR(20), title VARCHAR(20), content VARCHAR(100))");
      // await mysql.query("CREATE TABLE comments(b_id VARCHAR(20), anonymous VARCHAR(20), c_content VARCHAR(20))");
    }
  },
  viewBulletin : async function(){
    try {
      const [blist] = await mysql.query("SELECT * from bulletin");
      console.log(blist);
    } catch (error) {
      console.log("게시판리스트 보내는거 실패");
    }
  },
  createBulletin: async function (tt, t, i) {
    try {
      let ii = decodeURIComponent(i);
      await mysql.query("INSERT INTO bulletin(b_id, user_id, name, title, content) VALUES(DEFAULT,DEFAULT,?,?,?);", [ii, tt, t]);
      console.log("게시판 등록 완료");
    } catch (error) {
      console.log(error);
      console.log("게시판 글작성 에러남");
    }
  },
  addcomments: async function (c_name, c_text, c_val) {
    try {
      await mysql.query("INSERT INTO comments(b_id, anonymous, c_content) VALUES(?,?,?);", [c_val, c_name, c_text]);
      console.log("게시판 등록 완료");
    } catch (error) {
      console.log(error);
      console.log("게시판 글작성 에러남");
    }
  },
  delete: async function (id) {
    try {
      // await mysql.query("DELETE FROM user WHERE id=?; UPDATE user SET user.id = @CNT:=@CNT+1; ALTER TABLE user AUTO_INCREMENT = 0;", [id]);
      await mysql.query(
        "DELETE FROM user WHERE id=?; ALTER TABLE user AUTO_INCREMENT = 0;",
        [id],
      );
      console.log("삭제 완료");
    } catch (error) {
      console.log("삭제 에러");
    }
  },
  heartInsert: async function(t1, t2){
    try {
      await mysql.query("INSERT INTO b_like(user_id, b_id) VALUES(?,?);", [t1, t2]);
      console.log("좋아요 등록 완료");
    } catch (error) {
      console.log("좋아요 models안 에러남");
    }
  }
};

posts.initTable();
// posts.viewBulletin();
// posts.login("name", "password");
// posts.login("1", "1");
// posts.delete(31);

module.exports = posts;
