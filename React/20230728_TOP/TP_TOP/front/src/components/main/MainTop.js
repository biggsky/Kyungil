import React, { useState } from 'react'

import { MainTopBox, LogoBox, TextBox, InputBox } from './Main.styled'

// 로고 & 여행지 검색
const MainTop = ({locationSearched}) => {
  
const logo2 = '/imgs/icons/logo2.png'
const mainText = '/imgs/icons/mainText.png'
const search = '/imgs/icons/search.png'

  const [location, setLocation] = useState();

  return (
    <>
      <MainTopBox>
        <LogoBox>
          <img src={logo2}></img>
        </LogoBox>
        <TextBox>
          <img src={mainText}></img>
        </TextBox>
        <InputBox>
          <img onClick={() => {locationSearched(location)}} src={search}></img>
          <input onChange={(e) => {setLocation(e.target.value)}} type='text' placeholder='어디로 떠나시나요?'></input>
        </InputBox>
      </MainTopBox>
    </>
  )
}

export default MainTop
