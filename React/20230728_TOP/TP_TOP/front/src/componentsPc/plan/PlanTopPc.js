import React, { useEffect, useState } from "react";
import { PlanTopBox, Title, Date, Selected } from "./PlanPc.styled";
import { useQuery } from "react-query";
import axios from "axios";
const PlanTopPc = ({ gptAnswerSaved }) => {
  // gpt에서 받아온 정보
  const { location, attractions, startDate, endDate, option1, option2 } =
    gptAnswerSaved;


  return (
    <>
      <PlanTopBox>
      
        <Title>{location} 여행</Title>
        <Date>
          {startDate} ~ {endDate}
        </Date>
        {/* <Selected>
          {option1.map((value, index) => {
            return `${value} `;
          })}
        </Selected>
        <Selected>
          {option2.map((value, index) => {
            return `${value} `;
          })}
        </Selected> */}
      </PlanTopBox>
    </>
  );
};

export default PlanTopPc;
