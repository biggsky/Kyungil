import React from 'react'
import { Bodydiv, Body2div, Body3div } from '../Body.styled'
import { gif1 } from '../img'
import Body2 from './Body2'
import Body3 from './Body3'


const Body = () => {
  return (
    <>
      <Bodydiv>
        <div id='first'>
          <div id='first_left'>
            <p>나의 NFT는 얼마나 안전할까?</p>
            <span>쉽고 편한 NFT 검사</span>
            <br />
            <span>NFTReally</span>
            <br /><br />
            <div id='morerelative'>
            <div id='more'>NFTReally 더 알아보기</div>
            </div>
          </div>
          <div id='first_right'>
            <img src={gif1} alt="" />
          </div>
        </div>
      </Bodydiv>

      <Body2div>
        <Body2 name="HOT Trending" />
      </Body2div>
      <Body2div>
        <Body2 name="많이 팔린 NFT" />
      </Body2div>

      <Body3div>
        <Body3 name="NFTReally 101" />
      </Body3div>

      <Body2div>
        <Body2 name="비싸게 팔린 NFT" />
      </Body2div>
      <Body2div>
        <Body2 name="평가 점수가 높은 NFT" />
      </Body2div>
      <Body2div>
        <Body2 name="검색이 많은 NFT" />
      </Body2div>

    </>
  )
}

export default Body