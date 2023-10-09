import React from 'react'
import { ProfileName } from "./MyPagePc.styled";

const MypageNamePc = ({nickname}) => {
  return (
    <div>
      <ProfileName>{nickname}</ProfileName>
      </div>
  )
}

export default MypageNamePc