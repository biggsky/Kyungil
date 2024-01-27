import React from 'react'
import styled from 'styled-components'

const StyledLikeSize3 = styled.img`
width: 30px;
height: 30px;
transform: translate(10px,3px);
cursor: pointer;
`

const LikeSize3 = () => {
  return (
    <>
        <StyledLikeSize3 />
    </>
  )
}

export default LikeSize3