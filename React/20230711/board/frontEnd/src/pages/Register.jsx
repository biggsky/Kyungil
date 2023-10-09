import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");

  const nav = useNavigate();

  const registerClick = async () => {
    const {data} = await axios.post(
      "http://127.0.0.1:8000/register", {
        data :{
          user_id: id,
          nickname: name,
          user_pw: pw,
        }
      },
      {
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true, // 브라우저가 쿠키를 서버로 전달 할 수 있는 옵션
      },
    );
    console.log("얍",data);

    if(data == "1"){
      nav("/");
    }else if(data == "0"){
      alert("중복아이디!");
    }else{
      alert("중복 닉네임!");
    }
  };
  return (
    <>
      <div id='main_body'>
        <div id='center'>
          <div id='center2'>
            <br />
            <input
              type='text'
              placeholder='아이디'
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <br />
            <br />
            <input
              type='text'
              placeholder='닉네임'
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br />
            <br />
            <input
              type='password'
              placeholder='비밀번호'
              onChange={(e) => {
                setPw(e.target.value);
              }}
            />
            <br />
            <br />
            <button onClick={registerClick}>회원가입</button>
            <br />
            <br />
            <Link to={"/"}>로그인</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
