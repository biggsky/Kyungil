import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import LoginBox from "./components/layout/loginBox";
import {weather, logins} from "./middleware";
import { useEffect, useState } from 'react';


function App() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  // 전역 상태에 접근할때 리듀서를 여러개 사용한 경우
  // 객체의 키값을 해당하는 리듀서 키값을 사용 해주자 login
  const isLogin = useSelector(state => state.login.isLogin);
  const userName = useSelector(state => state.login.id);
  const weatherData = useSelector(state => state.weather.weatherData)

  const login = () =>{
    dispatch(logins.login(id, pw) );
  }

  const logout = () =>{
    dispatch(logins.logout());
  }

  const getWeather = () =>{
    dispatch(weather.getWeather(name));
  }

  useEffect(()=>{
    console.log("weatherData : ", weatherData);
  }, [weatherData])

  useEffect(()=>{
    console.log("isLogin : ", isLogin);
    console.log("userName : ", userName);
  },[isLogin, userName]);


  // react생명주기 함수
  useEffect(()=>{
    console.log("id : ", id);
    console.log("pw : ", pw);
  }, [id, pw])

  return (
    <div className="App">
      {/* <LoginBox></LoginBox> */}

      <label>도시 이름</label>
      <input onChange={(e)=>{setName(e.target.value)} }></input>
      <button onClick={getWeather}>날씨 검색</button>

      <div>지금 여기는 {weatherData && weatherData.data?.name} 날씨는 : {weatherData && weatherData.data?.weather[0]?.main } </div>
      
      <label>아이디</label>
      <input onChange={(e)=> {setId(e.target.value) }}></input>
      
      <label>비밀번호</label>
      <input onChange={ (e) => {setPw(e.target.value)} }></input>
      
      <button onClick={login}>로그인</button>

      <div>로그인 됨?</div>{isLogin ? <>{userName} 유저가 로그인했어 <button onClick={logout}>로그아웃</button> </> : <>로그인 안됨</> }

    </div>
  );
}

export default App;

/* 
  api를 가져와서 스토어의 상태값을 바꿀때 비동기 처리를 하기위해서 미들웨어를 추가해야한다.

  클래스명이 겹치지 않는다.
  스타일에 관련되어서 props로 값을 전달해서 스타일 값을 적용 시킬 수 있다.
  SCSS
  styled-components
  npm i styled-components

  리덕스 설치

  npm i redux
  npm i react-redux

  저장소 구성하자 스토어

  redux-thunk
  api를 요청하고 처리가 된 뒤에 상태를 업데이트 하기 위해서
  dispatch를 지연 시킨다. actions라는 함수를 만들 거임.

  redux-thunk 미들웨어로 추가하는 방법

  dispatch 함수를 실행할때 매개변수로 객체를 넘기느냐 함수를 넘기느냐의 차이

  날씨 api를 가지고 와서 사용해보자.

  thunk가 해주는 역할은 Action Creators 라는 함수를 만들어주는것
  Action Creators 함수는 함수를 반환 한다.
  thunk는 dispatch를 딜레이 시켜주는 역할
  npm i redux-thunk

  npm start 우리가 개발할때 사용하는 개발 환경
  npm run build
  빌드된 파일을 배포하는것
  
  게시판 구현
  글 추가, 삭제, 수정, 
  express 사용해서 서버 구축 게시판 CRUD
  로그인 jwt토큰 사용해서 로그인 인증 까지
  개인 프로젝트 2~3일

  // 내가 어디까지 알고있는지 어디까지 할 수 있는지



*/