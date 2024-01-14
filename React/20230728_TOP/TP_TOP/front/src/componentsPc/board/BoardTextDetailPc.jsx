import React from 'react'
import { SmallText,SubTitle } from './boardPc.styled'

const BoardTextDetailPc = (props) => {
  return (
    <>
    <div>
      <SmallText>
        {props.UploadUserNickname}
        {/* 유저님의 일정●3박4일 */}
      </SmallText>
    </div>
    <div>
      <SubTitle>
        {props.BoardTitle}
      </SubTitle>
    </div>
    </>
  )
}

export default BoardTextDetailPc