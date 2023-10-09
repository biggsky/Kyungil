import React from 'react'
import { ProfileName } from './mypage.styled';

const MypageName = ({nickname}) => {
  return (
    <div>
      <ProfileName>{nickname}</ProfileName>
      </div>
  )
}

export default MypageName