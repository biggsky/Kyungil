import React, { useEffect } from 'react'
import { PlanInfoBox, TopNavBox, TopNavBtn, PlanInfoTitle, PlantInfoDate } from './Nav.styled'

import { useNavigate } from 'react-router-dom'

const TopNav = ({isScrolled, gptAnswerSaved}) => {
  const nav = useNavigate();
  const back = '/imgs/icons/back.png'

  const moveToBack = () => {
    // 일정 페이지에서 누르면 마이페이지로 넘어가기
    // AddPlace, EditPlace에서 누르면 일정 페이지로 넘어가기
    window.history.back();
  }

  if(gptAnswerSaved == undefined) {
    return (
      <>
        <TopNavBox>
          <TopNavBtn onClick={moveToBack}><img src={back}></img></TopNavBtn>
        </TopNavBox>
      </>
    )
  }else {
    return (
      <>
        <TopNavBox>
          <TopNavBtn onClick={moveToBack}><img src={back}></img></TopNavBtn>
          {isScrolled &&        
          <PlanInfoBox>
              <PlanInfoTitle>{gptAnswerSaved.location} 여행</PlanInfoTitle>
              <PlantInfoDate>{gptAnswerSaved.startDate} ~ {gptAnswerSaved.endDate}</PlantInfoDate>
          </PlanInfoBox>
          }
        </TopNavBox>
      </>
    )
  }

}

export default TopNav
