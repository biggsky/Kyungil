import React from 'react'
import { LoadingBox, LoadingCircle } from './Loading.styled'



// 2줄 버전
const Loading1 = () => {
const loading1 = '/imgs/icons/loading1.gif'
  return (
    <>
      <LoadingBox>
        <LoadingCircle>
            <img src={loading1}></img>
        </LoadingCircle>
      </LoadingBox>
    </>
  )
}

// 1줄 버전
const Loading2 = () => {
const loading2 = '/imgs/icons/loading2.gif'
return (
      <>
        <LoadingBox>
            <LoadingCircle>
                <img src={loading2}></img>
            </LoadingCircle>
        </LoadingBox>
      </>
    )
  }

export {Loading1, Loading2}
