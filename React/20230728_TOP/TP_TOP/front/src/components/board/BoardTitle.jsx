import React from 'react'
import { useNavigate } from 'react-router'
import { Container,MovePost } from './board.styled'

const BoardTitle = () => {
  const navigate = useNavigate()

    const movePostClick = () => {
        navigate('/boardCreate'); 
      };

  return (
    <>
        <Container>
        <h3>해외 실시간 여행기 🧭</h3>
        <p>직접 다녀온 추천 일정과 여행 꿀팁 확인하기</p>
        <MovePost onClick={movePostClick}>글 작성하기</MovePost>
        </Container>
    </>
  )
}

export default BoardTitle