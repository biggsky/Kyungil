import React from "react";
import { PlanTopBox, Title, Date, Selected } from "./Plan.styled";

const PlanTop = ({ gptAnswerSaved }) => {
  const { location, attractions, startDate, endDate, option1, option2 } =
    gptAnswerSaved;

  return (
    <>
      <PlanTopBox>
        <Title>{location} 여행</Title>
        <Date>
          {startDate} ~ {endDate}
        </Date>
        <Selected>
          {option1.map((value, index) => {
            return `${value} `;
          })}
        </Selected>
        <Selected>
          {option2.map((value, index) => {
            return `${value} `;
          })}
        </Selected>
      </PlanTopBox>
    </>
  );
};

export default PlanTop;
