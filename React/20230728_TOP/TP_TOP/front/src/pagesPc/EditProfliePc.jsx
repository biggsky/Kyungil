import React,{ useEffect, useState, useRef } from 'react'
import { useQuery } from 'react-query';
import { ipUrl } from '../util/util';

import TopNav from '../components/nav/TopNav';
import { StyledProfileImg, InputBtn, StyledProfileName, Button } from '../componentsPc/mypage/MyPagePc.styled';
// import { EditText } from '../components/mypage';
import {
  EditBtnPc,
  EditImgPc,
  EditNamePc,
  ArrowBtnPc,
  EditTextPc,
} from "../componentsPc/mypage";
import styled from "styled-components";
import { MypagePcBox } from '../componentsPc/mypage/MyPagePc.styled';
import { useNavigate } from 'react-router-dom';

const EditProfliePc = () => {
  const nav = useNavigate();

  const [load, setLoad] = useState(true) // 유저 정보 한 번 가져오고 useQuery 종료
  const [profileBtnChange, setProfileBtnChange] = useState(false);
  
  const [selectedFile, setSelectedFile] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const fileInputRef = useRef(null); 

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  
  
  // 로그인 유저 정보 가져오기
  const tryGetUserInfo = async () => {
    try {
      const response = await ipUrl.get(`/mypage/getInfo`)
      const data = response.data;
      console.log(data);
      return data;
    }catch (error) {
      console.log(error)
    }
  }
  const {data, isLoading} = useQuery(['getUser'], tryGetUserInfo, {
    enabled : load
  })
  useEffect(() => {
    if(isLoading == false) {
      setLoad(false)
    }
  }, [isLoading])

  // 프로필 이미지 관련
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

  // 닉네임 관련
  const NameClick = () => {
    setEditing(true);
  };
  const NameBlur = () => {
    setEditing(false);
    if(name == '') {
      return;
    }else {
      console.log(name)
    }
  };

  // 수정 완료
  const trySaveUserInfo = async () => {
    try {
      console.log('수정 저장')
      console.log(selectedFile)
      console.log(name)

      const form = new FormData();
      form.append('nickname', name);
      form.append('profile_img', selectedFile)

      const data = await ipUrl.post('/mypage/updateInfo', form, {
        withCredentials : true,
        headers : {
          'Content-Type': 'multipart/form-data'
        }
      })

      if(data.data == 'success') {
        nav('/mypage')
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(name || selectedFile) {
      setProfileBtnChange(true)
    }else if(!name && !selectedFile) {
      setProfileBtnChange(false)
    }
  }, [name, selectedFile])
  

  return (
    <>
      <TopNav />

       <MypagePcBox>
        {!isLoading &&
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

            <StyledProfileName onClick={NameClick}>
              {editing ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {setName(e.target.value)}}
                  onBlur={NameBlur}
                  autoFocus
                  maxLength={10}
                />
              ) : (
                name || data.nickname
              )}
            </StyledProfileName>          
          
            <Button change={profileBtnChange} onClick={() => {
              trySaveUserInfo()
            }}>
              수정 완료
            </Button>
            
            <EditTextPc/>
          </>        
        }
      </MypagePcBox>
        
    </>
  )

};

export default EditProfliePc;
