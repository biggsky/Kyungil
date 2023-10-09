import React from 'react'
import { AddStyle,imgStyle,BoardLine } from './boarddetailPc.styled'

const AddPlanBtnPc = () => {
  return (
    <>
    <AddStyle> <img style={imgStyle} src="https://assets.triple.guide/images/ico_lounge_download_white@4x.png" alt="" />내 일정으로 담기</AddStyle>
    <BoardLine/>
    </>
    )
}

export default AddPlanBtnPc