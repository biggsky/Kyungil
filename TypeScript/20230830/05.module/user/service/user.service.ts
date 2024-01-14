import { UserParams } from "../interfaces/login.request";
import { AuthenticationResponse, Authenticator } from "../strategy/Authenticator.interface";
import Strategy from "../strategy/strategy";

// 유저 서비스 로직 클래스 정의
class UserService {
    // 전략패턴 유저 로그인 서비스 로직 객체
    // 이메일, 카카오, 구글 세가지 로그인 로직을 사용할거임
    constructor(private readonly strategy : Strategy){}

    async login(type : string, credentials : UserParams) : Promise<AuthenticationResponse>{
        // Authenticator.interface.ts 에서 정의한 인터페이스 promise 안에 넣어줌

        const result = await this.strategy.login(type, credentials)
        return result;
    }
}

export default UserService