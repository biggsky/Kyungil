import React from 'react'
import { ImgBox } from './boardPc.styled'
import styled from 'styled-components';

const ShowImg = styled.img`
width: 100%;
height: auto;
border-top-left-radius:10px;
border-top-right-radius:10px;
z-index: -1;
`



const BoardPreviewImgPc = (UserUploadImg) => {
  // const backgroundImage = {
  //   // backgroundImage : `url('../../../public/imgs/userplanimg/${UserUploadImg}')`,
  //   backgroundImage : `url('../../../public/imgs/userplanimg/1693005613122-631933648.jpg')`,
  // }
  const imgPath = '/imgs/userplanimg';
  let thumbNail;
  if(UserUploadImg.UserUploadImg != undefined){
    thumbNail = JSON.parse(UserUploadImg.UserUploadImg)[0];
  }

  return (
    <div>
         <ImgBox alt="각 여행리뷰 이미지" >
         {UserUploadImg.UserUploadImg != undefined ? (
           <ShowImg src={imgPath + "/" + thumbNail} alt="" />
         ) : (
          <ShowImg src={"https://news.airbnb.com/wp-content/uploads/sites/4/2022/04/VILLA-SANGLUNG.jpeg?fit=1024%2C678"} alt="" />
         )}
         </ImgBox>
    </div>
  )
}

export default BoardPreviewImgPc