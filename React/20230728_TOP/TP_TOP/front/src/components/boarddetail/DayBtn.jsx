import React from 'react'
import { BtnStyle } from './boarddetail.styled'

const DayBtn = ({DayBtnClick}) => {
  return (
    <BtnStyle onClick={DayBtnClick}>📆 Day 보기</BtnStyle>
  )
}

export default DayBtn