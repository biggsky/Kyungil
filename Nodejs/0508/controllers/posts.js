// 경로를 폴더 까지만 지정을 하면 index.js를 기본적으로 찾는다.
// 경로에 파일이 아니고 폴더 경로까지만 작성을 하면 기본 설정이 index.js를 찾는다.
const {posts} = require("../models");

exports.ViewPostAll = async function(q, s){
    try {
        const data = await posts.viewPostAll();
        return data;
    } catch (error) {
        console.log("전체글 조회 컨트롤러에서 에러남~");
    }
}

// 글 하나 조회 메서드
exports.SelectPost = async function(req, res){
    // req 요청 객체를 매개변수로 전달 해줄 예정
    const { id } = req.params;
    try {
        const data = await posts.selectPost(id);
        return data;
    } catch (error) {
        console.log("글 한개 조회 컨트롤러 에러남~");
    }
}

// 게시글 등록
exports.Insert = async function(req,res){
    // 요청 객체를 매개변수로 전달해줄 예정
    const {title, content} = req.body;
    try {
        await posts.insert(title, content);
    } catch (error) {
        console.log("글 추가 컨트롤러 에러남");
    }
}

// 게시글 수정
exports.Update = async function(req, res){
    const {id} = req.params;
    const {title, content} = req.body;
    try {
        await posts.update(id, title, content);
    } catch (error) {
        console.log("글 수정 컨트롤러 에러남~");
    }
}

// 게시글 삭제
exports.Delete = async function(req, res){
    const {id} = req.params;
    try {
        await posts.delete(id);
    } catch (error) {
        console.log("글 삭제 컨트롤러 에러남");
    }
}
