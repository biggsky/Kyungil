import React from 'react'
import {Header, Body} from "../components"

const Login = ({login, setLogin}) => {
  return (
    <div>
      <Header name={"로그인 페이지"}></Header>
      {/* 
        자바스크립트가 코드를 읽는 과정에서 함수에 괄호가 있으면 
        중괄호는 자바스크립트를 사용하겠다고 알려주는건데 
        jsx문법

        함수에 괄호를 쓰면 함수 실행식으로 받아들여서 함수를 실행시킴
        그러면 매개변수를 사용해야할 경우에는 어떻게 하냐 함수도 값이라고 했는데
        익명함수를 만들어서 그 값을 전달하면 된다.

        
      */}
      {/* {
        document.querySelector("a").onclick = setLogin(!login)
      } */}
      
      <button onClick={()=>{setLogin(!login)} }> 로그인 or 로그아웃 </button>
      <Body path={"/"} name={"메인"} login={login} >  </Body>
      
      {/* <button onClick={ function() => {setLogin(true)} }> 로그인 하자 </button> */}
    </div>
  )
}

export default Login