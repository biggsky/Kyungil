const mysql = require('./config');
// 글의 내용 작성
// 수정 추가 삭제
// 게시판의 기능들이 작성될 공간
const posts = {
    // 테이블을 초기화 해주는 함수
    initTable : async function(){
        try{
            // 배열의 스프레드 연산자 0 1 2 3 4 이런식으로 순서대로 담긴다.
            const [result, result2] = await mysql.query("SELECT * FROM posts");
            // await mysql.query("SELECT * FROM posts");
            console.log("who",result);
        }catch(error){
            // console.log(error);
            await mysql.query("CREATE TABLE posts(id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(20), content VARCHAR(20))");
        }
    },


    // 글의 리스트를 조회 하는 함수
    viewPostAll : async function(){
        try {
            const [result] = await mysql.query("SELECT * FROM posts");
            // posts 테이블의 데이터 전부 조회
            return result;
        } catch (error) {
            console.log("글 전체 조회 에러남");
        }
    },

    // 글을 선택했을때 글하나를 보여줄 함수

    // async await 를 사용하던지 then을 사용하던지 둘중에 하나만
    // 같이 쓰면 절대 안됩니다.

    // 글을 선택했을때 글하나를 보여줄 함수
    selectPost : async function(id){
        try {
            const [result] = await mysql.query("SELECT * FROM posts WHERE id = ?", [id]);
            console.log("선택한 게시글 : ", result[0]);
            return result[0];
        } catch (error) {
            console.log("글 선택 조회 에러남~");
        }
    },

    // // 글을 추가 해주는 메서드
    insert : async function(title, content){
        try {
            await mysql.query("INSERT INTO posts (title, content) VALUES(?,?)", [title, content]);
            console.log("글추가 완료");
        } catch (error) {
            console.log("글추가 에러남~");
        }
    },

    // // 글 수정하는 메서드
    update : async function(id, title, content){
        try {
            let [abc] = await mysql.query("UPDATE posts SET title = ?, content = ? WHERE id= ?", [title, content, id]);

            if(abc.affectedRows ===0){
                console.log(abc);
            }
            console.log("게시글 수정 완료~");
        } catch (error) {
            console.log(error);
        }
    },

    delete : async function(id){
        try {
            await mysql.query("DELETE FROM posts WHERE id=?; UPDATE posts SET posts.id = @CNT:=@CNT+1; ALTER TABLE posts AUTO_INCREMENT = 0;", [id]);
            // await mysql.query("DELETE FROM posts WHERE id=?;", [id]);
            console.log("게시글 삭제 완료");
        } catch (error) {
            console.log("게시글 삭제 에러남");
        }
    }

}


posts.initTable();
// posts.viewPostAll();
// posts.insert("2", "2");
// posts.selectPost(1);
posts.update(100, "500", "500");

// posts.delete(3);

module.exports = posts;

// console.log(mysql);


