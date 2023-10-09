import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import AdminTop from '../components/admin/AdminTop'
import AdminMid from '../components/admin/AdminMid'

const Admin = () => {
  const nav = useNavigate();

  const userOrGuest = useSelector((state => {
    return state.userOrGuest;
  }))

  useEffect(() => {
    // 어드민이 아닌 사람이 입장하면
    if(userOrGuest.isAdmin == false) {
      nav('/login')
    }
  }, [])

  return (
    <>
      <AdminTop />
      <AdminMid />
    </>
  )
}

export default Admin
