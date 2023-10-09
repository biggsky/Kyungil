import React from 'react'
import { useNavigate } from 'react-router-dom';
import { StyleArrow,StyledImage } from './mypage.styled';



const ArrowBtn = () => {
    const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/mypage'); 
  };

  return (
    <div>
      <StyleArrow onClick={handleImageClick}>
        <StyledImage src="https://cdn.icon-icons.com/icons2/1462/PNG/512/134leftarrow_100014.png" alt="" />
      </StyleArrow>
    </div>
  );
  
}

export default ArrowBtn