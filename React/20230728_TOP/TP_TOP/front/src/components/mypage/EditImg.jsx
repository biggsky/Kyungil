import React, { useState, useRef, useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import axios from 'axios'

import { saveProfile } from '../../redux/features/editProfile';

import { StyledProfileImg,InputBtn } from './mypage.styled';


const EditImg = () => {
  const dispatch = useDispatch();

  const [selectedFile, setSelectedFile] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const fileInputRef = useRef(null); 

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    if(selectedFile) {
      dispatch(saveProfile(selectedFile))
    }

  }, [selectedFile])

  return (
    <>
      <StyledProfileImg onClick={handleImageClick} preview={imagePreview}>
        {selectedFile ? '' : '프로필 선택'}
      </StyledProfileImg>
      <InputBtn>
        <input
          type="file"
          name="file"
          onChange={handleFileChange}
          ref={fileInputRef} 
          style={{ display: 'none' }}
        />
        <button type="button" onClick={handleButtonClick}>
          파일 등록하기
        </button>
      </InputBtn>
    </>
  );
};

export default EditImg;