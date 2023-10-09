import React from 'react'
import { NoPlanBox, NoPlanBtn, NoPlanBtns, NoPlanText } from './PlanPc.styled'
import { useNavigate } from 'react-router-dom'

const NoPlanPc = () => {
    const nav = useNavigate();

  return (
    <>
      <NoPlanBox>
        <NoPlanText>만들기 진행 중인 일정이 없습니다.</NoPlanText>
        <NoPlanBtns>
            <NoPlanBtn onClick={() => {nav('/')}}>새로운 일정 만들러 가기</NoPlanBtn>
            <NoPlanBtn onClick={() => {nav('/mypage')}}>기존 일정 보러 가기</NoPlanBtn>
        </NoPlanBtns>
      </NoPlanBox>
    </>
  )
}

export default NoPlanPc
