import React from 'react'
import { useNavigate } from 'react-router'
import { EditNavigate } from './mypage.styled'



const MoveEdit = () => {
    const navigate = useNavigate()

    const moveEditClick = () => {
        navigate('/editproflie'); 
      };
    
  return (
    <div>
        <EditNavigate onClick={moveEditClick}>
            프로필 편집
        </EditNavigate>
    </div>
  )
}
export default MoveEdit