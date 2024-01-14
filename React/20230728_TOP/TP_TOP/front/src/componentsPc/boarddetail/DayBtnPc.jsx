import React from 'react'
import { BtnStyle } from './boarddetailPc.styled'

const DayBtnPc = ({DayBtnClick}) => {
  return (
    <BtnStyle onClick={DayBtnClick}>📆 Day 보기</BtnStyle>
  )
}

export default DayBtnPc