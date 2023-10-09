// 로그인 가입 관련된 작업
// 카카오, 네이버, 구글 

import { Strategy } from "./auth"

interface AuthProps {
    email: string
    password : string
}

interface AuthenticationResponse {
    success : boolean
    message ? : string
}

interface Authenticator {
    // (검증에 대한 요청 처리)
    authenticate(credentials : AuthProps) : Promise<AuthenticationResponse>
}

// 이메일 로그인 로직 클래스
class EmailAuthenticator implements Authenticator {
    async authenticate(credentials: AuthProps): Promise<AuthenticationResponse> {
        // 로직은 없다. 요청과 응답 코드가 들어갈 부분
        console.log("email 로그인")
        return {success : true}
    }
}

// 카카오 로그인 로직 클래스
class KaKaoAuthenticator implements Authenticator {
    async authenticate(credentials: AuthProps): Promise<AuthenticationResponse> {
        // 카카오 로그인 로직 들어갈 부분
        console.log("kakao 로그인");
        return {success : true}
    }
}

// 로그인에 대한 서비스를 처리할 클래스 구조
interface LoginService {
    // 로그인 로직에 대한 함수 구조
    login(type : string, credentials : AuthProps) : Promise<AuthenticationResponse>
}

// 로그인 클래스에 로그인 서비스 구조를 상속 받고
class Login implements LoginService{
    constructor(private readonly strategy : Strategy){}
    // readonly : 읽을수만 있고 수정은 불가능하다.
    async login(type : "email" | "kakao", credentials: AuthProps) : Promise<AuthenticationResponse>{
        // strategy 로그인 로직이 들어있는 객체
        // 여기에서 어떤 로그인 로직으로 처리할지 type 구분해서
        const result = await this.strategy[type].authenticate(credentials)
        return result
    }
}

export {AuthProps, EmailAuthenticator, KaKaoAuthenticator, LoginService, Login}