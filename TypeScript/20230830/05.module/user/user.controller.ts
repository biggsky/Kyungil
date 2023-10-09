import { UserParams } from "./interfaces/login.request";
import UserService from "./service/user.service";

// 사용자 서비스 로직 클래스 정의
class UserController{
    constructor(private readonly userService : UserService){}
    // /login/:type
    // 위의 경로로 요청이 들어왔을때 실행할 함수
    signin(){
        // req.body 유저의 정보를 받아오고
        // 임시 객체
        const loginParams : UserParams = {
            email : "soon@naver.com",
            password : "12345"
        }
        this.userService.login("google", loginParams);
    }
    // 회원가입
    // /signup
    signup(){
        // 회원가입 로직
    }
}

export default UserController
