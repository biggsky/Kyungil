import React from 'react'
import { useState } from "react";
import axios from "axios";

// import {useNavigate} from "react-router-dom";

const Login = () => {
  // const nav = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  

  const loginBtnClick = async () => {
    console.log(id, pw);
    let a = await axios.post("http://localhost:8000/loginBtnClick", {data : {
      front_id : id, front_pw : pw
    }},{withCredentials : true});

    console.log(a);
  }

  return (
    <>
        <div>Login</div>
        <div>메타마스크 지갑 연결하세요!</div>
        
        {/* <input type="text" name='user_id' placeholder='ID 입력하세요.' onChange={(e)=>setId(e.target.value)} />
        <br />
        <input type="text" name='user_pw' placeholder='PW 입력하세요.' onChange={(e)=>setPw(e.target.value)} />
        <br />
        <button onClick={loginBtnClick}>로그인</button> */}

    </>
  )
}

export default Login