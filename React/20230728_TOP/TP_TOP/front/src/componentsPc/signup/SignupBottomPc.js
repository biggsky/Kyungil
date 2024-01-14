import React from 'react'
import { MoveBtn, MoveText, SignupBottomBox } from './SignupPc.styled'
import { useNavigate } from 'react-router-dom';

const SignupBottom = ({page}) => {
    const nav = useNavigate();

    let btn;
    let text;
    if(page == '회원가입') {
        btn = '로그인 하러 가기'
        text = '계정을 가지고 계신가요?'
    }else if(page == '로그인') {
        btn = '회원가입 하러 가기'
        text = '아직 계정이 없으신가요?'
    }
    
    const moveTo = () => {
        if(page == '회원가입') {
            nav('/login')
        }else if(page == '로그인') {
            nav('/signup')
        }
    }

  return (
    <>
      <SignupBottomBox>
        <MoveText>{text}</MoveText>
        <MoveBtn onClick={moveTo}>{btn}</MoveBtn>
      </SignupBottomBox>
    </>
  )
}

export default SignupBottom
