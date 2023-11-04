import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MainComponent } from "./css";
import {Login, Sale} from "./index";

const Main = () => {
    const [loginView, setloginView] = useState(false);
    const [saleView, setsaleView] = useState(false);
    const [blankDisplay, setBlankDisplay] = useState('block');

    const loginClick = () => {
        setloginView(true);

        // false로 바꿀것
        setBlankDisplay("none");
        setsaleView(false);
    }
    const saleClick = () => {
        setsaleView(true);

        // false로 바꿀것
        setBlankDisplay("none");
        setloginView(false);
    }
  return (
    <>
    <MainComponent>
      <button id="mainBtn" onClick={loginClick}>
        지갑로그인페이지
        {/* <Link to={"/login"}>지갑로그인페이지</Link> */}
      </button>
      <button id="mainBtn" onClick={saleClick}>판매등록페이지</button>
      <div id="blank" style={{display : blankDisplay}}></div>
      {loginView ? <Login /> : ""}
      {saleView ? <Sale /> : ""}
    </MainComponent>
    </>
  );
};

export default Main;
