import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import {StyledProfileImg,InputBtn, } from "./MyPagePc.styled";




const EditImgPc = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
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

  return (
    <>
      <StyledProfileImg onClick={handleImageClick} preview={imagePreview}>
        {selectedFile ? selectedFile.name : 'imgs'}
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

export default EditImgPc;