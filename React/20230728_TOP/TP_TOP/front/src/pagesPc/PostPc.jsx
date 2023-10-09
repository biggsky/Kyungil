import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainPc,MoveBoardBtnPc } from '../components/boarddetail/boarddetail.styled';
import { PostContentPc, PostTitlePc, PostBtnPc } from '../components/post/post.style';
import { PostPlan, ImgUpload } from '../components/post';
import { ipUrl } from '../util/util';
import BottomNavPc from "../componentsPc/nav/BottomNavPc";
import TopNav from '../components/nav/TopNav';

const PostPc = () => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const navigate = useNavigate();

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (uploadedFiles.length === 0 || title.trim() === '' || detail.trim() === '') {
      alert('이미지or제목or내용을 입력하세요!');
      return; 
    }
    const formData = new FormData();

    for (let i = 0; i < uploadedFiles.length; i++) {
      formData.append('uploadedFiles', uploadedFiles[i]);
    }
    formData.append('title',title)
    formData.append('detail',detail)
    
    try {
      const response = await ipUrl.post(
        "/post/write",
        formData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': `multipart/form-data`
          }
        }
      );
      const data = response.data;
      if (data === "create success") {
        navigate("/board");
      }
    } catch (error) {
      console.log("여기 못보내짐 에러");
      console.log(error);
    }
    
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDetailChange = (e) => {
    setDetail(e.target.value);
  };

  const handleFileUpload = (files) => {
    setUploadedFiles(files);
  };
  const MoveBoardClick =()=>{
    navigate("/board")
  }
  return (
    <>
      <TopNav />
      <MainPc>
        <ImgUpload name="images" onUpload={handleFileUpload} files={uploadedFiles} />
        <PostTitlePc
          type="text"
          name="title"
          placeholder="제목을 입력하세요"
          onChange={handleTitleChange}
          maxLength={100}
        />
        <PostContentPc
          type="text"
          name="detail"
          placeholder="내용을 입력하세요"
          onChange={handleDetailChange}
        />
        {/* <PostPlan /> */}
        <br /><br />
        <PostBtnPc onClick={handlePostSubmit}>등록하기</PostBtnPc>
      </MainPc>

      <BottomNavPc />
    </>
  );
};

export default PostPc;