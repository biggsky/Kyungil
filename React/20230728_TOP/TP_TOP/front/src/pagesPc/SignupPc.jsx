import React from "react";
import SignupTop from "../componentsPc/signup/SignupTopPc";
import SignupMid from "../componentsPc/signup/SignupMidPc";
import SignupBottom from "../componentsPc/signup/SignupBottomPc";
import { SignUpContainer } from "../componentsPc/signup/SignupPc.styled";
const SignupPc = () => {
  return (
    <SignUpContainer>
      <SignupTop />
      <SignupMid page={"회원가입"} />
      <SignupBottom page={"회원가입"} />
    </SignUpContainer>
  );
};

export default SignupPc;
