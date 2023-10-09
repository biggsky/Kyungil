import React from 'react'
import { useNavigate } from 'react-router'
import { styled } from 'styled-components'
import { EditNavigate } from "./MyPagePc.styled";


const MoveEditPc = () => {
    const navigate = useNavigate()

    const moveEditClick = () => {
        navigate('/editproflie'); 
      };
    
  return (
    <>
        <EditNavigate onClick={moveEditClick}>
            프로필 편집
        </EditNavigate>
    </>
  )
}
export default MoveEditPc