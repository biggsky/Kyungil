import React, {useState} from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Main = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const nav = useNavigate();
  const params = {
    user_id : id,
    user_pw : pw,
  }

  // const loginClick = () =>{
  //   console.log(id, pw);
  // }
  const loginClick = async(e) =>{
    e.preventDefault();
    const {data} = await axios.post('http://localhost:8000/login',{data :{user_id : id,
    user_pw : pw}}, {withCredentials : true});

    // document.cookie = `access_token = ${data.token};`;
    // document.cookie = `userIdSession = ${data.user_id};`;

    if(data.login_pass == 1){
      nav("/bulletinboard")
    }else if(data == "id_x"){
      alert("존재하지 않는 아이디입니다!");
    }
    else{
      alert("비밀번호 확인하세요!");
    }
  }
  return (
    <>
      <div id='main_body'>
        <div id='center'>
            <div id="center2">
                <br />
                <form onSubmit={loginClick}>
                <input type='text' placeholder="아이디" onChange={(e)=>{setId(e.target.value)}} />
                <br />
                <br />
                <input type='text' placeholder="비밀번호" onChange={(e)=>{setPw(e.target.value)}} />
                <br />
                <br />
                <button>로그인</button>
                <br /><br />
                </form>
                <Link to={"/register"}>회원가입</Link>

            </div>
        </div>
      </div>
    </>
  );
};

export default Main;
