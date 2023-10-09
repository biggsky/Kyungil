import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import AdminTopPc from '../componentsPc/admin/AdminTopPc'
import AdminMidPc from '../componentsPc/admin/AdminMidPc'

const AdminPc = () => {
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
      <AdminTopPc />
      <AdminMidPc />
    </>
  )
}

export default AdminPc
