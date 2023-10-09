import React from "react";
import {
  PlanInfoBox,
  TopNavBox,
  TopNavBtn,
  PlanInfoTitle,
  PlantInfoDate,
} from "./NavPc.styled";

import { useNavigate } from "react-router-dom";

const TopNavPc = ({ isScrolled, gptAnswerSaved }) => {
const back = "/imgs/icons/back.png";
  const nav = useNavigate();
return (
    <>
      <TopNavBox>
        <TopNavBtn>
          <img
            src={back}
            alt="뒤로가기"
            onClick={() => {
              // nav("/");
              window.history.back();
            }}
          ></img>
        </TopNavBtn>
        {/* 스크롤 내려가면 뜰 부분 */}
        {isScrolled && (
          <PlanInfoBox>
            <PlanInfoTitle>{gptAnswerSaved.location}</PlanInfoTitle>
            <PlantInfoDate>
              {gptAnswerSaved.startDate} ~ {gptAnswerSaved.endDate}
            </PlantInfoDate>
          </PlanInfoBox>
        )}
      </TopNavBox>
    </>
  );
};

export default TopNavPc;
