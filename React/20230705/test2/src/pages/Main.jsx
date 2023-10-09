import React from 'react'
import {Link} from 'react-router-dom'

const Main = () => {
  return (
    <div>메인페이지
        <Link to={"/shop"}>상점으로 이동</Link>
    </div>
  )
}

export default Main