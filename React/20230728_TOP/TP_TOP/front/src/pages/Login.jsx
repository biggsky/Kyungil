import React from 'react'

import SignupTop from '../components/signup/SignupTop'
import SignupMid from '../components/signup/SignupMid'
import SignupBottom from '../components/signup/SignupBottom'

const Login = () => {
  return (
    <>
      <SignupTop />
      <SignupMid page={'로그인'} />
      <SignupBottom page={'로그인'} />
    </>
  )
}

export default Login
