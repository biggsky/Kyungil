import React from "react";
import { TitleStyle } from "./boarddetailPc.styled";

const TitlePc = ({title}) => {
  return (
    <>
      <TitleStyle>{title}</TitleStyle>
    </>
  );
};

export default TitlePc;
