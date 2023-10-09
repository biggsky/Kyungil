import React from 'react'
import SignupTop from '../components/signup/SignupTop'
import SignupMid from '../components/signup/SignupMid'
import SignupBottom from '../components/signup/SignupBottom'

const Signup = () => {
  return (
    <>
      <SignupTop />
      <SignupMid page={'회원가입'} />
      <SignupBottom page={'회원가입'} />
    </>
  )
}

export default Signup
