import {EmailAuthenticator, KaKaoAuthenticator, AuthProps, Login, LoginService} from "./Authent"

interface IEmailSender{
    sendEmail(email : string) : void
}

class EmailSender implements IEmailSender{
    sendEmail(email: string): void {
        
    }
}

export interface Strategy{
    email : EmailAuthenticator
    kakao : KaKaoAuthenticator
}


class Auth{
    // private 키워드가 붙어서 생성자에 넘겨받은 값이 객체의 키로 추가된다.
    constructor(
        private readonly authProps : AuthProps, 
        private readonly emailSender : EmailSender, 
        private readonly loginService : LoginService
    ){}

    // 로그인 로직
    public async login(){
        console.log("디스", this);
        await this.loginService.login("kakao", this.authProps)
    }

    // 이메일 인증 처리 구조
    public register() : void {
        this.emailSender.sendEmail(this.authProps.email);
    }
}

// 유저의 email과 password 임시 객체
const authProps : AuthProps = {email : "soon@naver.com", password : "12345"}
const _emailSender = new EmailSender();

// email 로그인 로직 클래스 동적 할당
const _email = new EmailAuthenticator()

// kakao 로그인 로직 클래스 동적 할당
const _kakao = new KaKaoAuthenticator()

// 로그인 서비스 로직을 가지고 있는 객체
const _strategy : Strategy = {
    email : _email,
    kakao : _kakao
}

const _loginService = new Login(_strategy)
const auth = new Auth(authProps, _emailSender, _loginService);
auth.login()