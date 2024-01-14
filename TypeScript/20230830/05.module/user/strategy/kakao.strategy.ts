import {UserParams} from "../interfaces/login.request"
import { AuthenticationResponse, Authenticator } from "./Authenticator.interface"

// 검증 객체 구조 상속
//  카카오 로그인 검증 클래스 정의
class KaKaoAuthenticator implements Authenticator{
    async authentcate(credentials: UserParams): Promise<AuthenticationResponse> {
        // 카카오 로그인 로직
        console.log("kakao login 성공");
        return {success : true}
    }
}


export default KaKaoAuthenticator
