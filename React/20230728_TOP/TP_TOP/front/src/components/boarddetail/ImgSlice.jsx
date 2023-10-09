import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ImgBox, ImgBoxContainer, Image, ImageBtnPre, ImageBtnNext } from './boarddetail.styled'
import { ipUrl } from '../../util/util';


const imgPath = '/imgs/userplanimg'


const ImgSlice = ({images}) => {
  const { id } = useParams();
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imgArr.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === imgArr.length - 1 ? 0 : prevIndex + 1));
  };

  const BoardDetailImg = async ({ queryKey }) => {
    try {
      const response = await ipUrl.get(`/post/detail/${queryKey[1]}`);
      return response.data
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
  })
  const { data, isLoading } = useQuery(['boardDetail', id], BoardDetailImg);
const imgArr = JSON.parse(data.data.images)



  return (
    <div>
      {data &&
      <ImgBoxContainer>
        <ImageBtnPre onClick={prevImage}>◀️</ImageBtnPre>
        <ImgBox style={{ transform: `translateX(-${currentImageIndex * (100 / imgArr.length)}%)` }}>
          {imgArr.map((image, index) => (
              <Image>
                <img
                  key={index}
                  src={`${imgPath}/${image}`}
                  alt={`Image ${index + 1}`}
                />
              </Image>
          ))}
        </ImgBox>
        <ImageBtnNext onClick={nextImage}>▶️</ImageBtnNext>
      </ImgBoxContainer>}

    </div>
  )
}

export default ImgSlice