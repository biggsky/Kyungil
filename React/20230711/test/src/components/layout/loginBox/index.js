import React from 'react'
import { LoginBoxWrap, LoginBoxInput } from './Login.styled'

const LoginBox = () => {
  return (
    // width={"1000px"} props값으로 width는 키로 넘어가는데 "1000px" 그럼 스타일 작업을 할때
    // 동적으로 스타일 값을 주고싶으면 어떻게 하지? 
    <div> 
        <LoginBoxWrap width={"100px"}>
            {/* 이게 없으면 500px가 들어감 Login.styled.js */}
            <p className='login-title'>로그인 박스</p>
            <LoginBoxInput>버튼</LoginBoxInput>
        </LoginBoxWrap> 
    </div>
  )
}

export default LoginBox