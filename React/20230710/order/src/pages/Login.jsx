import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router';

const Login = () => {
  const dispatch = useDispatch();
  const [user_id, setUser_id] = useState("");
  const [user_pw, setUser_pw] = useState("");
  const login = useSelector(store => store.isLogin)
  const nav = useNavigate();

  const handlerUserIdChange = (event) =>{
    setUser_id(event.target.value);
  }
  const handlerUserPwChange = (event) =>{
    setUser_pw(event.target.value);
  }

  const handlerAdd = () =>{
    dispatch({type: "LOGIN", payload : {user_id, user_pw} });
  }

  useEffect(()=>{
    if(login){
      nav("/Foodorder")
    }
  },[login])

  return (
    <>
      <br />
      <div>Login</div>
      <input type="text" value={user_id} placeholder='아이디' onChange={handlerUserIdChange} />
      <br />
      <input type="password" value={user_pw} placeholder='비밀번호' onChange={handlerUserPwChange} />
      <br /><br />
      <button onClick={handlerAdd}>로그인</button>
      
    </>
  )
}

export default Login