import React from 'react'
import {Body, Header} from "../components"

const MyPage = ({login}) => {
  return (
    <div>
      <Header name={"마이 페이지"}></Header>
      <Body path={'/'} name={'메인'} login={login}></Body>
    </div>
  )
}

export default MyPage