import React from 'react'
import {Link} from "react-router-dom"

const Main = () => {
  return (
    <>
        <div>메인페이지</div>
        <br />
        <Link to={"/login"}>로그인 페이지</Link>
    </>
  )
}

export default Main