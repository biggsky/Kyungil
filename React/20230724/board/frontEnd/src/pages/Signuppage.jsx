import React, {useState, useEffect} from "react";
import {signup, temp} from "../features/countSlice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, Link} from "react-router-dom";

const Signuppage = () => {
  const nav = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  const [temp2,setTemp2]=useState('')
  const dispatch = useDispatch();

  const signUpBtnClick = async (e) => {
    e.preventDefault();
    dispatch(temp( {id,pw,name} ));
  };

  const value = useSelector((state) => state.store1.value);
  // if(value == "회원가입 완료"){
  //   console.log(value);
  //   dispatch(signup());
  //   nav("/");
  // }

  useEffect(() => {
    if (value === "회원가입 완료") {
      // console.log(value);
      dispatch(signup());
      nav("/");
    }
  }, [value]);
  
  return (
    <div id='body'>
    
      <div id='body_in'>
        <div id='body_in_center'>
          <form onSubmit={signUpBtnClick}>
            <input
              type='text'
              name='userid'
              placeholder='ID를 입력하세요'
              onChange={(e) => setId(e.target.value)}
            />
            <br />
            <br />
            <input type="text" name="username" placeholder="닉네임을 입력하세요" onChange={(e)=> setName(e.target.value)} />
            <br />
            <br />
            <input
              type='password'
              name='userpw'
              placeholder='비밀번호를 입력하세요'
              onChange={(e) => setPw(e.target.value)}
            />
            <br />
            <br />
            <button>회원가입</button>
          </form>
          <br />
          <div id="linkcenter">
            <p>상태 : {value}</p>
            <br />
            Have an Account? <Link to={"/"}>로그인</Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signuppage;
