import React from "react";

import SignupTop from "../componentsPc/signup/SignupTopPc";
import SignupMid from "../componentsPc/signup/SignupMidPc";
import SignupBottom from "../componentsPc/signup/SignupBottomPc";
import { SignUpContainer } from "../componentsPc/signup/SignupPc.styled";

const LoginPc = () => {
  return (
    <>
      <SignUpContainer>
        <SignupTop />
        <SignupMid page={"로그인"} />
        <SignupBottom page={"로그인"} />
      </SignUpContainer>
    </>
  );
};

export default LoginPc;
