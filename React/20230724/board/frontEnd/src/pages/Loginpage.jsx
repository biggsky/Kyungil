import React, {useState, useEffect} from "react";
import {temp2, login} from "../features/countSlice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, Link} from "react-router-dom";

const Loginpage = () => {
  const nav = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const dispatch = useDispatch();

  const loginBtnClick = async (e) => {
    e.preventDefault();
    dispatch(temp2( {id,pw} ));
  };
  const value = useSelector((state) => state.store2.value);

  useEffect(() => {
    if (value === "로그인 완료") {
      dispatch(login());
      nav("/boardPage");
    }
  }, [value]);

  return (
    <>
      <div id='body'>
        <div id='body_in'>
          <div id='body_in_center'>
            <form onSubmit={loginBtnClick}>
              {/* <input type='text' name='userid' placeholder='ID를 입력하세요' /> */}
              <input type='text' name='userid' placeholder='ID를 입력하세요' onChange={(e)=>setId(e.target.value)} />
              <br />
              <br />
              <input type='password' name='userpw' placeholder='비밀번호를 입력하세요' onChange={(e)=>setPw(e.target.value)}/>
              <br />
              <br />
              {/* <button onClick={()=> dispatch(login() )}>로그인</button> */}
              <button>로그인</button>
            </form>
            <br />
            <div id="linkcenter">
              <p>상태:{value}</p>
              <br />
              <Link to={"/signup"}>회원가입</Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
